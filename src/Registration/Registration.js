import React from 'react';
import './Registration.css';
import {Link} from 'react-router-dom';


const registration = () => (
    <body>
        <div id="registration">
        <div class="text-center">
            <h3 className="text-white pt-5">Registration form</h3>
        </div>
            <div className="container">
                <div id="registration-row" className="row justify-content-center align-items-center">
                    <div id="registration-column" className="col-md-6">
                        <div id="registration-box" className="col-md-12">
                            <form id="registration-form" className="form">
                                <h3 className="text-center text-info">Register</h3>
                                <div className="form-group">
                                    <label for="username" className="text-info">Username:</label><br></br>
                                    <input type="text" name="username" id="username" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br></br>
                                    <input type="text" name="password" id="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="email" className="text-info">Email:</label><br></br>
                                    <input type="text" name="email" id="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                <div class="text-center">
                                    <input type="submit" name="submit" className='btn btn-info btn-md' value="submit" />
                                </div>
                                </div>
                                <div id="register-link" className="text-right">
                                    <Link to="/login" className="text-info">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </body>

)

export default registration;