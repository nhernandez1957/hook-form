import React, { useState } from "react";

const UserForm = props => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const [FirstNameError, setFirstNameError] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [ConPasswordError, setConPasswordError] = useState("");

    const FirstNameHandler = (event) => {
        setFirstName(event.target.value);

        if(event.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters.")
        } else {
            setFirstNameError("");
        }
    }

    const LastNameHandler = (event) => {
        setLastName(event.target.value);

        if(event.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters.")
        } else {
            setLastNameError("");
        }
    }

    const EmailHandler = (event) => {
        setEmail(event.target.value);

        if(event.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.")
        } else {
            setEmailError("");
        }
    }
    
    const PasswordHandler = (event) => {
        setPassword(event.target.value);

        if(event.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.")
        } else {
            setPasswordError("");
        }
    }

    const ConPasswordHandler = (event) => {
        setConfirmPassword(event.target.value);

        if(event.target.value !== Password) {
            setConPasswordError("Passowrds must match.")
        } else {
            setConPasswordError("");
        }
    }

    return(
        <div className="border w-50 p-3 d-block mx-auto my-3">
            <form>
                <div className="form-group">
                    <label htmlFor="FirstName" className="form-label">First Name:</label>
                    <input type="text" className="form-control" name="FirstName" onChange={FirstNameHandler}/>
                    <span className="alert-danger">{FirstName.length > 0 && FirstNameError}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="LastName" className="form-label">Last Name:</label>
                    <input type="LastName" className="form-control" name="LastName" onChange={LastNameHandler}/>
                    <span className="alert-danger">{LastName.length > 0 && LastNameError}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="Email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" name="Email" onChange={EmailHandler}/>
                    <div className="form-text">We'll never share your email with anyone else.</div>
                    <span className="alert-danger">{Email.length > 0 && EmailError}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="Password" onChange={PasswordHandler}/>
                    <span className="alert-danger">{Password.length > 0 && PasswordError}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password:</label>
                    <input type="password" className="form-control" name="ConfirmPassword" onChange={ConPasswordHandler}/>
                    <span className="alert-danger">{ConfirmPassword.length > 0 && ConPasswordError}</span>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <h3 className="display-3">Your Form Data:</h3>
            <h3 className="display-3">First Name: <span className="text-info">{FirstName}</span></h3>
            <h3 className="display-3">Last Name: <span className="text-info">{LastName}</span></h3>
            <h3 className="display-3">Email: <span className="text-info">{Email}</span></h3>
            <h3 className="display-3">Password: <span className="text-info">{Password}</span></h3>
            <h3 className="display-3">Confirm Password: <span className="text-info">{ConfirmPassword}</span></h3>
        </div>
    );
}
export default UserForm;