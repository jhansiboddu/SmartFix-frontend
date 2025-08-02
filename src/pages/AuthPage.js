// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './AuthPage.css';
// // import { useNavigate } from 'react-router-dom';

// // const AuthPage = () => {
// //   const [isLogin, setIsLogin] = useState(true);

// //   // Common fields
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('user');

// //   // Profile-specific fields
// //   const [phone, setPhone] = useState('');
// //   const [location, setLocation] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [skill, setSkill] = useState(''); // 🔥 new field only for technicians

// //   const [message, setMessage] = useState('');
// //   const [error, setError] = useState(false);

// //   const navigate = useNavigate();

// //   const handleSubmit = async () => {
// //     try {
// //       if (isLogin) {
// //         const res = await axios.post('http://localhost:5000/api/auth/login', {
// //           email,
// //           password,
// //         });
// //         localStorage.setItem('userId', res.data.userId);
// //         localStorage.setItem('role', res.data.role);
// //         setError(false);
// //         navigate('/userroutes/home'); // Adjust based on role if needed
// //       } else {
// //         const payload = {
// //           name,
// //           email,
// //           password,
// //           role: role.toLowerCase(),
// //           phone,
// //           location,
// //           address,
// //         };

// //         if (role === 'technician') {
// //           payload.skill = skill;
// //         }

// //         const res = await axios.post('http://localhost:5000/api/auth/register', payload);
// //         setMessage(res.data.message);
// //         setError(false);
// //         setIsLogin(true);
// //       }
// //     } catch (err) {
// //       setError(true);
// //       setMessage(err.response?.data?.message || 'Something went wrong');
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-box">
// //         <h2>{isLogin ? 'Login' : 'Register'}</h2>

// //         {!isLogin && (
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         )}

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />

// //         {!isLogin && (
// //           <>
// //             <select value={role} onChange={(e) => setRole(e.target.value)}>
// //               <option value="user">User</option>
// //               <option value="technician">Technician</option>
// //             </select>

// //             {/* Conditionally show skill input */}
// //             {role === 'technician' && (
// //               <input
// //                 type="text"
// //                 placeholder="Skill (e.g., Electrical, Plumbing)"
// //                 value={skill}
// //                 onChange={(e) => setSkill(e.target.value)}
// //               />
// //             )}

// //             <input
// //               type="text"
// //               placeholder="Phone Number"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //             />

// //             <input
// //               type="text"
// //               placeholder="Location"
// //               value={location}
// //               onChange={(e) => setLocation(e.target.value)}
// //             />

// //             <input
// //               type="text"
// //               placeholder="Address"
// //               value={address}
// //               onChange={(e) => setAddress(e.target.value)}
// //             />
// //           </>
// //         )}

// //         <button onClick={handleSubmit}>
// //           {isLogin ? 'Login' : 'Register'}
// //         </button>

// //         {message && (
// //           <p className={error ? 'error-msg' : 'success-msg'}>{message}</p>
// //         )}

// //         <p>
// //           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
// //           <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
// //             {isLogin ? 'Register here' : 'Login here'}
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AuthPage;


// // jhansi code 

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './AuthPage.css'; // optional for styling

// // const AuthPage = () => {
// //   const [isRegister, setIsRegister] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     role: 'user',
// //     phone: '',
// //     location: '',
// //     address: '',
// //     skill: '',
// //     age: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: name === 'age' ? Number(value) : value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const payload = { ...formData };
// //     if (formData.role !== 'technician') {
// //       delete payload.skill;
// //     }

// //     try {
// //       const res = await axios.post('http://localhost:5000/api/auth/register', payload);
// //       alert(res.data.message || 'Registered successfully');
// //       setIsRegister(false);
// //     } catch (err) {
// //       const msg = err.response?.data?.message || 'Registration failed';
// //       alert(msg);
// //     }
// //   };

// //   return (
// //     <div className="auth-page">
// //       <h2>{isRegister ? 'Register' : 'Login'}</h2>
// //       {isRegister && (
// //         <form onSubmit={handleSubmit} className="auth-form">
// //           <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
// //           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// //           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
// //           <select name="role" value={formData.role} onChange={handleChange}>
// //             <option value="user">User</option>
// //             <option value="technician">Technician</option>
// //           </select>
// //           <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
// //           <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
// //           <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
// //           <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
// //           {formData.role === 'technician' && (
// //             <input type="text" name="skill" placeholder="Skill" value={formData.skill} onChange={handleChange} />
// //           )}
// //           <button type="submit">Register</button>
// //         </form>
// //       )}

