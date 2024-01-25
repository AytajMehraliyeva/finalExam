import React, { useContext } from 'react'
import MainContext from '../../context'
import './Home.scss'
import Slider from "react-slick";
import Card from '../../component/Card'
import { Helmet } from 'react-helmet';

const Home = () => {
  const{data,addToBasket}=useContext(MainContext)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
      slidesToScroll: 1}
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className='sectionOne'>
      <img src="https://preview.colorlib.com/theme/eatwell/images/bg_3.jpg" alt="" />
      <div className='text'>
<h3>Welcome To EatWell</h3>
<p>Come and eat well with our delicious & healthy foods.</p>
<button>Show more</button></div>
    </div>
    <div>
     <div className='sectionSecond'>
      <div className='sectionSecondCard'>
      <div className='welcome'>
        <h2>Welcome</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. <br />
A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
      <button>Read More</button>
      </div>
      <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
      </div>
     </div>
   
    </div> 
   <div className='crud'>
    <div className='cards' id='cards'>
      {data.map((item,index)=>{
        return(
          <Card item={item} index={index}/>
        )
      })}
    </div>
   </div>

   <div className='eats'>
    <h2>Our Offer This Summer</h2>
    <div className='cards'>
      <div className='card1'>
      <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" alt="" />
      <p className='price'>39.50</p>
      <span>Beef Ribs</span>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, fugit? Cumque magni voluptate tempora exercitationem voluptatem recusandae ipsum libero repellendus.</p>
    </div>
    <div className='card1'>
      <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" alt="" />
      <p className='price'>39.50</p>
      <span>Beef Ribs</span>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, fugit? Cumque magni voluptate tempora exercitationem voluptatem recusandae ipsum libero repellendus.</p>
    </div>
    <div className='card1'>
      <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg" alt="" />
      <p className='price'>39.50</p>
      <span>Beef Ribs</span>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, fugit? Cumque magni voluptate tempora exercitationem voluptatem recusandae ipsum libero repellendus.</p>
    </div>
    </div>
   </div>
    
    </>
  )
}

export default Home