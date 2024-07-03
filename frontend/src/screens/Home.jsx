import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Caraousel from "../components/Caraousel";

export default function Home() {
  const [search, setSearch] = useState("");
  let [foodCat, setFoodcat] = useState([]); // we use map function for looping over an array only , we cant loop over an object by using map fo that we use forin

  let [fooditem, setFooditem] = useState([]);
  const [fetching, setFetching] = useState(false);

  const loadData = async () => {
    setFetching(true);
    let response = await fetch("https://go-food-server.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFoodcat(data);
        setFetching(false);
      })
      .catch((err) => console.log("error"));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar search={search} setSearch={setSearch} />
      </div>

      <Caraousel search={search} setSearch={setSearch} />

      <div className="container justify-items-center lg:w-75 md:w-100">
    {fetching && <Loader />}

    {!fetching &&
      foodCat[1] &&
      foodCat[1].map((data) => (
        <div className="row mb-3 container">
          <div key={data._id} className="fs-3 m-3">
            {data.CategoryName}
            <hr />
          </div>

          {foodCat[0] &&
            foodCat[0]
              .filter(
                (item) =>
                  item.CategoryName === data.CategoryName &&
                  item.name
                    .toString()
                    .toLowerCase()
                    .includes(search.toString().toLocaleLowerCase())
              )
              .map((filterItems) => {
                return (
                  <div
                    key={filterItems._id}
                    className="col-12 col-md-12 col-sm-3 col-lg-12 mb-4 card-render"
                    
                  >
                    <Card
                      fooditem={filterItems}
                      options={filterItems.options[0]}
                    />
                  </div>
                );
              })}
        </div>
      ))}
</div>


      <div>
        <Footer />
      </div>
    </div>
  );
}
