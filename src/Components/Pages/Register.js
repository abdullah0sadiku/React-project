import React, { useState } from 'react';

const RegisterForm = () => {
  const [action, setAction] = useState('Register');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted with data:', formData);

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some((user) => user.email === formData.email);

    if (userExists) {
      alert('User with the same email already exists.');
    } else {
      const newUser = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

      alert('User registered successfully!');
    }

    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='conreg'>
      <div className='Register'>
        <h2>{action}</h2>

        <form onSubmit={handleSubmit}>
          <label>
            {action === 'Login' ? <div></div> : (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder='Full Name'
              />
            )}
          </label>
          <br />

          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Email:'
            />
          </label>
          <br />

          <label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
            />
          </label>
          <br />

          <a href='#' className={action === "Register" ? "submit" : action === "Submit"} onClick={() => { setAction("Login") }}> Already Have an Account ?</a>

          <br />

          <button type="submit" className={action === "Login" ? "submit" : action === "Submit"} onClick={() => { setAction("Register") }}>Register</button>
          <button type="submit" className={action === "Register" ? "submit" : action === "Submit"} onClick={() => { setAction("Login") }}>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
