import React from 'react';
import '../App.css';

const Signup = () => {
	return (

		<div className="justify-content-center d-flex">
		  <form action="http://localhost:7000/auth/sign_up" method="POST" className="bg-dark p-5 text-white rounded" crossOrigin="">
		  	<label htmlFor="number">Phone number</label>
		    <input className="text-white" name="number" id="number" type="tel" required/><br/>
		    <label htmlFor="password">Password </label>
		  	<input className="text-white" type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
		  	title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters" required /><br />

		    <button type="submit" value="Submit" className="btn btn-light w-50 m-5">Create</button><br />
		    </form>
		</div>
	);
}
export default Signup;