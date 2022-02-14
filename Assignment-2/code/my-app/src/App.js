import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      {/* Start your React code here */}
      <div className="subdiv">
        <div className='imgtag'>
          <img src={employee.profileImg} />
        </div>
        <div className='nametag'>
          <h1>{employee.name}</h1>
          {/* <p> Location <br></br> <h3>{employee.location}</h3></p> */}

        </div>
        <div className='locationtag loc1'>
          <p> Location </p>
          <h3>{employee.location}</h3>
        </div>
        <div className='blgrp loc1'>
          <p> BloodGroup </p>
          <h3>{employee.bloodGroup}</h3>
        </div>
        <div className='agetag loc1'>
          <p> Age </p>
          <h3>{employee.age}</h3>
        </div>
      </div>


      {/* <p> BloodGroup <br></br> <h3>{employee.bloodGroup}</h3></p>
  <p> Age <br></br> <h3>{employee.age}</h3></p> */}
    </div>
  )
}



export default App;
