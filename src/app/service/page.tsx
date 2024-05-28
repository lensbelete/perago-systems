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

const service = [
  {
    image: eProcureIcon,
    title: "ePROCURE",
    description:
      "Collaborative platform in conducting key procurement activities in acquisition of goods, works, and services with enhanced efficiency in procurement management ",
  },
  {
    image: eServicesIcon,
    title: "eSERVICES",
    description:
      "A solution framework to apply process management in e-government with the capabilities of two-way interaction between government and citizens. ",
  },
  {
    image: engageIcon,
    title: "ENGAGE",
    description:
      "A communication platform between customers and a service provider through various electronic channels of correspondence to enhance overall customer experiences and delight ",
  },
  {
    image: measureIcon,
    title: "MEASURE",
    description:
      "A web-based collaboration and productivity platform to design, plan, execute, measure and manage organizational strategy by linking a vision and mission to strategic priorities, objectives, measures, and initiatives ",
  },
  {
    image: dataManagerIcon,
    title: "DATA MANAGER",
    description:
      "The Data Management Platform consists of an enterprise data hub, system for data inflow and outflow, databases, data marts and data warehouse as well as technology for data management, transformation and presentation to meet the present and potential business data needs of organizations. ",
  },
  {
    image: ePayIcon,
    title: "ePAY",
    description:
      "The Online Payment Platform helps customers pay for government service fees, utilities, and retail purchases seamlessly by integrating it with our e-services and e-commerce platforms. The platform helps to generate payment orders to track payments and e-receipts as proof of payments. ",
  },
];

const Services = () => {
  return (
    <div>
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Container size="lg" py="xl">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {service.slice(0, 3).map((service, index) => (
              <Card
                key={index}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ maxWidth: "350px", width: "100%" }}
              >
                <Center>
                  <Image
                    src={service.image}
                    alt={`${service.title} icon`}
                    width={80}
                    height={80}
                  />
                </Center>
                <Title
                  order={3}
                  align="center"
                  mt="md"
                  mb="sm"
                  style={{ fontWeight: "550" }}
                >
                  {service.title}
                </Title>
                <Text align="center">{service.description}</Text>
              </Card>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
              marginTop: "24px",
            }}
          >
            {service.slice(3, 6).map((service, index) => (
              <Card
                key={index}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ maxWidth: "350px", width: "100%" }}
              >
                <Center>
                  <Image
                    src={service.image}
                    alt={`${service.title} icon`}
                    width={80}
                    height={80}
                  />
                </Center>
                <Title
                  order={3}
                  align="center"
                  mt="md"
                  mb="sm"
                  style={{ fontWeight: "550" }}
                >
                  {service.title}
                </Title>
                <Text align="center">{service.description}</Text>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
