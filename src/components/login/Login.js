import React from 'react';
import './Login.css'
import { Link , useLocation ,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signUpWithGoogle ,  signUpWithFacebook ,signUpWithGitHub} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect = location.state?.from || '/shop'
    console.log(location.state?.from)

    const handleGoogle = () =>{
        signUpWithGoogle()
        .then(result =>{
            history.push(redirect)
        })
    }
    const handleFacebook = () =>{
        signUpWithFacebook()
        .then(result =>{
            history.push(redirect)
        })
    }
    const handleGitHub = () =>{
        signUpWithGitHub()
        .then(result =>{
            history.push(redirect)
        })
    }
    return (
        <div>
            <div className="login-form">
                <h1>Login Here !!</h1>
                <form>
                    <label htmlFor="email">Email : </label> <br />
                    <input type="email" name="email" id="email" />
                    <br />
                    <br />
                    <label htmlFor="password">Password : </label><br />
                    <input type="password" name="password" id="password" />
                    <br /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <div className="create-new-link">
                <p>New Here  ?</p>
                <button><Link to="/register">Create new Account</Link></button>
                </div>
                <br />
                <br />
                <div>-------------Or---------------</div>
                <br />
                <br />
                <br />
                <button className="btn-regular" onClick={handleGoogle}>Sign in with Google</button>
                <button className="btn-regular" onClick={handleFacebook}>Sign in with facebook</button>
                <button className="btn-regular" onClick={handleGitHub}>Sign in with github</button>
            </div>
        </div>
    );
};

export default Login;