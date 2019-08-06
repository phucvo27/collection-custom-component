import React from 'react';
import StatusForm from './components/Status-Form/status-form.component';
import Navbar from './components/Navbar/navbar.component';
import Carousel from './components/Carousel/carousel.component';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='container' style={{marginTop: '4rem'}}>
          <StatusForm />
          <Carousel />
      </div>

      </React.Fragment>
      
  );
}

export default App;
