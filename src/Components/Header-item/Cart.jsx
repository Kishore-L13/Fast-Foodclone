import { useDispatch, useSelector } from "react-redux"
import ItemList from "../Menu/ItemList";
import { clearcart } from "../../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    const dispatch = useDispatch();
    const handleClearcart = () => {
        dispatch(clearcart())
    }
return(
    <div className="text-center m-4 p-4">
    <h1 className="font-bold text-2xl"> Cart</h1>
    <div className="w-6/12 m-auto">
        <button  className="bg-slate-950
         text-white text-m  font-medium py-2 px-4 rounded-lg"
        onClick={(handleClearcart)}>Clearcart
        </button>
        {cartItems.length === 0 && (<h1>
            Cart is empty . Add items
        </h1>)}
         <ItemList items={cartItems}/> 
       
    </div>
    </div>
)
}
export default Cart