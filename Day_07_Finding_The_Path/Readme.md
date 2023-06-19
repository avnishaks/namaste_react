# In this section we are going to cover the concept of the React Hooks


# General Overview of the UI Design of App 

{

    Header :- 
        - Logo ( Tittle )
        - Nav Items ( Right Side )
        - Cart

    Body :- 
        - Search Bar
        - Resturant List
            - Resturant Card
                - Image
                - Name
                - Rating
                - Cusines
    
    Footer :- 
        - link
        - copyright
}

# Finding the Path 

1. About React Routing 
2. About React Hooks

=> useEffect(()=>{
    console.log("CallBack of useEffect")
  },[])

If the useEffect is has an empty dependency array , then it render only once.


=> useEffect(()=>{
    console.log("CallBack of useEffect")
  },[btnReact])

If we add any dependency , to array it will be called at every actions performed on the dependency added.

useState is called inside the Function Component , not oustide the function component , 
try to call all the useState at the start of the Functions Component.


# React Routing

There are two type of Routing in Web Apps.

1. Client Side Routing [ If no network calls is involve in rendering the page ]
2. Server Side Routing [ Network calls is involve in rendering the page ]


npm i react-router-dom ( package name )

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

using the createBrowserRouter we can intialise the path of the different routing and 
using RouterProvider we can render whole router at once.

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>
  },
  {
    path:"/about",
    element:<About/>,
    errorElement: <Error/>
  },
  {
    path:"/contact",
    element:<Contact/>,
    errorElement: <Error/>
  }
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRoute} />);


# useRouteError from react-route-dom

Using useRouteError we can able to trace more informtion about the the Error Releated Stuff.


# Children Routing 

Fix the Header and Footer and change the body based on the Routing

<Outlet/> => is used in parent route elements to render their child route elements.



const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> :- > here outlet is used as parent route element 
      <Footer />
    </>
  );
};

const appRoute=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    // Child Element for the Parent Route "/" is created for every possible component for 
    // render path
    children:[
      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      },
      {
        path:"/about",
        element:<About/>,
        errorElement: <Error/>
      },
      {
        path:"/contact",
        element:<Contact/>,
        errorElement: <Error/>
      }
    ],
    errorElement: <Error/>
  }
  
]);


# Linking the Route to the Header Componet for Home , About , Contact Pages

Note :- Don't use the anchor tag here , as it on rendering to page it refresh the whole page
Header and Footer Sections along with Body sections , so avoid using it.

Insted of Anchor Tag we use Link from the react-route-dom module

import { Link } from "react-router-dom"; [ named import ]

syntax of Link :- 

<li> <Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>



# TODO : DYNAMIC ROUTING { develop the different routing options for all the resturant pages }

import { useParams } from "react-router-dom";

 const {resId} =useParams();
    console.log(resId)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setresInfo(json.data)
    }

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

