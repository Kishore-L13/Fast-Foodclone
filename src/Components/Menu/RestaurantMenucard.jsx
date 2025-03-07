import { CDN_URL } from "../../utils/Constant"
export const RestaurantMenucard = ({
    imageId,
    name,
    defaultPrice,
    price,
    description,
    category,
  
  }) => {
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-slate-200 hover:bg-blue-400 shadow-lg ">
            <h3 className="font-bold py-2 text-lg flex">{name} <p> 
                <img className='rounded-lg ' alt='res-log' 
        src={CDN_URL+ imageId} /></p></h3>
        <p className="mt-4 text-sm leading-6 col-start-1 
        sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1
         dark:text-slate-400">{description}</p>
           
            <h5>{category}</h5> 
           <p> Rs.{defaultPrice/100 || price/100}</p>
         </div>
    )
}


export default RestaurantMenucard