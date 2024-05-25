import { Carousel } from '@mantine/carousel'
import React from 'react'

import Image from 'next/image';
import heroImage1 from "../assets/hero1.jpg";
import heroImage2 from"../assets/hero2.jpg";
import heroImage3 from"../assets/hero3.jpg";
import heroImage5 from"../assets/hero5.jpg";
import heroImage6 from"../assets/hero6.jpg";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { rem } from '@mantine/core';





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
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
       className='w-full h-auto'
      alt='E procurement platform'
        src={heroImage2}
        />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
       className='w-full h-auto'
      alt='customer engagement service'
        src={heroImage3}
        />
      </Carousel.Slide> <Carousel.Slide>
      <Image
       className='w-full h-auto'
      alt='Performance management'
        src={heroImage5}
        />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
       className='w-full h-auto'
      alt='consultancy serivce'
        src={heroImage6}
        />
      </Carousel.Slide>
    
    </Carousel>
    </div>
  )
}

export default CarouselDisplay