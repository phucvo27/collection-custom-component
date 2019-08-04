import React from 'react';

import './status-form.style.scss';


class StatusForm extends React.Component{

    constructor(){
        super();
        this.state = {
            currentTabs: 'status',
            status: ''
        }
    }

    changeTabs = (tabname)=>{
        this.setState(()=>({currentTabs: tabname, status: ''}))
    }

    handleTextChange = (e)=>{
        const { value , name} = e.target;
        this.setState(()=>({[name] : value}))
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.state.currentTabs === 'multimedia'){
            console.log('Your are submit with media component')
        }else{
            console.log('Your are submit with plain status')
        }
    }
    render(){
        return (
            <div className="status__form">
                <div className="status__form__header">
                    <div onClick={()=>{ this.changeTabs('status')}} className={`status__form__header--item ${this.state.currentTabs === 'status' ? 'active' : ''}`}>
                        <p>Status</p>
                    </div>
                    <div onClick={()=>{ this.changeTabs('multimedia')}}  className={`status__form__header--item ${this.state.currentTabs === 'multimedia' ? 'active' : ''}`}>
                        <p>Multimedia</p>
                    </div>
                </div>
                <form className="status__form__body" onSubmit={this.handleSubmit}>
                    {
                        this.state.currentTabs === 'status' 
                            ? <textarea onChange={this.handleTextChange} placeholder="What are you thinking..." name="status" value={this.state.status} cols="30" rows="10" />
                            : <div className="box__multi">
                                <textarea onChange={this.handleTextChange}  placeholder="What are you thinking..." name="status" value={this.state.status} cols="30" rows="10" />
                                <input type="file" name="file" id="file"/>
                                <label htmlFor="file" id="file">Upload your file</label>
                            </div> 
                    }

                    <div className="status__form__footer">
                        <button type='submit'>Post Status</button>
                    </div>
                </form>
                
            </div>
        )
    }
}


export default StatusForm;