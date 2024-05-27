"use client";
import React from "react";
import { Container, Card, Text, Title, Center } from "@mantine/core";
import { IconMapPin, IconPhone, IconMail } from "@tabler/icons-react";

const ContactUs = () => {
  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Container size="lg" py="xl">
        <Center>
          <Title
            order={1}
            mb="xl"
            style={{ fontWeight: "bold", color: "green" }}
          >
            Contact Us
          </Title>
        </Center>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ maxWidth: "350px", width: "100%" }}
          >
            <Center>
              <IconMapPin size={40} stroke={1.5} color="green" />
            </Center>
            <Title
              order={4}
              align="center"
              mt="md"
              style={{ fontWeight: "normal", fontSize: "1.7rem" }}
            >
              Address
            </Title>
            <Text
              align="center"
              mt="sm"
              style={{ fontWeight: "normal", fontSize: "1.1rem" }}
              
            >
              Addis Ababa,Ethiopia,
              <br />
              Haile Gebre Silase  St.
              <br />
              Noah City Point building 4th floor
             
            </Text>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ maxWidth: "350px", width: "100%" }}
          >
            <Center>
              <IconPhone size={40} stroke={1.5} color="green" />
            </Center>
            <Title
              order={4}
              align="center"
              mt="md"
              style={{ fontWeight: "normal", fontSize: "1.7rem" }}
            >
              Phone Number
            </Title>
            <Text
              align="center"
              mt="sm"
              style={{ fontWeight: "normal", fontSize: "1.1rem" }}
            >
              <a href="tel:+251(114)701998">+251(114)701998</a>

              <br />
              <a href="tel:+251-911-231622">+251-911-231622</a>
            </Text>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{ maxWidth: "350px", width: "100%" }}
          >
            <Center>
              <IconMail size={40} stroke={1.5} color="green" />
            </Center>
            <Title
              order={4}
              align="center"
              mt="md"
              style={{ fontWeight: "normal", fontSize: "1.7rem" }}
            >
              Email Address
            </Title>
            <Text
              align="center"
              mt="sm"
              style={{ fontWeight: "normal", fontSize: "1.1rem" }}
            >
              <a href="mailto:email@example.com">Info@peragosystems.com</a>
            </Text>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
