import { Title, Text, Flex, Box } from '@mantine/core'
import Image from 'next/image';
import React from 'react'
import hero from "../../../assets/hero2.jpg"
import { IconClockHour5, IconFile, IconHeadphones, IconListNumbers, IconMessage, IconMessageDots, IconPremiumRights, IconTrendingUp, IconUsers } from '@tabler/icons-react';
const page = () => {
  return (
    <div>
        <Title   order={1}
          mb="sm"
          style={{ color: "green" }} className="pt-6 text-center">
           ePROCURE: From chaos to order</Title>

          <Text className='p-5 text-justify text-lg'> The system serves as a collaborative 
          platform through the use of Information and Communication Technology in conducting 
          key procurement activities in acquisition of goods, works, and services with enhanced
           efficiency in procurement management. The PIS ePROCURE value chain consists of indent 
           management, purchase requisition, e-Tendering, e-Auctioning, vendor management,
            catalogue management, Order & Ship Notices, and contract management.
             </Text>

             <Image
             alt="eprocure logo"
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
                    <IconListNumbers size={56} color='green'/>
                </div>
                <Title order={2} style={{color: "green"}} className='text-center'>Ensure better planning</Title>

                    
                        <Text className='text-lg'>All starts with need recognition 
                            followed up with formal planning process that determines what to buy, when and from what source.
                        </Text>

                </Box>
                <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                <div className='flex justify-center'>
                <IconPremiumRights size={56} color='green'/>
                    </div>
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Competitive Bidding</Title>
                            <Text className='text-lg'>Provide multiple channels to customers 
                                Collaborate towards one stop customer 
                                service request fulfillment</Text>

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
                    <IconClockHour5 size={56} color='green'/>
                    </div>
                        
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Just-In-Time Requisition</Title>
                            <Text className='text-lg'>Employ just-in-time requisition to increase efficiency
                                 and decrease waste by receiving goods, services and works 
                                 only as they are needed</Text>
                        
                    </Box>
                    <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                    <div className='flex justify-center'> 
                    <IconFile size={56} color='green'/> </div>
            
                    
                        <Title order={2} style={{color:"green"}} className='text-center'>Streamline contract management</Title>
                        <Text className='text-lg'>Streamline contract management</Text>

                    </Box>
        


                </Flex>

             
        
    </div>
  )
}

export default page