import React, { useContext } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import MainContext from '../../context';
import {Helmet} from 'react-helmet'
import './Add.scss'
const Add = () => {
  const{setData,data,searchItem,search,setSearch,sortData,sortAz, sortzA }=useContext(MainContext)
    const formik = useFormik({
    initialValues: {
      name: '',
      price:'',
      desc:'',
      img:''
    },

  
    onSubmit: values => {
     axios.post('http://localhost:2000/item',values).then(res=>{
      setData([...data, res.data])
     })
     formik.resetForm()
    },
  });

  const deleteHandler=(id)=>{
    axios.delete(`http://localhost:2000/item/${id}`).then(res=>{
      const deleteHandler=data.filter(item=>item._id !==id)
      setData(deleteHandler)
    })
  }
  return (
    <>
    <Helmet>
      <title>Add</title>
    </Helmet>
    <form className='formAdd' onSubmit={formik.handleSubmit}>
       <label htmlFor="name">Name</label> <br />
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       /> <br />
         <label htmlFor="price">Price</label> <br />
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.price}
       /> <br />
         <label htmlFor="img">Image</label> <br />
       <input
         id="img"
         name="img"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.img}
       /> <br />
         <label htmlFor="name">Desc</label> <br />
       <input
         id="desc"
         name="desc"
         type="desc"
         onChange={formik.handleChange}
         value={formik.values.desc}
       /> <br />
 
       <button type="submit">Submit</button>
     </form>
     <input type="text" 
     name="" 
     id=""
     value={search}
     onChange={(e)=>setSearch(e.target.value)}
     />

     <button onClick={()=>sortAz()}>AZ</button>

     <button onClick={()=>sortzA()}>ZA</button>

     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {searchItem.map((item,index)=>(
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price} Azn</td>
            <td><button onClick={()=>{deleteHandler(item._id)}}>Delete</button></td>
          </tr>
        ))}
      </tbody>
     </table>
     </>
  )
}

export default Add