// //       <button onClick={() => setIsRegister(!isRegister)}>
// //         {isRegister ? 'Already have an account? Login' : 'New user? Register'}
// //       </button>
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

//   // Common fields
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user');

//   // Profile-specific fields
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');
//   const [address, setAddress] = useState('');
//   const [skill, setSkill] = useState('');
//   const [age, setAge] = useState(''); // 👈 new field

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
//         navigate('/userroutes/home');
//       } else {
//         const payload = {
//           name,
//           email,
//           password,
//           role: role.toLowerCase(),
//           phone,
//           location,
//           address,
//           age: Number(age) // 👈 converted to number
//         };

//         if (role === 'technician') {
//           payload.skill = skill;
//         }

//         const res = await axios.post('http://localhost:5000/api/auth/register', payload);
//         setMessage(res.data.message);
//         setError(false);
//         setIsLogin(true);
//       }
//     } catch (err) {
//       setError(true);
//       setMessage(err.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>{isLogin ? 'Login' : 'Register'}</h2>

//         {!isLogin && (
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {!isLogin && (
//           <>
//             <select value={role} onChange={(e) => setRole(e.target.value)}>
//               <option value="user">User</option>
//               <option value="technician">Technician</option>
//             </select>

//             {role === 'technician' && (
//               <input
//                 type="text"
//                 placeholder="Skill (e.g., Electrical, Plumbing)"
//                 value={skill}
//                 onChange={(e) => setSkill(e.target.value)}
//               />
//             )}

//             <input
//               type="number"
//               placeholder="Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="Location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />

//             <input
//               type="text"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </>
//         )}

//         <button onClick={handleSubmit}>
//           {isLogin ? 'Login' : 'Register'}
//         </button>

//         {message && (
//           <p className={error ? 'error-msg' : 'success-msg'}>{message}</p>
//         )}

//         <p>
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//           <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
//             {isLogin ? 'Register here' : 'Login here'}
//           </span>
//         </p>
//       </div>
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [skill, setSkill] = useState('');
  const [age, setAge] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // const handleSubmit = async () => {
  //   try {
  //     if (isLogin) {
  //       const res = await axios.post('http://localhost:5000/api/auth/login', {
  //         email,
  //         password,
  //       });
  //       localStorage.setItem('userId', res.data.userId);
  //       localStorage.setItem('role', res.data.role);
  //       setError(false);
  //       navigate('/userroutes/home');
  //     } else {
  //       const payload = {
  //         name,
  //         email,
  //         password,
  //         role: role.toLowerCase(),
  //         phone,
  //         location,
  //         address,
  //         age: Number(age)
  //       };
  //       if (role === 'technician') {
  //         payload.skill = skill;
  //       }

  //       const res = await axios.post('http://localhost:5000/api/auth/register', payload);
  //       setMessage(res.data.message);
  //       setError(false);
  //       setIsLogin(true);
  //     }
  //   } catch (err) {
  //     setError(true);
  //     setMessage(err.response?.data?.message || 'Something went wrong');
  //   }
  // };
const handleSubmit = async () => {
  try {
    if (!email || !password) {
      setError(true);
      setMessage('Email and password are required');
      return;
    }

    if (isLogin) {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('role', res.data.role);
      setError(false);
if (res.data.role === 'user') {
  navigate('/userroutes/home');
} else if (res.data.role === 'technician') {
  navigate('/technician/tickets'); // 👈 change to your technician route
} else {
  navigate('/'); // fallback or admin route
}
    } else {
      const payload = {
        name,
        email,
        password,
        role: role.toLowerCase(),
        phone,
        location,
        address,
        age: Number(age),
      };
      if (role === 'technician') {
        payload.skill = skill;
      }

      const res = await axios.post('http://localhost:5000/api/auth/register', payload);
      setMessage(res.data.message);
      setError(false);
      setIsLogin(true);
    }
  } catch (err) {
    setError(true);
    setMessage(err.response?.data?.message || 'Something went wrong');
    console.error('Login/Register Error:', err.response || err);
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

            {role === 'technician' && (
              <input
                type="text"
                placeholder="Skill (e.g., Electrical, Plumbing)"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
            )}

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

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
