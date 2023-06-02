import resList from "../utils/mockData";
import RestrauntCard from "./ResataurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-conatainer">
        {resList.map((rest) => (
          <RestrauntCard key={rest.data.data.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
