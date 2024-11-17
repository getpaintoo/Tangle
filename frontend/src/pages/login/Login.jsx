import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
	<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <img src="/logo.svg" alt="Logo" style={{ width: '150px', height: '150px' }} className="mb-4" />
      <div className='w-full max-w-md p-6 rounded-3xl shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        {/* Контейнер для заголовка и картинки */}
        <div className='flex items-center justify-center mb-4'>
          <h1 className='text-3xl font-semibold text-center text-white'>
            Login to
            <span className='text-blue-400'> Tangle</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className='w-full input input-bordered h-10'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label className='label'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to='/signup' className='text-sm hover:underline hover:text-gray-400 mt-2 inline-block text-white'>
            Don't have an account?
          </Link>

          <div className='mt-4'>
            <button className='btn btn-block btn-sm' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> Tangle</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;
