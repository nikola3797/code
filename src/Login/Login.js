import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useHistory} from 'react-router-dom';




const Login = () => {


    let history = useHistory();
  
    function handleClick() {
      history.push("/home");
    }



    return(
    <body>
        <div id="login">
        <div class="text-center">
            <h3 className="text-white pt-5">Login form</h3>
        </div>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <div id="login-form" action="/home" >
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label for="username" className="text-info">Username:</label><br></br>
                                    <input type="text" name="username" id="username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br></br>
                                    <input type="text" name="password" id="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br></br>
                                    <button onClick={handleClick} className='btn btn-info btn-md' >Submit</button>
                                </div>
                                <div id="register-link" className="text-right">
                                    <Link to="/registration" className="text-info">Register here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </body>
    )
}

export default Login;