import RestrauntCard from "./ResataurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filteredResturant,setfilteredResturant] =useState([]);

  const [SearchTest, setSearchTest] = useState("");

  console.log("Re-render the component of the Resturants")

  useEffect(() => {
    fecthData();
  }, [])


  const fecthData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );

    const json = await data.json();

    console.log(json)

    setlistOfRestaurants(json?.data?.cards);
    setfilteredResturant(json?.data?.cards);
  };

  // Conditional Rendering , based on condition render the UI component
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }


  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input text="search the iteams" className="search-box" value={SearchTest}
            onChange={(e) => {
              setSearchTest(e.target.value)
            }}
          />
          <button
            onClick={() => {
              const filteredResturants = listOfRestaurants.filter(
                (res) => res.data?.data?.name?.toLowerCase().includes(SearchTest.toLowerCase())
              );
              setfilteredResturant(filteredResturants)
            }}
          >
            Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.data.data.avgRating < 4
            );
            setlistOfRestaurants(filterdList);
            console.log(filterdList);
          }}
        >
          Top Rated Resataurants
        </button>
      </div>
      <div className="res-conatainer">
        {filteredResturant.map((rest) => (
          <RestrauntCard key={rest.data.data.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
