"use client";
import React from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Container,
  Title,
  Group,
  Button,
  Text,
  Box,
  Popover,
  Textarea,
  Card,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

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

  return (
    <div
      style={{
        color: "black",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Container size="sm" py="xl">
        <Card
          shadow="sm"
          padding="lg"
          radius="lg"
          withBorder
          style={{ backgroundColor: "#f0f0f0", padding: "60px" }}
        >
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title align="center" mb="xl">
              Request Demo
            </Title>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Group direction="column" mt="lg" mb="xl">
                <Popover
                  opened={!!form.errors.fullName}
                  position="bottom"
                  withArrow
                  trapFocus={false}
                  transition="pop-top-left"
                  width="target"
                  styles={{ popover: { backgroundColor: "red" } }}
                >
                  <Popover.Target>
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
                          width: "300px",
                        },
                      }}
                    />
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text color="white" size="sm">
                      <IconAlertCircle
                        size={16}
                        stroke={1.5}
                        style={{ verticalAlign: "middle" }}
                      />{" "}
                      {form.errors.fullName}
                    </Text>
                  </Popover.Dropdown>
                </Popover>
              </Group>

              <Group direction="column" mt="lg" mb="xl">
                <Popover
                  opened={!!form.errors.companyName}
                  position="bottom"
                  withArrow
                  trapFocus={false}
                  transition="pop-top-left"
                  width="target"
                  styles={{ popover: { backgroundColor: "red" } }}
                >
                  <Popover.Target>
                    <TextInput
                      withAsterisk
                      label="Company Name"
                      placeholder="Company Name"
                      {...form.getInputProps("companyName")}
                      styles={{
                        input: {
                          backgroundColor: form.errors.companyName
                            ? "#ffffe0"
                            : "transparent",
                          width: "300px",
                        },
                      }}
                    />
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text color="white" size="sm">
                      <IconAlertCircle
                        size={16}
                        stroke={1.5}
                        style={{ verticalAlign: "middle" }}
                      />{" "}
                      {form.errors.companyName}
                    </Text>
                  </Popover.Dropdown>
                </Popover>
              </Group>

              <Group direction="column" mt="lg" mb="xl">
                <Popover
                  opened={!!form.errors.email}
                  position="bottom"
                  withArrow
                  trapFocus={false}
                  transition="pop-top-left"
                  width="target"
                  styles={{ popover: { backgroundColor: "red" } }}
                >
                  <Popover.Target>
                    <TextInput
                      withAsterisk
                      label="Email"
                      placeholder="Email"
                      {...form.getInputProps("email")}
                      styles={{
                        input: {
                          backgroundColor: form.errors.email
                            ? "#ffffe0"
                            : "transparent",
                          width: "300px",
                        },
                      }}
                    />
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text color="white" size="sm">
                      <IconAlertCircle
                        size={16}
                        stroke={1.5}
                        style={{ verticalAlign: "middle" }}
                      />{" "}
                      {form.errors.email}
                    </Text>
                  </Popover.Dropdown>
                </Popover>
              </Group>

              <Group
                direction="row"
                mt="lg"
                mb="xl"
                style={{ alignItems: "flex-end" }}
              >
                <Popover
                  opened={!!form.errors.areaCode}
                  position="bottom"
                  withArrow
                  trapFocus={false}
                  transition="pop-top-left"
                  width="target"
                  styles={{ popover: { backgroundColor: "red" } }}
                >
                  <Popover.Target>
                    <TextInput
                      withAsterisk
                      label="Phone Number"
                      placeholder="Area Code"
                      {...form.getInputProps("areaCode")}
                      styles={{
                        input: {
                          backgroundColor: form.errors.areaCode
                            ? "#ffe4e4"
                            : "transparent",
                          width: "200px",
                        },
                      }}
                    />
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text color="white" size="sm">
                      <IconAlertCircle
                        size={16}
                        stroke={1.5}
                        style={{ verticalAlign: "middle" }}
                      />{" "}
                      {form.errors.areaCode}
                    </Text>
                  </Popover.Dropdown>
                </Popover>

                <TextInput
                  withAsterisk
                  label=""
                  placeholder="Phone Number"
                  {...form.getInputProps("phoneNumber")}
                  styles={{
                    input: {
                      backgroundColor: form.errors.phoneNumber
                        ? "#ffe4e4"
                        : "transparent",
                      width: "200px",
                    },
                  }}
                />
              </Group>

              <Group direction="column" mt="lg" mb="xl">
                <Popover
                  opened={!!form.errors.helpMessage}
                  position="bottom"
                  withArrow
                  trapFocus={false}
                  transition="pop-top-left"
                  width="target"
                  styles={{ popover: { backgroundColor: "red" } }}
                >
                  <Popover.Target>
                    <Textarea
                      withAsterisk
                      label="How Can We Help You?"
                      placeholder="Enter your message here"
                      {...form.getInputProps("helpMessage")}
                      styles={{
                        input: {
                          backgroundColor: form.errors.helpMessage
                            ? "#ffe4e4"
                            : "transparent",
                          width: "500px",
                          height: "100px",
                        },
                      }}
                    />
                  </Popover.Target>
                  <Popover.Dropdown>
                    <Text color="white" size="sm">
                      <IconAlertCircle
                        size={16}
                        stroke={1.5}
                        style={{ verticalAlign: "middle" }}
                      />{" "}
                      {form.errors.helpMessage}
                    </Text>
                  </Popover.Dropdown>
                </Popover>
              </Group>
              <Box mt="xl">
                <a href="/submit" style={{ textDecoration: "none" }}>
                  <Button
                    styles={{
                      root: {
                        backgroundColor: "#66a366",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#76c776",
                        },
                      },
                    }}
                  >
                    Submit
                  </Button>
                </a>
              </Box>
            </form>
          </Card>
        </Card>
      </Container>
    </div>
  );
};

export default RequestDemo;
