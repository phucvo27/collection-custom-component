import React from 'react';

import './carousel.style.scss';

class Carousel extends React.Component{

    constructor(){
        super();
        this.state = {
            currenSlide: 1,
            slides: [1,2,3],
            isRunningAnimate: false
        }
    }

    componentDidMount(){
        // add event listener for remove class when animation run completely
        document.querySelectorAll('.slide').forEach(el => {
            el.addEventListener('animationend', this.handleRemoveClass)
        })
    }
    componentWillUnmount(){
        document.querySelectorAll('.slide').forEach(el => {
            el.removeEventListener('animationend', this.handleRemoveClass)
        })
    }
    handleRemoveClass = (e)=>{
        
        if(e.target.classList.value.includes('removeActiveNext')){
            e.target.classList.value = 'slide'
        }
        if(e.target.classList.value.includes('removeActivePrev')){
            e.target.classList.value = 'slide'
        }
        this.setState(()=>({isRunningAnimate: false}))
    }
    handleNextSlide = ()=>{
        this.setState(()=>({isRunningAnimate: true}))
        try{
            const currenSlide = document.querySelector('.slide.active');
            currenSlide.classList.remove('active','activeNext');
            currenSlide.classList.add('removeActiveNext');
            const nextSlide = currenSlide.nextSibling;
            if(nextSlide){
                nextSlide.classList.add('active','activeNext');
            }else{
                document.querySelector('.slide:first-child').classList.add('active','activeNext')
            }
        }catch(e){
            document.querySelector('.slide:first-child').classList.add('active','activeNext')
        }
        
        
    }
    handlePrevSlide = ()=>{
        this.setState(()=>({isRunningAnimate: true}))
        try{
            const currenSlide = document.querySelector('.slide.active');
            currenSlide.classList.remove('active','activePrev');
            currenSlide.classList.add('removeActivePrev');
            const nextSlide = currenSlide.previousSibling;
            if(nextSlide){
                nextSlide.classList.add('active','activePrev');
            }else{
                document.querySelector('.slide:last-child').classList.add('active','activePrev')
            }
        }catch(e){
            document.querySelector('.slide:last-child').classList.add('active','activePrev')
        }
        
    }

    render(){
        return(
            <div className="carousel">
                <div className="slider">
                    <div className="slide active activeNext" style={{backgroundColor: '#ddd'}}>
                        <p>Slide 1 </p>
                    </div>
                    <div className="slide" style={{backgroundColor: 'goldenrod'}} >
                        <p>Slide 2 </p>
                    </div>
                    <div className="slide" style={{backgroundColor: 'violet'}}>
                        <p>Slide 3 </p>
                    </div>
                </div>
                <button disabled={this.state.isRunningAnimate} onClick={this.handlePrevSlide} className="btn--prev">
                    Prev
                </button>
                <button disabled={this.state.isRunningAnimate ? true : false} onClick={this.handleNextSlide} className="btn--next">
                    Next
                </button>
            </div>
        )
    }
}


export default Carousel;