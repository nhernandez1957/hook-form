import React, { useState } from "react";

const UserForm = props => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    return(
        <div className="border w-50 p-3 d-block mx-auto my-3">
            <form>
                <div className="form-group">
                    <label htmlFor="FirstName" className="form-label">First Name:</label>
                    <input type="text" className="form-control" name="FirstName" onChange={(event)=>{setFirstName(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="LastName" className="form-label">Last Name:</label>
                    <input type="LastName" className="form-control" name="LastName" onChange={(event)=>{setLastName(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" name="Email" onChange={(event)=>{setEmail(event.target.value)}}/>
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="form-group">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="Password" onChange={(event)=>{setPassword(event.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password:</label>
                    <input type="password" className="form-control" name="ConfirmPassword" onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
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