import React from 'react';
import './Progress-Bar.style.scss'
class ProgressBar extends React.Component{

    componentDidMount(){
        const progress = document.querySelector('.progress');
        progress.style.setProperty('--width-end','88%')
    }

    render(){
        return(
            <div className="progress__container">
                <div className="progress"></div>
            </div>
        )
    }
}

export default ProgressBar;