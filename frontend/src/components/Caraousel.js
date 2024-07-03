import React from 'react'

export default function Caraousel() {
  return (
    <div className='mt-2 lg:w-75 container'>
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex: "10"}}>
                    <div className="d-flex justify-content-center">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} /> */}
                    </div>
                    </div>
                <div className="carousel-item active">
                <img src="https://img.freepik.com/free-vector/gradient-indian-restaurant-facebook-cover_23-2149429439.jpg?w=1180&t=st=1719480001~exp=1719480601~hmac=de040fa99b750f7bc7c742c0828ff1da1f3fc4de63496b6ba9fa8cf0a75286f7" className="d-block w-100 " alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://img.freepik.com/free-photo/flat-lay-healthy-vegetarian-dinner-table-setting-sandwiches-with-tomato-cucumber-avocado-strawberry-herbs-olives-snacks-clean-eating-vegan-food_2829-17047.jpg?w=1180&t=st=1719479945~exp=1719480545~hmac=f3b800dc3adcf6b1e48b37aab56e11e4d22811710d23e1d63d7a613d613b29b3" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=1060&t=st=1719480804~exp=1719481404~hmac=1189b7bdb3631c34b4bcc628cb1c32201fe71aa41cba93cff40766a9084a9618" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}
