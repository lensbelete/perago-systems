"use client";
import React from "react";
import { Tabs, Title } from "@mantine/core";

import Services from "../service/page";
import EprocureContent from "../(homePageDetails)/eProcure/page";
import EservicePage from "../(homePageDetails)/eservice/page";
import Engagepage from "../(homePageDetails)/engage/page";
import Measurepage from "../(homePageDetails)/measure/page";

const Servicespage = () => {
  const content = {
    service: <Services />,
    eprocure: <EprocureContent />,
    eservice: <EservicePage/>,
    engage: <Engagepage/>,
    measure: <Measurepage/>

  };

  return (
    <div className="mb-12">
        
        <Tabs color="green" defaultValue="service">
            <div className="px-10 mx-10">
            <Tabs.List 
            style={{gap: "3%"}}>
                <Tabs.Tab value="service"><Title order={4} className="text-sm text-gray-500">Services</Title></Tabs.Tab>
                <Tabs.Tab value="eprocure"><Title order={4} className="text-sm text-gray-500">ePROCURE</Title></Tabs.Tab>
                <Tabs.Tab value="eservice"><Title order={4} className="text-sm text-gray-500">eSERVICES</Title></Tabs.Tab>
                <Tabs.Tab value="engage"><Title order={4} className="text-sm text-gray-500">ENGAGE</Title></Tabs.Tab>
                <Tabs.Tab value="measure"><Title order={4} className="text-sm text-gray-500">MEASURE</Title></Tabs.Tab>
            </Tabs.List>
            </div>
      

      <Tabs.Panel value="service">{content.service}</Tabs.Panel>
      <Tabs.Panel value="eprocure">{content.eprocure}</Tabs.Panel>
      <Tabs.Panel value="eservice">{content.eservice}</Tabs.Panel>
      <Tabs.Panel value="engage">{content.engage}</Tabs.Panel>
      <Tabs.Panel value="measure">{content.measure}</Tabs.Panel>


      
    </Tabs>

    </div>
    
  );
};

export default Servicespage;