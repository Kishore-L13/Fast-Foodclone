import { useEffect, useState,useContext } from "react"
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import UseOnlinestatus from "../Utils/useOnlinestatus";
import UserContext from "../Utils/UserContext" 
import useDebounce from "../Utils/useDebounce";


// function filterData (searchText,listofRestaurant){
//     const filterData = listofRestaurant.filter(
//         (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
//         return filterData;
//     }
const Body = () => {
    const [listofRestaurant,setListofRestaurant] = useState([])
    const [searchText,setSearchText] = useState("")
    const [filterRestaurant,setFilterRestaurant] = useState([])
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const { loggedInUser, setUserName } = useContext(UserContext);
    
    const debouncedSearch = useDebounce(searchText,500)  
    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData = async ()=> {
    try {    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
         console.log(json)
         const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
         setListofRestaurant(restaurants)
         setFilterRestaurant(restaurants)
    }catch(err){
        console.err("Error")
    }
}
// ✅ Debounced Search Handling
useEffect(() => {
    if (!debouncedSearch.trim()) {
      setFilterRestaurant(listofRestaurant);
      return;
    }

    const filteredData = listofRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(debouncedSearch.toLowerCase())
   
    );
    console.log(debouncedSearch)///u cn check debounced 
    
    setFilterRestaurant(filteredData);
  }, [debouncedSearch, listofRestaurant]);
   // ✅ Handle Online Status
 const Onlinestatus = UseOnlinestatus();
 if (Onlinestatus === false){
    return(<h1>
        Your away for a while 
    </h1>)
 }
    return(listofRestaurant.length===0)?(
    <Shimmer/>):
    (
        <div>
            <div className='body '>
                <div className='flex'>
                <div className="m-2 p-2 ">
                    <input type="text" 
                   className="border border-gray-300 rounded px-4 py-2 
    text-gray-700
   placeholder-gray-400 
    hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                 placeholder="Search"    
                 value={searchText} 
    onChange = {(e) => {setSearchText (e.target.value)}}/></div>
                  <div className="m-2 p-2">
                    <button className=" bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-4 rounded-lg"
                  onClick={()=>{ 
                    const filterData = listofRestaurant.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                          setFilterRestaurant (filterData)
                        } 
                }
        >Search</button>  
        </div>
        {/* ✅ Clear Button */}
        <div className="m-2 p-2">
            <button
              className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-4 rounded-lg"
              onClick={() => setSearchText("")}
            >
              Clear
            </button>
          </div>
            {/* ✅ Filter Top Rated Restaurants */}
        <div className="m-2 p-2">
                    <button 
                    className=" bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-4 rounded-lg"
                     onClick={()=>{
                        const filter = listofRestaurant.filter(
                (res)  => {
                        return res.info.avgRating > 4.5 ;
                    })
                    console.log(filter)
                    setFilterRestaurant(filter)
                    }}
                    >TopRated Restaurant</button>
                    </div>
                    <div>
                 {/* ✅ User Context Input */}
                    <label>UserName:</label>
                      <input type="text" value ={loggedInUser} 
                      className="border border-gray-300 rounded p-2 m-4
                      text-gray-700
                     placeholder-gray-400"
                     placeholder="Username"
                      onChange={(e)=>setUserName(e.target.value)}/>
                    </div>
                    </div>
            {/* ✅ Restaurant List */}
                <div className='flex flex-wrap justify-center shadow-lg '>
                 {filterRestaurant.map((restaurant) =>                 
                (<Link to={`/restaurants/${restaurant?.info?.id}` }>
            { restaurant?.info?.isOpen? 
            (<RestaurantCardPromoted key={restaurant?.info?.id} {...restaurant?.info}/>) :
               ( <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />)
            }</Link>
 ))}
     </div>
    </div>
     </div>
    )

}
export default Body