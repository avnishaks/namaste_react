import RestrauntCard from "./ResataurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);

  const [filteredResturant, setfilteredResturant] = useState([]);

  const [SearchTest, setSearchTest] = useState("");



  useEffect(() => {
    fecthData();
  }, [])


  const fecthData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );

    const json = await data.json();
    setlistOfRestaurants(json?.data?.cards);
    setfilteredResturant(json?.data?.cards);
  };

  // Conditional Rendering , based on condition render the UI component
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks Like internet is gone !! Please Check Internet </h1>


  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="flex">
        <div className="mt-2 p-2">
          <input text="search the iteams" className="border border-solid border-black" value={SearchTest}
            onChange={(e) => {
              setSearchTest(e.target.value)
            }}
          />
          <button className="px-2 ml-2 bg-green-500 rounded-lg font-bold"
            onClick={() => {
              const filteredResturants = listOfRestaurants.filter(
                (res) => res.data?.data?.name?.toLowerCase().includes(SearchTest.toLowerCase())
              );
              setfilteredResturant(filteredResturants)
            }}
          >
            Search</button>
        </div>
        <div className="mt-2 p-2">
          <button
            className="px-2  bg-green-500 rounded-lg font-bold"
            onClick={() => {
              const filterdList = listOfRestaurants.filter(
                (res) => res.data.data.avgRating > 4
              );
              setlistOfRestaurants(filterdList);
            }}
          >
            Top Rated Resataurants
          </button>
        </div>

      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((rest) => (
          <Link key={rest.data.data.id} to={"/resturant/" + rest.data.data.id}> <RestrauntCard resData={rest} /> </Link>

        ))}
      </div>
    </div>
  );
};

export default Body;
