"use client"
import { AppShell, NavLink, Flex } from '@mantine/core';
import Image from 'next/image';
import { IconGauge, IconHome, IconSettings, IconCalendar,IconMail} from '@tabler/icons-react';
import peragoImage from "../assets/perago2.png"


const Shell = ({children}) => {
 
  return (
    <>
    <AppShell
      header={{ height: 63 }}
      footer={{ height: 201.2}}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>

        <div className='flex w-screen'>
          <div className='ml-10 mt-4 mr-10'>
          <Image
          width="120"
          height={31}

            alt='something'
            src={peragoImage}/>

          </div>
         
          <Flex direction="row"   gap="lg">
          <NavLink
            href="/"
            label="Home"
            leftSection={<IconHome size="1rem" stroke={1.5} />} 
            color='gray'
          />
          <NavLink
            href="/about"
            label="About Us"
            leftSection={<IconGauge size="1rem" stroke={1.5} />}
            color='gray'
          />
          <NavLink
            href="#required-for-focus"
            label="Services"
            color='gray'
            leftSection={<IconSettings size="1rem" stroke={1.5} />}
           />
          <NavLink
            href="#required-for-focus"
            label="Contact Us"
            color='gray'
            leftSection={<IconCalendar  size="1rem"  />}
              
          />
          <NavLink
            href="#required-for-focus"
            label="Request Demo"
            leftSection={<IconMail color='gray' size="1rem" stroke={1.5} />}
            />

          </Flex>
            
          
  
      </div>
    </AppShell.Header>
    <AppShell.Main className='pl-0 pr-0 pt-16'>
      {children}
    </AppShell.Main>
    <AppShell.Footer className='relative'>
      <div>
        <h1>Perago</h1>
        <div>
          <p>Email: info@peragoSystems.com</p>
          <p>Tel: +251 114 701 998 | +251 911 231 622</p>
          <p>
          Po.Box: 139 Addis Ababa, Ethiopia
          </p>
        </div>

      </div>
      <div>

      </div>
    </AppShell.Footer>
   
    </AppShell>
    </>
  );
};

export default Shell;