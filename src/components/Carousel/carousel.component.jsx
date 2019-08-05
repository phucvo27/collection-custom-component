import React from 'react';

import './carousel.style.scss';

class Carousel extends React.Component{

    componentDidMount(){
        // add event listener for remove class when animation run completely
        document.querySelectorAll('.slide').forEach(el => {
            el.addEventListener('animationend', this.handleRemoveClass)
        })
    }
    handleRemoveClass = (e)=>{
        console.log('running listener')
        if(e.target.classList.value.includes('removeActiveNext')){
            console.log('prepare for removing')
            e.target.classList.remove('removeActiveNext')
        }
        if(e.target.classList.value.includes('removeActivePrev')){
            console.log('prepare for removing')
            e.target.classList.value = 'slide'
        }
    }
    handleNextSlide = ()=>{
        const currenSlide = document.querySelector('.slide.active');
        currenSlide.classList.remove('active','activeNext');
        currenSlide.classList.add('removeActiveNext');
        const nextSlide = currenSlide.nextSibling;
        console.log(nextSlide)
        if(nextSlide){
            nextSlide.classList.add('active','activeNext');
        }else{
            console.log('in else')
            console.log(document.querySelector('.slide:first-child'));
            document.querySelector('.slide:first-child').classList.add('active','activeNext')
        }
        
    }
    handlePrevSlide = ()=>{
        const currenSlide = document.querySelector('.slide.active');
        currenSlide.classList.remove('active','activePrev');
        // currenSlide.classList.remove('activeNext');
        // currenSlide.classList.remove('activePrev');
        currenSlide.classList.add('removeActivePrev');
        const nextSlide = currenSlide.previousSibling;
        //nextSlide.classList.add('active');
        if(nextSlide){
            nextSlide.classList.add('active','activePrev');
        }else{
            console.log('in else')
            console.log(document.querySelector('.slide:last-child'));
            document.querySelector('.slide:last-child').classList.add('active','activePrev')
        }
    }

    render(){
        return(
            <div className="carousel">
                <div className="slider">
                    <div className="slide active" style={{backgroundColor: '#ddd'}}>
                        <p>Slide 1 </p>
                    </div>
                    <div className="slide" style={{backgroundColor: 'goldenrod'}} >
                        <p>Slide 2 </p>
                    </div>
                    <div className="slide" style={{backgroundColor: 'violet'}}>
                        <p>Slide 3 </p>
                    </div>
                </div>
                <button onClick={this.handlePrevSlide} className="btn--prev">
                    Prev
                </button>
                <button onClick={this.handleNextSlide} className="btn--next">
                    Next
                </button>
            </div>
        )
    }
}


export default Carousel;