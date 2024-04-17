import React,{useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'


export default function Login() {
  let navigate = useNavigate();

  const [credentials , setcredentials] = useState({email:"", password:"" })

  const HandleSubmit= async(e)=>{
      e.preventDefault();
      const response = await fetch("https://go-food-server.onrender.com/api/loginuser" , {
          method:'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({ email:credentials.email , password : credentials.password })
      });

      const json = await response.json();

      if(!json.success){
          alert("Enter valid credentials")
      }
      if(json.success){
        localStorage.setItem("userEmail" , credentials.email)

        localStorage.setItem("authToken" , json.authToken)
        navigate('/');

    }

  }

  const onChange =(event)=>{
      setcredentials({...credentials , [event.target.name]: event.target.value})
  }

  return (
    <div>
          <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{"borderRadius": "1rem"}}>
          <div className="card-body p-5 text-center">

            <form onSubmit={HandleSubmit} className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input name='email'autoComplete='off' value={credentials.email} onChange={onChange} type="email" id="typeEmailX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input name='password' value={credentials.password} onChange={onChange} type="password" id="typePasswordX" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

            </form>

            <div>
              <p className="mb-0">Don't have an account? <Link to="/createuser" className="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>
            <div>
              <p className="mb-0">Guest Visit<Link to="/" className="text-white-50 fw-bold">Click here</Link>
              </p>
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
