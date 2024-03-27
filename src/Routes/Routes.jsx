import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import CommingSoon from "../CommingSoon/CommingSoon";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/comingsoon',
        element: <CommingSoon></CommingSoon>
    }
])

export default Routes;