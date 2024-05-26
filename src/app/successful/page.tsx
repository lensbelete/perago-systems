"use client";
import React from "react";
import { Container, Card, Text, Title, Center, Tabs } from "@mantine/core";
import Image from "next/image";
import eProcureIcon from "../../assets/perago3.png";
import eServicesIcon from "../../assets/perago4.png";
import engageIcon from "../../assets/engage.png";
import measureIcon from "../../assets/performance.png";
import dataManagerIcon from "../../assets/data.png";
import ePayIcon from "../../assets/payment.png";



const page = () => {
  return (
   
      
      
     
      <Container size="lg" py="xl">
      
    
    
        
          
            <Card
        
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ maxWidth: "100%", width: "100%" }}
            >
            
              <Title order={3} mt="md" mb="sm">
                hello
              </Title>
              <Text >
                world
              </Text>
            </Card>
       
      </Container>
   


    
  );
};

export default page;
