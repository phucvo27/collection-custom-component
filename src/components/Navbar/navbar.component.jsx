import React from 'react';

import './navbar.style.scss';


class Navbar extends React.Component{


    handleActiveNavbar = (e)=>{
        document.querySelector('.navbar > .navigation').classList.toggle('nav-active')
        // const navItem = document.querySelectorAll('.navigation__item');
        // console.log(navItem)
        // navItem.forEach((el, index) => {
        //     if(el.style.animation){
        //         el.style.animation = ' ';
        //     }else{
        //         el.style.animation = `navItemFadeIn .5s ease forwards ${index / 7 + 1}s`;
        //     }
        // });
    }
    handleShowDropdow = (e)=>{
        if(e.target.nextSibling){
            if(e.target.nextSibling.style.display !== 'block'){
                e.target.nextSibling.style.display = 'block';
            }else{
                e.target.nextSibling.style.display = 'none'
            }
        }
        
    }
    componentDidMount(){
        document.querySelector('.burger').addEventListener('click', this.handleActiveNavbar);
        document.querySelectorAll('.navigation__item').forEach( el => {
            el.addEventListener('click', this.handleShowDropdow);
        })
    }

    componentWillUnmount(){
        document.querySelector('.burger').removeEventListener('click', this.handleActiveNavbar)
        const navItems = document.querySelectorAll('.navigation__item');
        navItems.forEach( el => {
            el.removeEventListener('click', this.handleShowDropdow);
        })
    }
    render(){
        return (
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <h2>Navbar</h2>
                </div>
                <ul className='navigation'>
                    <li className='navigation__item'>
                        <a className='navigation__item--link' href='google.com'>Home</a>
                    </li>
                    <li className='navigation__item'>
                        <p className='navigation__item--link'>Product</p>
                        <div className='dropdown'>
                            <ul className='navigation'>
                                <li className='navigation__item'>
                                    <p className='navigation__item--link'>Product 1</p>
                                </li>
                                <li className='navigation__item'>
                                    <p className='navigation__item--link'>Product 2</p>
                                </li>
                                <li className='navigation__item'>
                                    <p className='navigation__item--link'>Product 3</p>
                                </li>
                                <li className='navigation__item'>
                                    <p className='navigation__item--link'>Product 4</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='navigation__item'>
                        <p className='navigation__item--link'>About</p>
                    </li>
                    <li className='navigation__item'>
                        <p className='navigation__item--link'>Contact</p>
                    </li>
                    <li className='navigation__item'>
                        <p className='navigation__item--link'>Sign In</p>
                    </li>
                </ul>
    
                <div className='burger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </nav>
        )
    }
    
}


export default Navbar;