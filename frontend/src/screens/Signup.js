import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'


export default function Signup() {
  let navigate = useNavigate();


    const [credentials , setcredentials] = useState({name: "", email:"", password:"", address:"" })

    const HandleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("https://go-food-server.onrender.com/api/createuser" , {
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name: credentials.name , email:credentials.email , password : credentials.password , address : credentials.address})
        });

        const json = await response.json();
        alert("You are registerd successfully")
        navigate('/login');

        if(!json.success){
            alert("Enter valid credentials")
        }

    }

    const onChange =(event)=>{
        setcredentials({...credentials , [event.target.name]: event.target.value})
    }
  return (
    <div>
            <section className="vh-100" style={{"backgroundColor": "#eee"}}>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{"borderRadius": "25px"}}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form onSubmit={HandleSubmit} className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input name='name' autoComplete='off' value={credentials.name} onChange={onChange} type="text" id="formname" className="form-control" />
                            <label className="form-label" htmlFor="formname">Your Name</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input name='email' autoComplete='off' value={credentials.email} onChange={onChange} type="email" id="formemail" className="form-control" />
                            <label className="form-label" htmlFor="formemail">Your Email</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input name='password' value={credentials.password} onChange={onChange} type="password" id="formpass" className="form-control" />
                            <label className="form-label" htmlFor="formpass">Password</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input name='address' autoComplete='off' value={credentials.address} onChange={onChange} type="text" id="form" className="form-control" />
                            <label className="form-label" htmlFor="form">Address</label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">

                       <Link to="/login" className="btn btn-danger m-3">Already a user</Link>

                       </div>

                        </form>

                    </div>
       
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    </div>
  )
}
