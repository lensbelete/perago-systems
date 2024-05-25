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
            style={{ fontWeight: "normal", color: "green" }}
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
              Addis Ababa, Ethiopia
              <br />
              Meskel Flower Road,
              <br />
              Near Dreamliner Hotel
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
              +251(114)701998
              <br />
              +251-911-231622
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
              Info@peragosystems.com
            </Text>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
