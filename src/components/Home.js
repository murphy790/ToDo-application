import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

  const [started, setStarted] = useState(false);
  const navigate = useNavigate();

  function registrationPage() {
    setStarted(true);
    navigate('/Registration', { replace: true });
  }




  return (
    <div className='homediv'>
        <h1 className='firstheading'>Get things done with ToDo!</h1>
      <p className='homeparagraph'>ToDo application is an app that helps the user increase their productivity,prioritise tasks,manage tasks effectively and use their time wisely.  </p>
      <button type="button" className="homebutton" onClick={registrationPage}>{started}
        <>Get started</>
      </button>
      {/* <button onClick={()=>{setRegister(true)}}>Get Started</button> */}

    </div>
  )
}

export default Home