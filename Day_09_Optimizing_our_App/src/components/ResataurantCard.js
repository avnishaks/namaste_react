import {CDN_URL} from "../utils/constant";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, totalRatingsString,avgRating} =
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
        <h6>{totalRatingsString} stars</h6>
        <br></br>
        <h6>Avg Rating : {avgRating}</h6>
      </div>
    </div>
  );
};

export default RestrauntCard;
