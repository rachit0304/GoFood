import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {

  const [search , setSearch] = useState("");
  let [foodCat, setFoodcat] = useState([]); // we use map function for looping over an array only , we cant loop over an object by using map fo that we use forin
  
  let [fooditem, setFooditem] = useState([]);

  const loadData = async () => {
    let response = await fetch("https://go-food-server.vercel.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json()).then(data => setFoodcat(data) ).catch(err => console.log("error"))
    // console.log(response)
 
};

  useEffect(() => {
    loadData();
 
  }, []); 

  return (
    <div>
      <div>
        
        <Navbar />
      </div>

      <div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{zIndex: "10"}}>
                    <div className="d-flex justify-content-center">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                    {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                    </div>
                    </div>
                <div className="carousel-item active">
                <img src="https://source.unsplash.com/random/600x400/?burger" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://source.unsplash.com/random/600x400/?sandwhich" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://source.unsplash.com/random/600x400/?pizza" className="d-block w-100" alt="..."/>
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


      <div className="container">
      {
    
        foodCat[1] && foodCat[1].map(data=>(
   
              <div className="row mb-3">
             
                  <div key={data._id}  className="fs-3 m-3">
                    {data.CategoryName}
                   {/* { console.log(data.CategoryName)} */}
                  </div>

                  <hr />

                { 
                  foodCat[0] && foodCat[0]
                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toString().toLowerCase().includes(search.toString().toLocaleLowerCase())))
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                         <Card fooditem = {filterItems}
                         options={filterItems.options[0]}
                         
                         />
                        </div>
                      );
                    })
                 } 

              </div>
             
        ))
          
          }
      </div>

      <div>
       
        <Footer />
      </div>

    </div>
  )
}

