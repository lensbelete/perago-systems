"use client";
import React from "react";
import { Card, Container, Image, Text, Group, Button } from "@mantine/core";

import { IconCircleCheck } from "@tabler/icons-react";

const SubmitPage = () => {
  return (
    <div className="flex justify-center py-10">
      <Card shadow="sm" padding="lg" radius="md" style={{ width: "50%" }}>
        <Container style={{ textAlign: "center" }}>
          <div className="flex justify-center">
            <IconCircleCheck size={100} color="#55ba4f" stroke={2} />
          </div>

          <Text
            mt="sm"
            size="xl"
            style={{ fontWeight: "550", fontSize: "2rem" }}
          >
            Thank You!
          </Text>
          <Text mt="sm" size="md" mb="xl">
            Your submission has been received.
          </Text>
        </Container>
        <hr className="border-gray-300 w-full" />

        <Group mt="lg" align="center" className="flex ">
          <div className="flex justify-start">
            <Text size="sm" style={{ color: "blue" }}>
              Now create your own Jotform - It’s free!
            </Text>
          </div>

          <div className="flex justify-end ml-auto">
            <Button
              color="#55ba4f"
              onClick={() => (window.location.href = "https://www.jotform.com")}
            >
              Create your own Jotform
            </Button>
          </div>
        </Group>
      </Card>
    </div>
  );
};

export default SubmitPage;
