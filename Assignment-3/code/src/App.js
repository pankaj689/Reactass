import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow = "<"
function App() {
  return (
    <div className="site-container">
      {/* Start Your code here */}
      <header className="head">
        <p className='arr'>{arrow}</p>
        <div>
          <h1>Alan Ford</h1>
          <p className='hnum'>00005152</p>
        </div>
        <button className='btn' >Print</button>
      </header>
      <div className='customer-info ' >
        <p>/Appointment On/i 9:00(24-05-2016)</p>
        <p>Email: alan.form@email.nl</p>
        <p> <b>phone </b> +31123456789</p>
      </div>
      <div className='order-info  '>
        <div >
          <h1>Stetus</h1>
          <div className='inl'>
            <p className='dot'></p>
            <p className='para'>In Progress</p>
          </div>
        </div>
        <div>
          <h1>Door</h1>
          <p>Mark</p>
        </div>
        <div>
          <h1>Time</h1>
          <p>10:30 (25-05-2016)</p>
        </div>

      </div>
      <div className='product-list'>
        <div className='baxp'>
          <div className='box' ></div>
        </div>
        {/* <div className='box' ></div> */}
        <div className='imagediv' >
          <img alt="profile pic" src="https://www.w3schools.com/howto/img_avatar.png" className='image' ></img>
        </div>
        <div className='cont'>
          <h1>Boltaart Bosbeeent</h1>
          <p> lorem som yecsvsfv fkvjnskvjnsjcnjn dkjnsjndmc hjnljcdankadnc kjnjnjlnadajcnlajnjc  kjdncljdn jvffdvfmv </p>

        </div>
        <div className='btm' >
          <p className='arr arrbtm '>{'>'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
