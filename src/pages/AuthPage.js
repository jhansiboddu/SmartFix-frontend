// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './AuthPage.css'; // Create this file or reuse your styling
// // import { useNavigate } from 'react-router-dom';

// // const AuthPage = () => {
// //   const [isRegister, setIsRegister] = useState(false);
// //   const [form, setForm] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     role: 'user',
// //   });
// //   const [msg, setMsg] = useState('');
// //   const [isError, setIsError] = useState(false);

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       const url = isRegister
// //         ? 'http://localhost:5000/api/auth/register'
// //         : 'http://localhost:5000/api/auth/login';

// //       const payload = isRegister
// //         ? form
// //         : { email: form.email, password: form.password };

// //       const res = await axios.post(url, payload);
// //       if (isRegister) {
// //         setMsg(res.data.message);
// //         setIsError(false);
// //         setIsRegister(false);
// //       } else {
// //         const { user } = res.data;
// //         localStorage.setItem('user', JSON.stringify(user));
// //         localStorage.setItem('userId', user._id);  // ✅ Store userId separately

// //       }
// //     } catch (err) {
// //       setMsg(err.response?.data?.error || 'Request failed');
// //       setIsError(true);
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-box">
// //         <h2>{isRegister ? 'Register' : 'Login'}</h2>

// //         {isRegister && (
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Name"
// //             onChange={handleChange}
// //           />
// //         )}

// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           onChange={handleChange}
// //         />

// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           onChange={handleChange}
// //         />

// //         {isRegister && (
// //           <select name="role" onChange={handleChange}>
// //             <option value="user">User</option>
// //             <option value="technician">Technician</option>
// //           </select>
// //         )}

// //         <button onClick={handleSubmit}>
// //           {isRegister ? 'Create Account' : 'Login'}
// //         </button>

// //         {msg && <p className={isError ? 'error' : 'success'}>{msg}</p>}

// //         <p className="switch-text">
// //           {isRegister ? 'Already have an account?' : "Don't have an account?"}
// //           <span onClick={() => setIsRegister(!isRegister)}>
// //             {isRegister ? ' Login' : ' Register'}
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AuthPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './AuthPage.css'; 
// import { useNavigate } from 'react-router-dom';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name,setName]=useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');

//   // Additional user profile fields
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');
//   const [address, setAddress] = useState('');

//   const [message, setMessage] = useState('');
//   const [error, setError] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       if (isLogin) {
//         const res = await axios.post('http://localhost:5000/api/auth/login', {
//           email,
//           password,
//         });
//         localStorage.setItem('userId', res.data.userId);
//         localStorage.setItem('role', res.data.role);
//         setError(false);
//         navigate('/upload');
//       } else {
//         const res = await axios.post('http://localhost:5000/api/auth/register', {
//           name,
//           email,
//           password,
//           role,
//           phone,
//           location,
//           address
//         });
//         setMessage(res.data.message);
//         setError(false);
//         setIsLogin(true); // switch to login after registration
//       }
//     } catch (err) {
//       setError(true);
//       setMessage(err.response?.data?.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Register'}</h2>

//       <input
//   type="text"
//   placeholder="Name"
//   value={name}
//   onChange={(e) => setName(e.target.value)}
// />


//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {!isLogin && (
//         <>
//           <select value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="user">User</option>
//             <option value="technician">Technician</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </>
//       )}

//       <button onClick={handleSubmit}>
//         {isLogin ? 'Login' : 'Register'}
//       </button>

//       {message && (
//         <p className={error ? 'error-msg' : 'success-msg'}>{message}</p>
//       )}

//       <p>
//         {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//         <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? 'Register here' : 'Login here'}
//         </span>
//       </p>
//     </div>
//   );
// };

// export default AuthPage;

import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Common fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  // Profile-specific fields
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
  try {
    if (isLogin) {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // ✅ Updated to match backend response
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('role', res.data.role);
      setError(false);
      navigate('/userroutes/home'); // Adjust path based on role if needed
    } else {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
        role,
        phone,
        location,
        address,
        name
      });
      setMessage(res.data.message);
      setError(false);
      setIsLogin(true); // Switch to login form
    }
  } catch (err) {
    setError(true);
    setMessage(err.response?.data?.message || 'Something went wrong');
  }
};


  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          <>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="technician">Technician</option>
            </select>

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </>
        )}

        <button onClick={handleSubmit}>
          {isLogin ? 'Login' : 'Register'}
        </button>

        {message && (
          <p className={error ? 'error-msg' : 'success-msg'}>{message}</p>
        )}

        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register here' : 'Login here'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
