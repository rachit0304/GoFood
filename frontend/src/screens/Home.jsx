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
            <div className="row mb-3 me-5 container">
              <div key={data._id} className="fs-3 m-3 container">
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
                        className="col-12 col-md-6 col-lg-3 ms-5 container" style={{width: "18rem"}}
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
