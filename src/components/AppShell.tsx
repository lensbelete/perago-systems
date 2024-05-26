"use client"
import { AppShell, NavLink, Flex, Burger, Drawer } from '@mantine/core';
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
        header={{ height: 63 }}
        footer={{ height: 201.2 }}
        padding="md"
        withBorder={false}
      >
        <AppShell.Header>
          <div className='flex w-screen mt-2'>
            <div className='ml-10 mt-4 mr-10'>
              <a href='/'>
                <Image
                  width="120"
                  height={31}
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
                href="/servicePages"
                label="Services"
                color='gray'
                leftSection={<IconSettings size="1rem" stroke={1.5} />}
              />
              <NavLink
                href="/contactUs"
                label="Contact Us"
                color='gray'
                leftSection={<IconCalendar size="1rem" />}
              />
              <NavLink
                href="/requestDemo"
                label="Request Demo"
                leftSection={<IconMail color='gray' size="1rem" stroke={1.5} />}
              />
            </Flex>
            <Burger
              opened={opened}
              onClick={toggle}
              className="md:hidden float-end"
              size="sm"
              left={0}
            />
          </div>
        </AppShell.Header>
        <AppShell.Main className='pl-0 pr-0 pt-16'>
          {children}
        </AppShell.Main>
        <AppShell.Footer className='relative bg-green-600 h-[25%] ' style={{ backgroundColor: '#55ba4a', color: 'white' }}>
          <div className='flex-row justify-center pb-5 bold'>
            <div className='flex justify-center'>
              <Image
                alt='perago logo'
                src={peragoImage2}
                className='h-[20%] w-[20%] p-5'
              />
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center">
              <div className="flex w-full md:w-1/3 justify-center">
                <p>Email: info@peragoSystems.com</p>
              </div>
              <div className="w-full flex md:w-1/3 justify-center">
                <div>
                  <p className='text-center'>Perago Information Systems</p>
                  <p>Tel: +251 114 701 998 | +251 911 231 622</p>
                </div>
              </div>
              <div className="flex justify-center w-full md:w-1/3">
                <p>Po.Box: 139 Addis Ababa, Ethiopia</p>
              </div>
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
          leftSection={<IconHome size="1rem" stroke={1.5} />}
          color='gray'
          onClick={close}
        />
        <NavLink
          href="/about"
          label="About Us"
          leftSection={<IconGauge size="1rem" stroke={1.5} />}
          color='gray'
          onClick={close}
        />
        <NavLink
          href="/service"
          label="Services"
          color='gray'
          leftSection={<IconSettings size="1rem" stroke={1.5} />}
          onClick={close}
        />
        <NavLink
          href="/contactUs"
          label="Contact Us"
          color='gray'
          leftSection={<IconCalendar size="1rem" />}
          onClick={close}
        />
        <NavLink
          href="/requestDemo"
          label="Request Demo"
          leftSection={<IconMail color='gray' size="1rem" stroke={1.5} />}
          onClick={close}
        />
      </Drawer>
    </>
  );
};

export default Shell;