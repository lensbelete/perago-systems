"use client";
import React from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Container,
  Title,
  Group,
  Button,
  Box,
  Textarea,
  Card,
} from "@mantine/core";
import { useRouter } from "next/navigation";

const RequestDemo = () => {
  const form = useForm({
    initialValues: {
      fullName: "",
      companyName: "",
      email: "",
      areaCode: "",
      phoneNumber: "",
      helpMessage: "",
    },

    validate: {
      fullName: (value) =>
        value.length === 0 ? "This field is required" : null,
      companyName: (value) =>
        value.length === 0 ? "This field is required" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      areaCode: (value) =>
        value.length === 0 ? "This field is required" : null,
      phoneNumber: (value) =>
        value.length === 0 ? "This field is required" : null,
      helpMessage: (value) =>
        value.length === 0 ? "This field is required" : null,
    },
  });
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    console.log(values);
    router.push("/submit");
  };

  return (
    <Container size="md" className="h-screen">
      <Card
        shadow="sm"
        className="p-8 sm:p-32 pt-4 h-screen mt-1"
        radius="md"
        withBorder
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <Card
          shadow="sm"
          className="p-4 sm:p-10 mt-1 overflow-y-scroll"
          radius="md"
          withBorder
        >
          <Title mb="xl" className="text-center">
            Request Demo
          </Title>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Group mt="lg" mb="xl">
              <TextInput
                withAsterisk
                label="Full Name"
                placeholder="Full Name"
                {...form.getInputProps("fullName")}
                styles={{
                  input: {
                    backgroundColor: form.errors.fullName
                      ? "#ffe4e4"
                      : "transparent",
                  },
                }}
                className="w-full sm:w-[300px]"
              />
            </Group>

            <Group mt="lg" mb="xl">
              <TextInput
                withAsterisk
                label="Company Name"
                placeholder="Company Name"
                {...form.getInputProps("companyName")}
                styles={{
                  input: {
                    backgroundColor: form.errors.companyName
                      ? "#ffe4e4"
                      : "transparent",
                  },
                }}
                className="w-full sm:w-[300px]"
              />
            </Group>

            <Group mt="lg" mb="xl">
              <TextInput
                withAsterisk
                label="Email"
                placeholder="Email"
                {...form.getInputProps("email")}
                styles={{
                  input: {
                    backgroundColor: form.errors.email
                      ? "#ffe4e4"
                      : "transparent",
                  },
                }}
                className="w-full sm:w-[300px]"
              />
            </Group>

            <Group mt="lg" mb="xl" className="flex flex-col sm:flex-row">
              <TextInput
                withAsterisk
                label="Area Code"
                placeholder="Area Code"
                {...form.getInputProps("areaCode")}
                styles={{
                  input: {
                    backgroundColor: form.errors.areaCode
                      ? "#ffe4e4"
                      : "transparent",
                  },
                }}
                className="w-full sm:w-[200px]"
              />

              <TextInput
                withAsterisk
                label="Phone Number"
                placeholder="Phone Number"
                {...form.getInputProps("phoneNumber")}
                styles={{
                  input: {
                    backgroundColor: form.errors.phoneNumber
                      ? "#ffe4e4"
                      : "transparent",
                  },
                }}
                className="w-full sm:w-[200px] mt-4 sm:mt-0 sm:ml-4"
              />
            </Group>

            <Group mt="lg" mb="xl">
              <Textarea
                withAsterisk
                resize="both"
                label="How Can We Help You?"
                placeholder="Enter your message here"
                {...form.getInputProps("helpMessage")}
                styles={{
                  input: {
                    backgroundColor: form.errors.helpMessage
                      ? "#ffe4e4"
                      : "transparent",
                  },
                }}
                className="w-full sm:w-[500px] h-[100px]"
              />
            </Group>

            <Box mt="xl">
              <Button color="green" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Card>
      </Card>
    </Container>
  );
};

export default RequestDemo;
