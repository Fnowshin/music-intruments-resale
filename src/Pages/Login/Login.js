import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import {FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../Layout/hooks/useToken';

const Login = (props) => {

    const {login, providerLogin, userInfo} = useContext(AuthContext);

    const [loginUserEmail, setLoginEmailUser] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then (result => {
          const user = result.user;
          navigate(from, {replace: true});
          console.log(user);
          saveBuyer(user);
         
        
        })
        .catch(error => console.error(error)); 
      }

    const from = location.state?.from?.pathname || '/';

   

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            setLoginEmailUser(email)
            form.reset();
        })
        .then(error => console.log(error));
    }

    if (token) {
        navigate(from, {replace: true});
    }

    
    const saveBuyer = (userInfo) => {
        const user = {userInfo};
        fetch('http://localhost:5000/buyers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
           navigate('/');
            
        })
       
    }
   
    

    return (
        <div className="hero bg-primary h-[800px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 font-semibold text-xl">If you want to buy or sell music instruments, then you have come to the right site. Login and enjoy MusEnts!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" 
                            name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className='text-secondary font-bold mt-4'>
                            <p>New In MusEnts? <Link className='text-black underline' to='/signup'> Please Register!</Link></p>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                        <input className='btn btn-primary' type ="submit" value="Login"/>
                        </div>
                    </form>
                    <div>
                    <div className="divider m-0 px-6">Or Use </div>
                        <button onClick={handleGoogleSignIn} className='text-secondary font-bold'><FcGoogle className='mt-3 mb-6 text-3xl '></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;