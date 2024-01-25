import Add from "../page/Add/Add"
import Basket from "../page/Basket/Basket"
import Detail from "../page/Detail/Detail"
import Home from "../page/Home/Home"
import SiteRoot from "../page/SiteRoot"
import Wishlist from "../page/wishlist/Wishlist"

const Router=[
    {
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },
{
    path:'add',
    element:<Add/>
},
{
    path:":id",
    element:<Detail/>
},
{
    path:"basket",
    element:<Basket/>
},
{
    path:'wishlist',
    element:<Wishlist/>
}
]
}]

export default Router