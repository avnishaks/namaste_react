import resList from "../utils/mockData";
import RestrauntCard from "./ResataurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.data.data.avgRating <= 4
            );
            setlistOfRestaurants(filterdList);
            console.log(filterdList);
          }}
        >
          Top Rated Resataurants
        </button>
      </div>
      <div className="res-conatainer">
        {listOfRestaurants.map((rest) => (
          <RestrauntCard key={rest.data.data.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
