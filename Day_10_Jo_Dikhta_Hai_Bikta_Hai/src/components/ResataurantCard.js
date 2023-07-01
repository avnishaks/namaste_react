import { CDN_URL } from "../utils/constant";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, totalRatingsString, avgRating } =
    resData.data.data;
  return (
    <div className="m-4 p-4 w-[250px] bg-cyan-400 rounded-lg hover:bg-gray-400">
      <img className="rounded-lg"
        src={
          CDN_URL + cloudinaryImageId
        }
      />
      <h5 className="font-bold mt-2">{name}</h5>
      <h6 className="break-words">{cuisines.join(",")}</h6>
      <h6 className="font-bold font-serif mt-2">{totalRatingsString} stars</h6>
      <br></br>
      <h6 className="font-bold text-red-500">Avg Rating : {avgRating}</h6>
    </div>
  );
};

export default RestrauntCard;
