"use client"
import { AppShell, NavLink, Flex, Burger, Drawer, Box, Text } from '@mantine/core';
import Image from 'next/image';
import { IconGauge, IconHome, IconSettings, IconCalendar, IconMail } from '@tabler/icons-react';
import peragoImage from "../assets/perago2.png"
import peragoImage2 from "../assets/perago-white.png"
import { useDisclosure } from '@mantine/hooks';

const Shell = ({ children }) => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <>
      <AppShell
        header={{ height: 80 }}

        padding="md"
        withBorder={false}
      >
        <AppShell.Header className='p-3 mb-10'>
          <div className='flex w-screen items-center'>
            <div className='ml-10 mr-10'>
              <a href='/'>
                <Image
                  width="150"
                  height={40}
                  alt='Perago logo'
                  src={peragoImage}
                />
              </a>
            </div>
            <Flex
              direction="row"
              justify="space-between"
              align="center"
              gap="lg"
              className="hidden md:flex"
            >
              <NavLink
                href="/"
                label="Home"
                style={{ width: '200px' }}
                leftSection={<IconHome size="1.5rem" stroke={1.5} color='#55ba4a'/>}
                color='#55ba4a'
                styles={{
                  label: {
                    fontSize: '1.1rem', 
                    width: "3%",
                  }
                }}
              />
              <NavLink
                href="/about"
                label="About Us"
                leftSection={<IconGauge size="1.5rem" stroke={1.5} color='#55ba4a'/>}
                color='#55ba4a'
                styles={{
                  label: {
                    fontSize: '1.1rem', width: "3%",
                  }
                }}
              />
              <NavLink
                href="/servicePages"
                label="Services"
                color='#55ba4a'
                leftSection={<IconSettings size="1.5rem" stroke={1.5} color='#55ba4a' />}
                styles={{
                  label: {
                    fontSize: '1.1rem',
                    width: "3%",
                  }
                }}
              />
              <NavLink
                href="/contactUs"
                label="Contact Us"
                color='#55ba4a'
                leftSection={<IconCalendar size="1.5rem" color='#55ba4a' />}
                styles={{
                  label: {
                    fontSize: '1.1rem',
                    width: "3%", 
                  }
                }}
              />
              <NavLink
                href="/requestDemo"
                label="Request Demo"
                leftSection={<IconMail color='#55ba4a' size="1.5rem" stroke={1.5} />}
                styles={{
                  label: {
                    fontSize: '1.1rem',
                    width: "25%", 
                  }
                }}
              />
            </Flex>
            <Burger
              opened={opened}
              onClick={toggle}
              className="md:hidden ml-auto mr-7"
              size="sm"
              left={0}
              color="#55ba4a"
            />
          </div>
        </AppShell.Header>

        <AppShell.Main className='pl-0 pr-0 pt-20'>
        
            {children}
  
        </AppShell.Main>
        
        <AppShell.Footer className='relative bg-green-600 h-[30%] shadow-md' style={{ backgroundColor: '#55ba4a', color: 'white' }}>
          <div className='flex-row justify-center pb-5 font-bold'>
            <div className='justify-center flex w-[100%] sm:w-[100%]'>
              <Image
                alt='perago logo'
                src={peragoImage2}
                className='h-[20%] w-[20%] p-5'
              />
            </div>
            <div className='py-3'>
            <Text className='text-center'>Perago Information Systems</Text>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <Box className="flex w-full md:w-1/3 justify-center">
              <Text>Email: <a href="mailto:email@example.com">Info@peragosystems.com</a></Text>
              </Box>
              <Box className="w-full flex md:w-1/3 justify-center">
                <div>

                  <Text>
                  <a href="tel:+251-911-231622">+251-911-231622</a>  <a href="tel:+251(114)701998">+251(114)701998</a> </Text>
                </div>
              </Box>
              <Box className="flex justify-center w-full md:w-1/3">
                <Text>Po.Box: 139 Addis Ababa, Ethiopia</Text>
              </Box>
            </div>
          </div>
        </AppShell.Footer>
      </AppShell>
      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        size="sm"
        position="top"
      >
        <NavLink
          href="/"
          label="Home"
          leftSection={<IconHome size="1rem" stroke={1.5} color="#55ba4a" />}
          color='#55ba4a'
          onClick={close}
        />
        <NavLink
          href="/about"
          label="About Us"
          leftSection={<IconGauge size="1rem" stroke={1.5} color="#55ba4a" />}
          color='#55ba4a'
          onClick={close}
        />
        <NavLink
          href="/service"
          label="Services"
          color='#55ba4a'
          leftSection={<IconSettings size="1rem" stroke={1.5} color="#55ba4a" />}
          onClick={close}
        />
        <NavLink
          href="/contactUs"
          label="Contact Us"
          color='#55ba4a'
          leftSection={<IconCalendar size="1rem" color="#55ba4a" />}
          onClick={close}
        />
        <NavLink
          href="/requestDemo"
          label="Request Demo"
          leftSection={<IconMail color='#55ba4a' size="1rem" stroke={1.5} />}
          onClick={close}
        />
      </Drawer>
    </>
  );
};

export default Shell;