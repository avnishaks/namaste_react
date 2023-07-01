import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} =useParams();
    const resInfo=useRestaurantMenu(resId);

    // const [resInfo, setresInfo] = useState(null);

    // const {resId} =useParams();


    // console.log(resId)

    // useEffect(() => {
    //     fetchMenu()
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     setresInfo(json.data)
    // }

    if (resInfo === null) {
        return <Shimmer />
    }


    /*
      const [name,areaName,areaPostalCode] = resInfo?.cards[0]?.card?.card?.info;
       <h1>{name}</h1>
            <h3>{areaName}</h3>
            <h3>{areaPostalCode}</h3>
    
    */

    const { name, areaName, areaPostalCode, cuisines } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{areaName}</h3>
            <h3>{areaPostalCode}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h2> Menu Items </h2>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - {" Rs : "} {item.card.info.price /100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
