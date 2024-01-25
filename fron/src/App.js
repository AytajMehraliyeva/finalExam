import { useEffect, useState } from "react";
import MainContext from "./context";
import Router from "./router/Router.jsx";
import toast from 'react-hot-toast'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios'
const router = createBrowserRouter(Router)
function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [basket, setBasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('asc')
const[wishlist,setWishlist]=useState(localStorage.getItem('wishlist')?JSON.parse(localStorage.getItem('wishlist')):[])
  const searchItem = data.filter(item => item.name.toLowerCase().trim().includes(search.toLowerCase().trim()))

  const sortData = (type) => {
    const sortItem = [...data]
    sortItem.sort((a, b) => {
      const priceA = a.price
      const priceB = b.price
      return 'asc' ? priceA - priceB : priceB - priceA
    })
    setData(sortItem)
    setSort(type)
  }

  const sortAz = () => {
    const sortItem = data.sort((a, b) => {
      a.name.localeCompare(b.name)
    })
    // setData(sortItem)
    console.log(sortItem)
  }


  const sortzA = () => {
    const sortItem = data.sort((a, b) => {
      b.name.localeCompare(a.name)
    })
    setData(sortItem)
    console.log(sortItem)
  }


  useEffect(() => {
    axios.get('http://localhost:2000/item').then(res => {
      setData(res.data)
      console.log(res.data)
    }).catch(err => {
      setError(err)
    })
  }, [])


  const addToBasket = (product) => {
    let target = basket.find((baskets) => baskets.product._id === product._id)

    if (target) {
      target.count += 1
      target.totalPrice = parseFloat((target.product.price * target.count).toFixed(2))
      setBasket([...basket])
      localStorage.setItem('basket', JSON.stringify([...basket]))

    } else {
      const baskets = {
        product: product,
        count: 1,
        totalPrice: product.price
      }

      setBasket([...basket, baskets])
      localStorage.setItem('basket', JSON.stringify([...basket, baskets]))
    }
   
  }

const addToWishlist=(product)=>{
  const target=wishlist.find((wishlist)=>wishlist._id===product._id)
  if(target){
   toast.error('Item evvelceden elave olunub')
  }else{
    setWishlist([...wishlist,product])
    localStorage.setItem('wishlist',JSON.stringify([...wishlist,product]))
    toast.success('Item elave olundu')
  }
}


const removeWishlist =(id)=>{
  const deleteWishlist=wishlist.filter((item)=>item._id !== id)
  setWishlist(deleteWishlist)
  localStorage.setItem('wishlist',JSON.stringify(deleteWishlist))
  toast.success('Item deleted')
}

  const basketDelete = (id) => {
    const deletedBasket = basket.find((baskets) => baskets.product._id === id)
    basket.splice(basket.indexOf(deletedBasket), 1)
    setBasket(deletedBasket)
    localStorage.setItem('basket', JSON.stringify(deletedBasket))
  }
  const items = {
    data, setData,
    error, setError,
    basket, setBasket,
    search, setSearch,
    sort, setSort, searchItem, addToBasket, basketDelete,sortData,sortAz, sortzA,
    addToWishlist,removeWishlist,wishlist
  }



  return (
    <MainContext.Provider value={items}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
