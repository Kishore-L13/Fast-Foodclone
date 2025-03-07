import { CDN_URL } from "../Utils/Constant"
export const RestaurantCard = ({
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    slaString,
    areaName
  }) => {
    return(
        
        <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-200 hover:bg-blue-400 shadow-lg">
        <img className='rounded-lg ' alt='res-log' 
        src={CDN_URL+ cloudinaryImageId}
        />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5 className={`text-2xl  ${avgRating >= 4 ? "text-green-700" : "text-red-500"}`}>
  &#9733;<b className="text-black">{avgRating}</b>
</h5>
            <h6>{costForTwo}</h6> 
           <p>  {areaName}</p>
         </div>
    )
}
export const withPromotedLabel = (RestaurantCard) => {
    return(props)=>{
      return(
        <div>
          <label className="absolute bg-black text-white">Open</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }
export default RestaurantCard