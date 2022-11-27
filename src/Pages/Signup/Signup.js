import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Signup = (props) => {

    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const location = useLocation;
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setSignUpError('')

        createUser(name, email, password)
        .then(result => {
            const user = result.user;

            toast("Successfully Registered");

            console.log(user);
            navigate(from, {replace: true});
            const userInfo = {
                displayName: form.name
            }
            updateUser(userInfo)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
            form.reset();
        })

        .catch(err => {
            console.error(err)
        setSignUpError(err.message)});
 
        
    }


    return (
        <div>
            <div className="hero bg-primary h-[800px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6 font-semibold text-xl">If you want to buy or sell music instruments, then you have come to the right site. Signup and enjoy MusEnts!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" 
                               name="email" placeholder="email" className="input input-bordered" />
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
                            <p>Already Have an Accout? <Link className='text-black underline' to='/login'> Please Login!</Link></p>
                            </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type ="submit" value="Sign Up"/>
                            
                            </div>
                            { signUpError && <p className='text-red-600'>{signUpError}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;