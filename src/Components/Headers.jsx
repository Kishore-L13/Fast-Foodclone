import { Link } from "react-router"
import UseOnlineStatus from "../Utils/useOnlinestatus"
import { useState,useContext } from "react";
import { useSelector } from "react-redux";
import UserContext from "../Utils/UserContext"
const Headers = () =>{
  const [btnNameReact, setBtnNameReact] = useState("Login")
  const onlineStatus = UseOnlineStatus();
  /// Subscribing to the store using a selector hook
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
  return(
      <div className="flex justify-between bg-orange-700 sm:bg-red-600 lg:bg-yellow-200 shadow-lg">
          <div className='logo-container'>
          {/* <img className='w-50 p-4' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_72,h_72/portal/m/logo_192x192.png"/> */}
         <img className="w-[200px] h-[150px] p-4 mix-blend-multiply" src="https://logowik.com/content/uploads/images/free-food-delivery8485.logowik.com.webp"/>
          </div>
          <div className='flex items-center'>
          <nav>
          <ul className="flex p-4 m-4 ">
              <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🛑"}</li>
              <li className="px-4"><Link to="/">Home</Link></li>
              <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
              <li className="px-4"><Link to="/about">About Us</Link></li>
              <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
              <li className="px-4"><Link to="/Cart">Cart-{cartItems.length}</Link></li>
              <li className="px-4"><button 
          className="login bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-4 rounded-lg"
          onClick={() => {
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
          }}
        >{btnNameReact}</button>
        </li>
        <li className="px-4 ">{loggedInUser}</li>
          </ul>
          </nav>
          </div>
      </div>
  )
}
export default Headers