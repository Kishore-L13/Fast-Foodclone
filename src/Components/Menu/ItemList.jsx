import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/Constant"

const ItemList =({items})=>{
console.log("Itemlist",items)
const dispatch = useDispatch()
    const handleaddcart = (items) => {
        dispatch(addItem(items))
    }
return(
    <div>
        {items.map((items)=>(
            <div key={items.card.info.id}
            className="p-2 m-2 broder-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div>
                    <span>{items.card.info.name}</span>
                    <span className="p-2">- Rs.{items.card.info.price ? items.card.info.price/100 :
                        items.card.info.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{items.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div>
                    <button className="p-2 bg-white shadow-lg absolute m-auto"
                    //gives output with data 
                     onClick={()=>handleaddcart(items)}>
                    {/* //it takes whole class data wrong method upto infinity
                        //  onClick={handleaddcart(items)} */}
                        Add+
                    </button>
                </div>
                <img src={CDN_URL + items.card.info.imageId}
                className="w-full"/>
                </div>
            </div>
        ))}
            </div>
)
}
export default ItemList