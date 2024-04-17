import React from 'react'

export default function Caraousel({search, setSearch}) {
  return (
    <div>
       <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex: "10"}}>
                    <div className="d-flex justify-content-center">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                    </div>
                    </div>
                <div className="carousel-item active imgage">
                <img src="https://source.unsplash.com/random/500x300/?burger" className="d-block w-100" alt="Burger Image"/>
                </div>
                <div className="carousel-item">
                <img src="https://source.unsplash.com/random/500x300/?sandwhich" className="d-block w-100" alt="Sandwhich Image"/>
                </div>
                <div className="carousel-item">
                <img src="https://source.unsplash.com/random/500x300/?pizza" className="d-block w-100" alt="Pizza Image"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}
