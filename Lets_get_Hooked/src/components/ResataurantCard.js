import resList from "../utils/mockData";
import {CDN_URL} from "../utils/constant";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, totalRatingsString } =
    resData.data.data;
  return (
    <div className="res-card">
      <img
        src={
           CDN_URL+cloudinaryImageId
        }
      />
      <div className="res-property">
        <h5>{name}</h5>
        <h6>{cuisines.join(",")}</h6>
        <h7>{totalRatingsString} stars</h7>
      </div>
    </div>
  );
};

export default RestrauntCard;
