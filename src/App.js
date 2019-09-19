import React from 'react';
import StatusForm from './components/Status-Form/status-form.component';
import Navbar from './components/Navbar/navbar.component';
import Carousel from './components/Carousel/carousel.component';
import Post from './components/Post/Post.component';
import ProgressBar from './components/Progress-Bar/ProgressBar.component'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container' >
          <ProgressBar />
      </div>
      <div className='container' style={{marginTop: '4rem'}}>
          <StatusForm />
          <Carousel />

          <div style={{margin: '4rem 0'}}>
            <Post />
          </div>
      </div>
      

      </React.Fragment>
      
  );
}

export default App;
