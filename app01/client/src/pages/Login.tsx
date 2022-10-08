import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   password: "",
  // });

  const [err, setError] = useState(null);

  // const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input
          required
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChange}
        />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don&apos;t you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
