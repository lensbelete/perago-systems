import { Title, Text, Flex, Box } from '@mantine/core'
import Image from 'next/image';
import React from 'react'
import hero from "../../../assets/hero3.jpg"
import { IconHeadphones, IconMessage, IconMessageDots, IconTrendingUp, IconUsers } from '@tabler/icons-react';
const Engagepage = () => {
  return (
    <div>
        <Title   order={1}
          mb="sm"
          style={{ color: "green" }} className="pt-6 text-center">
            ENGAGE: Customer Engagement Solution</Title>

          <Text className='p-5 text-justify text-lg'> It is a communication platform between customers and a 
          service provider through various electronic channels of correspondence to enhance overall customer 
          experiences and delight. The system encourages customers&apos; engagement in controlling the quality 
          of services and instills accountability in the workplace. Currently, sponsored by the Ministry 
          of Communication and Information Technology, this customer service platform is being used by
           various organizations for online customer compliant and suggestion management. 
           There are 5 government organizations on the platform.
             </Text>

             <Image
             alt="eservice logo"
             src={hero}
             className='w-screen'
             />
             
            <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
                className="p-5"
            >

                <Box style={{ maxWidth: "100%", width: "100%"}} className='p-6'> 
                <div className='flex justify-center'>
                    <IconHeadphones size={56} color='green'/>
                </div>
                <Title order={2} style={{color: "green"}} className='text-center'>Understand your customer</Title>

                    
                        <Text className='text-lg'>Let customers speak about their dissatisfactions
                             and let them know their feedbacks are valued
                        </Text>

                </Box>
                <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                <div className='flex justify-center'>
                <IconMessageDots size={56} color='green'/>
                    </div>
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Streamline conversation</Title>
                            <Text className='text-lg'>Stay on top of all customer requests coming in from different support channels</Text>

                </Box>
                    
                    


                </Flex>
                <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
                className="p-5"
            >
                    <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                    <div className='flex justify-center'> 
                    <IconUsers size={56} color='green'/>
                    </div>
                        
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Collaborate Better</Title>
                            <Text className='text-lg'>Get help from the right people across internal teams by looping them into filed cases</Text>
                        
                    </Box>
                    <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                    <div className='flex justify-center'> 
                    <IconTrendingUp size={56} color='green'/> </div>
            
                    
                        <Title order={2} style={{color:"green"}} className='text-center'>Stay productive
</Title>
                        <Text className='text-lg'>Make use smart automations to get things done faster and better</Text>

                    </Box>
        


                </Flex>

             
        
    </div>
  )
}

export default Engagepage