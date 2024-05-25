"use client";
import { AppShell, NavLink, Flex } from "@mantine/core";
import Image from "next/image";
import {
  IconGauge,
  IconHome,
  IconSettings,
  IconCalendar,
  IconMail,
} from "@tabler/icons-react";
import peragoImage from "../assets/perago2.png";
import peragoImage2 from "../assets/perago-white.png";

const Shell = ({ children }) => {
  return (
    <>
      <AppShell
        header={{ height: 63 }}
        footer={{ height: 201.2 }}
        padding="md"
        withBorder={false}
      >
        <AppShell.Header>
          <div className="flex w-screen">
            <div className="ml-10 mt-4 mr-10">
              <a href="/">
                <Image
                  width="120"
                  height={31}
                  alt="Perago logo"
                  src={peragoImage}
                />
              </a>
            </div>

            <Flex direction="row" gap="lg">
              <NavLink
                href="/"
                label="Home"
                leftSection={<IconHome size="1rem" stroke={1.5} />}
                color="gray"
              />
              <NavLink
                href="/about"
                label="About Us"
                leftSection={<IconGauge size="1rem" stroke={1.5} />}
                color="gray"
              />
              <NavLink
                href="#required-for-focus"
                label="Services"
                color="gray"
                leftSection={<IconSettings size="1rem" stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Contact Us"
                color="gray"
                leftSection={<IconCalendar size="1rem" />}
              />
              <NavLink
                href="#required-for-focus"
                label="Request Demo"
                leftSection={<IconMail color="gray" size="1rem" stroke={1.5} />}
              />
            </Flex>
          </div>
        </AppShell.Header>
        <AppShell.Main className="pl-0 pr-0 pt-16">{children}</AppShell.Main>
        <AppShell.Footer
          className="relative bg-green-600 h-[25%] "
          style={{ backgroundColor: "#55ba4a", color: "white" }}
        >
          <div className="flex-row justify-center pb-5 bold">
            <div className="flex justify-center">
              <Image
                alt="perago logo"
                src={peragoImage2}
                className="h-[20%] w-[20%] p-5"
              />
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center">
              <div className="flex w-full md:w-1/3 justify-center">
                <p>Email: info@peragoSystems.com</p>
              </div>
              <div className="w-full flex md:w-1/3 justify-center">
                <div>
                  <p className="text-center">Perago Information Systems</p>
                  <p>Tel: +251 114 701 998 | +251 911 231 622</p>
                </div>
              </div>
              <div className="flex justify-center w-full md:w-1/3">
                <p>Po.Box: 139 Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
          <div></div>
        </AppShell.Footer>
      </AppShell>
    </>
  );
};

export default Shell;
