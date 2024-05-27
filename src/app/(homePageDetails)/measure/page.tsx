import { Title, Text, Flex, Box } from '@mantine/core'
import Image from 'next/image';
import React from 'react'
import hero from "../../../assets/hero5.jpg"
import { IconBook, IconCheck, IconEye, IconHeadphones, IconMessage, IconMessageDots, IconTrendingUp, IconUser, IconUsers } from '@tabler/icons-react';

const Measurepage = () => {
  return (
    <div>
        <Title   order={1}
          mb="sm"
          style={{ color: "green" }} className="pt-6 text-center">
            MEASURE: Strategic planning & Operations System</Title>

          <Text className='p-5 text-justify text-lg'>PIS-Measure is a web-based collaboration 
          and productivity platform to design, plan, execute, measure and manage organizational 
          strategy by linking a vision and mission to strategic priorities, objectives, measures,
           and initiatives. The system is used to monitor and evaluate various projects and activities 
           within organizations. It provides comprehensive capabilities that address the 
           various challenges that are faced in effectively tracking projects and their deliverables.
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
                    <IconEye size={56} color='green'/>
                </div>
                <Title order={2} style={{color: "green"}} className='text-center'>Aligned Vision</Title>

                    
                        <Text className='text-lg'>Align their visions and strategies with KPIs
                        </Text>

                </Box>
                <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                <div className='flex justify-center'>
                <IconUsers size={56} color='green'/>
                    </div>
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Collaboration</Title>
                            <Text className='text-lg'>Collaborate with team members in real-time</Text>

                </Box>
                <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                <div className='flex justify-center'>
                <IconCheck size={56} color='green'/>
                    </div>
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Tracking</Title>
                            <Text className='text-lg'>Track activities, resources and budget</Text>

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
                    <IconCheck size={56} color='green'/>
                    </div>
                        
                    
                            <Title order={2} style={{color:"green"}} className='text-center'>Measurement</Title>
                            <Text className='text-lg'>Measure outputs, outcomes and impacts</Text>
                        
                    </Box>
                    <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                    <div className='flex justify-center'> 
                    <IconCheck size={56} color='green'/> </div>
            
                    
                        <Title order={2} style={{color:"green"}} className='text-center'>Optimize
</Title>
                        <Text className='text-lg'>Optimize decision making and resourcing</Text>

                    </Box>
                    <Box style={{ maxWidth: "100%", width: "100%" }} className='p-6'>
                    <div className='flex justify-center'> 
                    <IconBook size={56} color='green'/> </div>
            
                    
                        <Title order={2} style={{color:"green"}} className='text-center'>Learning
</Title>
                        <Text className='text-lg'>Encourage organizational learning</Text>

                    </Box>
        


                </Flex>

             
        
    </div>
  )
}

export default Measurepage