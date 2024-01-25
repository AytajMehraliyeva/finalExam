import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'
import './detail.scss'

const Detail = () => {
  const[item,setItem]=useState({})
  const {id}=useParams()

  useEffect(()=>{
    axios.get(`http://localhost:2000/item/${id}`).then(res=>{
      setItem(res.data)
    })
  },[id])
  return (
    <>
    <Helmet>
      <title>Detail</title>
    </Helmet>
    <div className='detail'>
      <div className='detailCard'>
        <p>{item.name}</p>
      <p>{item.desc}</p></div>
    </div></>
  )
}

export default Detail