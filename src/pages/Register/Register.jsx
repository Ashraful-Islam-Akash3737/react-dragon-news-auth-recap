
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("form target", e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log("result is", result.user);
            })
            .catch(error => {
                console.log("error", error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="flex flex-col bg-[#f3f3f3] px-4 md:px-10 lg:px-20 py-4 md:py-10 lg:py-20 ">
                <h1 className="text-4xl mb-10 font-bold text-center">Register now!</h1>
                <div className=" w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <form onSubmit={handleRegister} className="mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#403F3F] font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#403F3F] font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#403F3F] font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl text-[#403F3F] font-semibold">Password</span>
                            </label>
                            <input type="password" name="password"
                                placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Register</button>
                        </div>
                    </form>
                    <p className="mt-5">Already have an account? <Link className="underline text-red-500" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;