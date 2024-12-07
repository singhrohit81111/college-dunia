import { createBrowserRouter } from "react-router-dom";
import  Home  from "@pages/Home";
import { HOME } from "@config/pathNames";



{/*V6 routing*/}
export const routes=createBrowserRouter([
    {
        path:HOME,
        element:<Home/>,
        errorElement:""
    }
])