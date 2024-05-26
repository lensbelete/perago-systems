import { Title, Text, Flex, Box } from '@mantine/core'
import Image from 'next/image';
import React from 'react'
import hero from "../../../assets/hero1.jpg"
import { IconHeadphones,  IconMessageDots, IconTrendingUp, IconUsers } from '@tabler/icons-react';

const EservicePage = () => {
  return (
    <div>
        <Title   order={1}
          mb="sm"
          style={{ color: "green" }} className="pt-6 text-center">
            eSERVICES: One-stop Service Delivery Platform</Title>

          <Text className='p-5 text-justify text-lg'> It is a solution framework to apply process management in e-government 
            with the capabilities of two-way interaction between government and citizens.
             PIS eSERVICES is designed based on Service Oriented Architecture for the provision 
             of end-to-end electronic public services. It provides robust and flexible software 
             capabilities to enable organizations to discover, model, execute, rapidly change, 
             govern, and gain end-to-end visibility on their core business processes, 
             rules and events. Currently, sponsored by the Ministry of Communication and 
             Information Technology, this service delivery platform is being used by various 
             organizations to provide electronic services to their customers. There are 32 government 
             organizations (Ministries, Agencies, Authorities, AA City Administration Bureaus, 
             and other public organizations) on the platform to provide over 160 electronic services
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
                <Title order={2} style={{color: "green"}} className='text-center'>Design & Automate</Title>

                    
                        <Text>Design your business workflow to be more effective, 
                            efficient and adaptable Automate your workflow and 
                            service delivery infrastructure
                        </Text>

                </Box>
                <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                <div className='flex justify-center'>
                <IconMessageDots size={56} color='green'/>
                    </div>
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Customer Satisfaction</Title>
                            <Text>Provide multiple channels to customers 
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
                    <IconUsers size={56} color='green'/>
                    </div>
                        
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Improve visibility</Title>
                            <Text>Design your business workflow to be more effective, 
                                efficient and adaptable Automate your workflow and 
                                service delivery infrastructure</Text>
                        
                    </Box>
                    <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                    <div className='flex justify-center'> 
                    <IconTrendingUp size={56} color='green'/> </div>
            
                    
                        <Title order={2} style={{color:"green"}} className='text-center'>Cost Minimization</Title>
                        <Text>Reduce costs and enhance customer satisfaction</Text>

                    </Box>
        


                </Flex>

             
        
    </div>
  )
}

export default EservicePage