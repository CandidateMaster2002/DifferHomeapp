import React, { useState } from 'react';


const LoginPage = () => {
    const [user, setUser] = useState({})
    const handleChange = (event) =>{
        console.log(event);
                const name =  event.target.name;
                const houseue = event.target.houseue;
                setUser(houseues => ({...houseues,
                    [name]: houseue})
                )

    }
    const loginAdmin = (event) => {
        event.preventDefault();
         console.log (event)    ;
         console.log("user",user)   ;
         let headers = new Headers();

         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
        //  headers.append('Authorization', 'Basic ' + base64.encode(emai + ":" +  password));
         headers.append('Origin','http://localhost:3000');
     
        fetch('http://localhost:5000/login', {            
            method: "POST",
            headers: headers,
            body: JSON.stringify(user)
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.message === "logged in successfully"){
                    alert("logged in successfully");
                }
                else{
                    alert("incorrect inputs");
                }
                
             
              
            })
            .catch((err) => {
              console.log(err);
            });
    }
    return (
        <>
            <div className='LoginPage'>
                {/* <img src='images/login_bg.jpg' /> */}
                <h1>Login Page</h1>

                <form action="/" onSubmit={loginAdmin}>
                    <div className="AvtarImg">
                        <img src="images/avatarImg.png" alt="Avatar" className="avatar" />
                    </div>

                    <div className="LoginBox">
                        <label for="uname"><b>User Name</b></label>
                        <input name = "email" houseue={user.email || ""} onChange ={handleChange} type="text" placeholder="Enter Username" required />

                        <label for="psw"><b>Password</b></label>
                        <input name= "password" type="password" placeholder="Enter Password" houseue={user.password || ""} onChange ={handleChange}  required />

                        <button type="submit" >Login</button>
                        <label>
                            <input type="checkbox" checked="check" name="remember" /> Remember me
                        </label>
                    </div>

                    <div className="LoginBottom">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="forgetPsw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginPage;