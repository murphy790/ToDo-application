
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [login, setLogin] = useState(false);
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();


//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setLogin(false);
//   };


//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setLogin(false);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === '' || password === '') {
//       setError(true);
//     } else {
//       setLogin(true);
//       setError(false);
//       navigate('/Todolist', { replace: true });
//     }
//   };

//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: login ? '' : 'none',
//         }}>
//         <h1>User {email} successfully registered!!</h1>
//       </div>
//     );
//   };

//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? '' : 'none',
//         }}>
//         <h1>Please enter correct login details</h1>
//       </div>
//     );
//   };


//   return (
//     <div className="form">
//       <div>
//         <h1>Welcome Back</h1>
//         <img src="https://images.unsplash.com/photo-1574658117113-9d5c3dc5eefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="nature is amazing" />
//       </div>

//       <div className="messages">
//         {successMessage()}
//         {errorMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}

//         <label className="label">Email</label>
//         <input onChange={handleEmail} className="input"
//           value={email} type="email" />

//         <label className="label">Password</label>
//         <input onChange={handlePassword} className="input"
//           value={password} type="password" />

//         <button onClick={handleLogin} className="btn" type="Login">
//           Login
//         </button>
//       </form>
//       <p>Dont have an account?<Link to="/registration">Registration</Link></p>

//     </div>
//   );
// }

// export default Login

