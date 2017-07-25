import React from 'react';
import {CardText, RaisedButton, TextField} from "material-ui";
import {Link} from "react-router-dom";

const SignUpFormTwo = ({
                           onSubmit,
                           onChange,
                           errors,
                           user,
                       }) => (
    <div className="app flex-row align-items-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mx-4">
                        <div className="card-block p-4">
                            <h1>Register</h1>
                            <p className="text-muted">Create your account</p>

                            <form action="/" onSubmit={onSubmit}>
                                <div className="md-form">
                                    <TextField
                                        floatingLabelText="Name"
                                        name="name"
                                        errorText={errors.name}
                                        onChange={onChange}
                                        value={user.name}
                                    />
                                </div>
                                <div className="md-form">
                                    <TextField
                                        floatingLabelText="Email"
                                        name="email"
                                        errorText={errors.email}
                                        onChange={onChange}
                                        value={user.email}
                                    />
                                </div>

                                <div className="md-form">
                                    <TextField
                                        floatingLabelText="Password"
                                        type="password"
                                        name="password"
                                        onChange={onChange}
                                        errorText={errors.password}
                                        value={user.password}
                                    />
                                </div>
                                <div className="md-form">
                                    <div className="button-line">
                                        <RaisedButton type="submit" label="Create New Account" primary/>
                                    </div>
                                    <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SignUpFormTwo;
//<label htmlFor="form10" data-error="wrong" data-success="right">Type your password</label>