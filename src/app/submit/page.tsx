"use client";
import React from "react";
import { Card, Container, Image, Text, Group, Button } from "@mantine/core";
import successIcon from "../../assets/success.png";

const SubmitPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <Card shadow="sm" padding="lg" radius="md" style={{ width: 600 }}>
        <Container style={{ textAlign: "center" }}>
          <Image
            src={successIcon}
            alt=""
            width={64}
            height={64}
            style={{ margin: "0 auto", display: "block" }}
          />
          <Text
            mt="sm"
            size="xl"
            style={{ fontWeight: "bold", fontSize: "2rem" }}
          >
            Thank You!
          </Text>
          <Text mt="sm" size="md" mb="xl">
            Your submission has been received.
          </Text>
        </Container>
        <hr className="border-gray-300 w-full" />
        <Group position="apart" mt="lg" align="center">
          <Text size="sm" style={{ color: "blue" }}>
            Now create your own Jotform - It’s free!
          </Text>
          <Button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              marginLeft: "auto",
            }}
            onClick={() => (window.location.href = "https://www.jotform.com")}
          >
            Create your own Jotform
          </Button>
        </Group>
      </Card>
    </div>
  );
};

export default SubmitPage;
