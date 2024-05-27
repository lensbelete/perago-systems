import { Carousel } from '@mantine/carousel'
import React from 'react'

import Image from 'next/image';
import heroImage1 from "../assets/hero1.jpg";
import heroImage2 from"../assets/hero2.jpg";
import heroImage3 from"../assets/hero3.jpg";
import heroImage5 from"../assets/hero5.jpg";
import heroImage6 from"../assets/hero6.jpg";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Title, rem } from '@mantine/core';





const CarouselDisplay = () => {

  return (
    <div className='m-0 p-0'>
       <Carousel withIndicators className="w-full" 
       
          nextControlIcon={<IconChevronRight style={{ width: rem(40), height: rem(40), color: 'white'}} />}
          previousControlIcon={<IconChevronLeft style={{ width: rem(40), height: rem(40),color: 'white'}} />}>
      <Carousel.Slide>
        <Image

        className='w-full h-auto m-0 p-0'
        alt='eservice'
        src={heroImage1}
     />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-4 flex-row justify-center items-center right-6 text-white text-lg   w-[40%] pt-[5%]" >
          <Title className='text-center text-lg sm:text-4xl' order={1}>E-Services Platform</Title>
          <p className='hidden sm:block text-2xl pt-4 text-bold'>Provision of online public 
          services to make e-government possible</p>
        

      </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
       className='w-full h-auto'
      alt='E procurement platform'
        src={heroImage2}
        />
        <div className="absolute top-4 flex-row justify-center items-center right-6 text-white text-lg   w-[40%] pt-[5%]" >
          <Title className='text-center text-lg sm:text-4xl' order={1}>E-Procurement Platform</Title>
          <p className='hidden sm:block text-2xl pt-4'>Collaborative platform in conducting key procurement
             activities in acquisition of goods, works, and services 
             with enhanced efficiency in procurement management</p>
        

      </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
       className='w-full h-auto'
      alt='customer engagement service'
        src={heroImage3}
        />
         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-4 flex-row justify-center items-center right-6 text-white text-lg   w-[40%] pt-[5%]" >
          <Title className='text-center text-lg sm:text-4xl' order={1}>Customer Engagement Services</Title>
          <p className='hidden sm:block text-2xl pt-4 text-bold'>A communication platform between 
          customers and a service provider through various electronic channels of correspondence 
          to enhance overall customer experiences and delight.</p>
        

      </div>
      </Carousel.Slide> <Carousel.Slide>
      <Image
       className='w-full h-auto'
      alt='Performance management'
        src={heroImage5}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-4 flex-row justify-center items-center right-6 text-white text-lg   w-[40%] pt-[5%]" >
          <Title className='text-center text-lg sm:text-4xl' order={1}>Performance Management</Title>
          <p className='hidden sm:block text-2xl pt-4 text-bold'>Align your vision and strategy
           with your KPIs, collaborate with team members in real-time, track activities, 
           resources and budget and much more.</p>
        

      </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
       className='w-full h-auto'
      alt='consultancy serivce'
        src={heroImage6}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-4 flex-row justify-center items-center right-6 text-white text-lg   w-[40%] pt-[5%]" >
          <Title className='text-center text-lg sm:text-4xl' order={1}>Consultancy Service</Title>
          <p className='hidden sm:block text-2xl pt-4 text-bold'>Covering wide range of services 
          for both enterprises as well as national governments.</p>
        

      </div>
        
         
      </Carousel.Slide>
      
    
    </Carousel>
    </div>
  )
}

export default CarouselDisplay