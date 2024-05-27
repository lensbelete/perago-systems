import Image from "next/image";
import peragoLogo from "../../assets/perago1.png";
import { Flex, Title } from "@mantine/core";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <Title order={1} mb="sm" style={{ color: "green" }} className="pt-6">
        About Us
      </Title>

      <div className="w-full flex justify-center mb-1">
        <Image src={peragoLogo} alt="perago logo for about page" />
      </div>
      <div className="px-14  bg-gray-100">
        <Title order={3} mb="sm" style={{ color: "green" }} className="pt-6">
          Who We Are
        </Title>
        <hr className="border-gray-300 w-full mb-6" />
        <p className="text-gray-600  leading-relaxed mb-4 text-lg">
          <span className="text-gray-600 font-bold">
            Perago Information Systems PLC
          </span>{" "}
          is a cutting-edge and innovative technology-based solution providing
          company with a focus on designing and developing multi-channel based
          software solutions using Web, SMS, WAP, IVR, Kiosk, social media, and
          mobile applications; custom software development and quality assurance
          services; E-services consulting, development, and implementation;
          design innovative public service delivery initiatives using technology
          solutions; research and training services; E-governance enablement;
          ICT consulting; and capacity building, in Ethiopia and beyond.
        </p>
        <p className="text-gray-600  leading-relaxed mb-8 text-lg">
          Perago is established by highly qualified and experienced
          professionals in management, economics, business administration,
          software engineering, and information systems management; and it also
          houses professionals who are internationally certified in leading-edge
          information and communication technologies. Perago as well provides
          strong technical support and knowledge transfer to sustain the
          competitive advantages gained by customers from their investments for
          Perago’s services. Beside the technical capacity, Perago’s management
          has commendable entrepreneurial flair with strong ethical and
          professional standards.
        </p>
      </div>

      <div className="w-full bg-white py-14">
        <Title
          order={1}
          mb="sm"
          style={{ color: "green" }}
          className="pt-6 text-center"
        >
          Why Perago?
        </Title>

        <Title
          order={1}
          mb="sm"
          style={{ color: "green" }}
          className="pt-6 text-center"
        >
          {" "}
          Reasons to choose us
        </Title>

        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
          className="p-5"
        >
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Diversified Experience in Software Engineering
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 leading-relaxed text-lg">
              We have hands on consulting and implementation experiences in
              software development, system analysis, and software quality
              assurance at national and regional levels.
            </p>
          </div>
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Qualified Staff
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Perago houses internationally certified professionals among the
              few ones in the industry. This highly dedicated and committed
              staff are the cornerstones for providing quality products and
              services to our customers. We also engage subject matter experts
              to make sure we understand every bit of our customers’ business
              processes.
            </p>
          </div>
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Customer Focus
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              We foster close relationships, rooted in trust and respect, with
              our customers, and face together the everyday challenge of tying
              the evolving information technology with their business goals.
            </p>
          </div>
        </Flex>

        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
          className="p-5"
        >
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Understand Customers’ needs
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              We strive to understand our customers’ business, user,
              operational, and system requirements before designing solutions.
              Perago is very agile in addressing business process changes during
              project periods.
            </p>
          </div>
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Awareness of all stakeholders
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              we engage all stakeholders in every phase of our project life
              cycle in order to get the confidence of users and to ensure the
              solutions are put into service.
            </p>
          </div>
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Minimize the Total Cost of Ownership (TCO)
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Perago houses internationally certified professionals among the
              few ones in the industry. This highly dedicated and committed
              staffs are the cornerstones for providing quality products and
              services to our customers.We also engage subject matter experts to
              make sure we understand every bit of our customers’ business
              processes.
            </p>
          </div>
        </Flex>

        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
          className="p-5"
        >
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Adaptation of technologies
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Fast adaptation of new technologies is the core of our business
              strategy. We help our customers embrace the benefits of technology
              to realize their business goals.
            </p>
          </div>
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Knowledge Transfer
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              We always work in close partnership with our customers from
              requirement understanding to solution delivery. During all the
              phases we make sure that we able to impart our knowledge to
              customers.
            </p>
          </div>
          <div className="flex-1 w-full md:max-w-[30%] p-6 bg-gray-50 rounded-lg shadow mx-auto">
            <Title
              order={4}
              mb="sm"
              style={{ color: "green" }}
              className="pt-6"
            >
              Timely Delivery & Support after solution delivery
            </Title>

            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-lg leading-relaxed">
              To ensure long term successes, a high standing and solid
              reputation in the marketplace are required. It is therefore a
              Perago standard to deliver high quality products and services
              within budget and time. We have the commitment to provide world
              class support service to customers’ request.
            </p>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default AboutUs;
