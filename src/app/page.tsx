"use client";
import CarouselDisplay from "@/components/CarouselDisplay";
import {
  Button,
  Container,
  Flex,
  Group,
  Card,
  Center,
  Title,
  Box,
} from "@mantine/core";
import perago3 from "../assets/perago3.png";
import perago4 from "../assets/perago4.png";
import customer from "../assets/customerEngagement.png";
import Image from "next/image";
import data from "../assets/datamanagement.png";
import performance from "../assets/performance.png";
import payment from "../assets/payment.png";

export default function Home() {
  return (
    <>
      <CarouselDisplay />
      <div className=" text-center">
        <div className="bg-[#F5F5F5] py-8 px-3 pb-12">
          <Container px={0} size="55rem">
            <Title
              order={1}
              style={{ color: "#55ba4f" }}
              className="mb-3 font-normal"
            >
              Who We Are
            </Title>
            <p className="text-center text-gray-700">
              Perago Systems is a technology company that focuses on developing
              and implementing electronic government and B2B commerce solutions
              towards the provision of various online transactional services.
              Perago provides strong technical support and knowledge transfer to
              sustain the competitive advantages gained by customers from their
              ICT investments.
            </p>
          </Container>
        </div>
      </div>

      <div className="pt-9">
        <Container>
          <Center>
            <Title
              order={1}
              style={{ color: "#55ba4f" }}
              className="font-normal"
            >
              What We Offer
            </Title>
          </Center>
        </Container>
      </div>

      <div className="bg-white pb-3">
        <Container className="sm:w-[90%]" py="xl">
          <Card className="sm:m-0 m-3 sm:shadow-none shadow-lg px-auto">
            <Flex
              direction={{ base: "column", sm: "row" }}
              align={{ sm: "center" }}
              gap={{ base: "sm", sm: "lg" }}
              justify={{ sm: "center" }}
            >
              <Box
                w={{ base: "25%", sm: "20%" }}
                className="mx-auto flex items-center pr-2"
              >
                <Image src={perago4} alt="perago image" />
              </Box>
              <Box w={{ base: "100%", sm: "80%" }}>
                <Title
                  order={1}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  {" "}
                  E-Services Platform
                </Title>

                <Title
                  order={4}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  One stop public services provision platform.
                </Title>

                <p className="pb-8 ">
                  The E-Services Platform is an intelligent business process
                  management solution enabling client&apos;s to achieve
                  paperless business transformation. It allows organizations to
                  build and run business applications, including designing
                  e-forms, workflows, data management, and reports across
                  enterprise and within departments.
                </p>

                <Group className="hidden sm:flex ">
                  <a href="/eservice">
                    <Button variant="outline" color="gray">
                      View Details
                    </Button>
                  </a>
                  <a href="/requestDemo">
                    <Button color="green">Request Demo</Button>
                  </a>
                </Group>
              </Box>
            </Flex>
          </Card>
        </Container>
      </div>

      <div className="sm:bg-[#F5F5F5] bg-white pb-3">
        <Container className="sm:w-[95%] pb-5" py="xl">
          <Card className="sm:m-0 m-3 sm:shadow-none shadow-lg px-auto sm:bg-[#F5F5F5] bg-white">
            <Flex
              align={{ sm: "center" }}
              direction={{ base: "column-reverse", sm: "row" }}
              gap={{ base: "sm", sm: "lg" }}
              justify={{ sm: "center" }}
            >
              <Box w={{ base: "100%", sm: "80%" }}>
                <Title
                  order={1}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  {" "}
                  E-Procurement Platform
                </Title>
                <Title
                  order={5}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  Better Planning, just-In-Time-Requisitions, competitive
                  Bidding and Effective contract Management.
                </Title>

                <p className="pb-8 ">
                  The E-Procurement Platform (ePROCURE) serves as a
                  collaborative suit of technology products in managing key
                  procurement activities in acquisition of goods, works, and
                  services with enhanced efficiency in procurement management.
                  The Platform&apos;s value chain consists of indent management,
                  purchase requisition, e-Tendering, e-Auctioning, vendor
                  management, catalogue management, Order & Ship Notices, and
                  contract management.
                </p>

                <Group className="hidden sm:flex">
                  <a href="/eProcure">
                    <Button variant="outline" color="gray">
                      View Details
                    </Button>
                  </a>

                  <a href="/requestDemo">
                    <Button color="green">Request Demo</Button>
                  </a>
                </Group>
              </Box>

              <Box
                w={{ base: "25%", sm: "20%" }}
                className="mx-auto flex items-center pl-2"
              >
                <Image src={perago3} alt="perago image" />
              </Box>
            </Flex>
          </Card>
        </Container>
      </div>

      <div className="bg-white pb-3">
        <Container className="sm:w-[90%]" py="xl">
          <Card className="sm:m-0 m-3 sm:shadow-none shadow-lg px-auto">
            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={{ base: "sm", sm: "lg" }}
              justify={{ sm: "center" }}
            >
              <Box
                w={{ base: "25%", sm: "20%" }}
                className="mx-auto flex items-center pl-2"
              >
                <Image src={customer} alt="perago image" />
              </Box>
              <Box w={{ base: "100%", sm: "80%" }}>
                <Title
                  order={1}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  {" "}
                  Customer Engagement Services
                </Title>
                <Title
                  order={5}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  Streamline customer engagement, automate repetitive works, and
                  enhance collaboration within and outside the organization.
                </Title>

                <p className="pb-8">
                  The Customer Engagement Platform (ENGAGE) is a powerful and
                  easy-to-use web-based customer services and complaint
                  redressal system. It serves as a communication platform
                  between customers and a service provider through various
                  electronic channels of correspondence to enhance overall
                  customer experiences and delight. The system encourages
                  customers&apos; engagement in controlling the quality of
                  services and instills accountability in the workplace.
                </p>

                <Group className="hidden sm:flex">
                  <a href="/engage">
                    <Button variant="outline" color="gray">
                      View Details
                    </Button>
                  </a>

                  <a href="/requestDemo">
                    <Button color="green">Request Demo</Button>
                  </a>
                </Group>
              </Box>
            </Flex>
          </Card>
        </Container>
      </div>
      <div className="sm:bg-[#F5F5F5] bg-white pb-3">
        <Container className="sm:w-[80%]" py="xl">
          <Card className="sm:m-0 m-3 sm:shadow-none shadow-lg px-auto sm:bg-[#F5F5F5] bg-white">
            <Flex
              direction={{ base: "column-reverse", sm: "row" }}
              gap={{ base: "sm", sm: "lg" }}
              justify={{ sm: "center" }}
            >
              <Box w={{ base: "100%", sm: "80%" }}>
                <Title
                  order={1}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  {" "}
                  Performance Management
                </Title>
                <Title
                  order={5}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  Managing your Key Performance Indicators to better business
                  results.
                </Title>

                <p className="pb-8">
                  MEASURE is a web-based performance management and productivity
                  platform to design, plan, execute, measure and manage
                  organizational strategy by linking a vision and mission to
                  strategic priorities, objectives, measures, and initiatives.
                  The system is used to monitor and evaluate various projects
                  and activities within organizations. It provides comprehensive
                  capabilities that address the various challenges that are
                  faced in effectively tracking projects and their deliverables.
                </p>

                <Group className="hidden sm:flex">
                  <a href="/measure">
                    {" "}
                    <Button variant="outline" color="gray">
                      View Details
                    </Button>
                  </a>

                  <a href="/requestDemo">
                    <Button color="green">Request Demo</Button>
                  </a>
                </Group>
              </Box>

              <Box
                w={{ base: "25%", sm: "20%" }}
                className="mx-auto flex items-center pl-2"
              >
                <Image src={performance} alt="perago image" />
              </Box>
            </Flex>
          </Card>
        </Container>
      </div>

      <div className="bg-white pb-3">
        <Container className="sm:w-[80%]" py="xl">
          <Card className="sm:m-0 m-3 sm:shadow-none shadow-lg px-auto">
            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={{ base: "sm", sm: "lg" }}
              justify={{ sm: "center" }}
            >
              <Box
                w={{ base: "25%", sm: "20%" }}
                className="mx-auto flex items-center pl-2"
              >
                <Image src={data} alt="perago image" />
              </Box>

              <Box w={{ base: "100%", sm: "80%" }}>
                <Title
                  order={1}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  {" "}
                  Data Management Services
                </Title>
                <Title
                  order={5}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  Maximize the decision-making power of your data assets.
                </Title>

                <p className="pb-8">
                  The Data Management Platform consists of an enterprise data
                  hub, system for data inflow and outflow, databases, data marts
                  and data warehouse as well as technology for data management,
                  transformation and presentation to meet the present and
                  potential business data needs of organizations.
                </p>

                <Group className="hidden sm:flex">
                  <a href="/requestDemo">
                    <Button color="green">Request Demo</Button>
                  </a>
                </Group>
              </Box>
            </Flex>
          </Card>
        </Container>
      </div>

      <div className="sm:bg-[#F5F5F5] bg-white pb-3">
        <Container className="sm:w-[80%]" py="xl">
          <Card className="sm:m-0 m-3 sm:shadow-none shadow-lg px-auto sm:bg-[#F5F5F5] bg-white">
            <Flex
              direction={{ base: "column-reverse", sm: "row" }}
              gap={{ base: "sm", sm: "lg" }}
              justify={{ sm: "center" }}
            >
              <Box w={{ base: "100%", sm: "80%" }}>
                <Title
                  order={1}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f]  text-black sm:text-left text-center"
                >
                  {" "}
                  Online Payments
                </Title>
                <Title
                  order={5}
                  mb="sm"
                  className="font-normal sm:text-[#55ba4f] text-black sm:text-left text-center"
                >
                  Efficient, secured and affordable online retail payment
                  services.
                </Title>

                <p className="pb-8">
                  The Online Payment Platform helps customers pay for government
                  service fees, utilities, and retail purchases seamlessly by
                  integrating it with our e-services and e-commerce platforms.
                  The platform helps to generate payment orders to track
                  payments and e-receipts as proof of payments.
                </p>

                <Group className="hidden sm:flex">
                  <a href="/requestDemo">
                    <Button color="green">Request Demo</Button>
                  </a>
                </Group>
              </Box>

              <Box
                w={{ base: "25%", sm: "20%" }}
                className="mx-auto flex items-center pl-2"
              >
                <Image src={payment} alt="perago image" />
              </Box>
            </Flex>
          </Card>
        </Container>
      </div>
    </>
  );
}
