import React, { useEffect, useState } from "react";
import { receiveGetContent, receiveProducts } from "../action";
import styled from "styled-components";
import Carousel from "../customer/Components/Carousel/Carousel";
import { API_BASE_URL } from "../config/api";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeCardSlider from "../customer/Components/Home/HomeCardSlider";
import HomeBannerSlider from "../customer/Components/Home/HomeBannerSlider";
import HomeCircleCard from "../customer/Components/Home/HomeCircleCard";
import HomeTimerBanner from "../customer/Components/Home/HomeTimerBanner";
import FindOutBanner from "../customer/Components/Home/FindOutBanner";
import ShopNowBanner from "../customer/Components/Home/ShopNowBanner";
import HomeTodayGrid from "../customer/Components/Home/HomeTodayGrid";
import HealthPicksSlider from "../customer/Components/Home/HealthPickerSlider";
import BeautyDeals from "../customer/Components/Home/BeautyDeals";
import PaymentMethodBanner from "../customer/Components/Home/PaymentMethodBanner";


const Homepage = () => {
  const [banners, setBanners] = useState()

  useEffect(() => {
    const fetchData = async () => {

      const res = await axios.get(`${API_BASE_URL}/content`)
      setBanners(res.data)
    }
    fetchData()
  }, [])

  console.log(banners)



  return (
    <MainContainer>
      
        <div className="firstbanner mt-10" style={{ marginBottom: '30px' }}>
          <HomeCardSlider/>
        </div>
        <div className="firstbanner" style={{ marginBottom: '30px' }}>
       <HomeTimerBanner/>
        </div>
        <div className="firstbanner" style={{ marginBottom: '30px' }}>
          {/* <img src={banners?.[2].url} alt="" /> */}
          <HomeBannerSlider/>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
          {/* <img src={banners?.[2].url} alt="" /> */}
          {/* <HomeCircleCard/> */}
          <HomeTodayGrid/>
          <ShopNowBanner/>
        </div>
      <div>
        <Carousel text={'New Arrivals'} />
      </div>
      <div style={{ margin: '30px 0', textAlign: 'center', fontSize: '23px', fontWeight: '800' }}>
      <BeautyDeals/>
      </div>
      <div style={{ margin: '30px 0', textAlign: 'center', fontSize: '23px', fontWeight: '800' }}>
      <FindOutBanner/>
      </div>
     
      <div style={{ margin: '30px 0', textAlign: 'center', fontSize: '23px', fontWeight: '800' }}>
      <HealthPicksSlider/>
      </div>
      <div style={{ margin: '30px 0', textAlign: 'center', fontSize: '23px', fontWeight: '800' }}>
      <PaymentMethodBanner/>
      </div>
    </MainContainer>
  );
};

export default Homepage;

const MainContainer = styled.div`
  width:100%;
.firstbanner{
  width:100%;
  img{
    height: 100%;
    width:100%
  }
  
}


`
const FlexDiv = styled.div`
 display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  @media(max-width: 480px){
    flex-direction: column;
    margin-bottom: 10px;
  }
  .hover{
    transition: filter 0.3s ease;
  }

  .hover:hover {
    filter: brightness(0.8); /* Adjust the brightness to make the image slightly darker */
  }
`


