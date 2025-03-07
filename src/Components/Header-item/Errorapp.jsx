import { useRouteError } from "react-router"

const Errorapp = () => {
    const err = useRouteError()
    console.log(err)
    return(
        <div>
            <h1>OOPS Something error!!!</h1>
            <h2>{err.status} Error Message:{err.statusText}</h2>
        </div>
    )
}
export default Errorapp