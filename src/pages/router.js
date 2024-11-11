import { createBrowserRouter } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Layout from "./Layout/Layout";
import Profile from "./page/profile";
import CreateAccount from "./page/createAccount";
import Protect from "../Auth/protect";
import ForgetAccount from "./page/forget-account/forget-account";
import Message from "./page/massage";
import HomeLoadingComponent from "../components/loadingComponent/homeLoadingComponent";
import { fetchProfileInf } from "../utills/getProfileInf";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Protect><Layout/></Protect>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/profile",
                element:<Profile/>,
                loader : fetchProfileInf
            },
            {
                path:"/profile/:username",
                element:<Profile/>,
                loader : fetchProfileInf
            },
            {
                path:"/chat",
                element:<HomeLoadingComponent/>
            }
        ]
    },
    {
        path:"/login",
        element:<Login/>,
    },
    {
        path:"/create-account",
        element:<CreateAccount/>,
    },
    {
        path:"forget-account",
        element:<ForgetAccount/>
    }
])