import { useParams } from "react-router"
import Shimmer from "./Shimmer"
import UseRestaurantMenu from "../Utils/useRestaurantmenu";
//import RestaurantMenucard from "./Menu/RestaurantMenucard";
//const RestaurantVegCard =  withVegLabel(RestaurantMenucard);
import RestaurantCategory from "./Menu/RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const [showIndex,setShowIndex] = useState(false);
  console.log(resId)
 const resInfo = UseRestaurantMenu(resId)
    if (resInfo===null) return <Shimmer/>
 const{name,cuisines,costForTwoMessage } =
   resInfo?.cards[2]?.card?.card?.info;
  
 const itemCart =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  console.log("item=",itemCart)
 

  const Categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
  filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(Categories)

    return (
      <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
         {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2 className={`text-2xl  ${resInfo?.cards[2]?.card?.card?.info?.avgRating >= 4 ? "text-green-700" : "text-red-500"}`}>
        &#9733;{resInfo?.cards[2]?.card?.card?.info?.avgRating}</h2> 
        <h4 className="font-bold text-xl text-gray-400">Menu</h4>
        {/* <div >
  {itemCart.map(
  (item) => (
    // <RestaurantMenucard key={item?.card?.info?.id} {...item?.card?.info}/>
  
  ) 
  )} 
        </div> */}
        <div>
{/* categories accordions */}
{Categories.map((category,index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems ={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
        </div>
    </div>
    );
  };

export default RestaurantMenu
