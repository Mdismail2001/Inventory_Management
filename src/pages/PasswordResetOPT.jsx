import React from 'react';
import { useNavigate } from 'react-router';
import myaxios from '../utils/myaxios';

const PasswordResetOPT = () => {

    const Navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        data.email= localStorage.getItem("email");
        console.log(data);

        myaxios.post("/verify-otp",data)
        .then((response) => {
            if (response.data.status === "success") {
                console.log(response.data);
                localStorage.setItem("token",response.data.token);
                Navigate("/setnewpassword/");
            }
            else{
                console.error(response.error);
            }
        }).catch((error) => {
            console.error(error);
        });

    }


    return (
        <div>
        <div classNameName="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-90  p-4">
                        <div className="card-body">
                            <h4>Submit OTP</h4>
                            <br/>
                            <form onSubmit={handleSubmit}>
                            <label>Your OTP</label>
                            <input id="otp" placeholder="User OTP" className="form-control" type="text" name="otp"/>
                            <br/>
                            <button type="submit" className="btn w-100 float-end bg-gradient-primary">Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PasswordResetOPT;