import Image from "next/image";
import peragoLogo from "../../assets/perago1.png";
import { Title } from "@mantine/core";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-2 ">
      <Title
        order={1}
        mb="lg"
        style={{ color: "#55ba4f", fontWeight: "550", fontSize: "2.5rem" }}
        className="pt-1"
      >
        About Us
      </Title>
      <div className="w-full flex justify-center mb-8">
        <Image src={peragoLogo} alt="Perago logo" />
      </div>
      <div className="w-screen px-14">
        <Title
          order={3}
          mb="sm"
          style={{
            color: "#55ba4f",
            fontWeight: "normal",
            fontSize: "1.1rem",
          }}
          className="pt-6"
        >
          Who We Are
        </Title>
        <hr className="border-gray-300 w-full mb-6" />
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
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
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
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

      <div className="w-full bg-white py-10">
        <Title
          order={1}
          mb="sm"
          style={{ color: "#55ba4f", fontWeight: "normal", fontSize: "2.6rem" }}
          className="pt-6 text-center"
        >
          Why Perago?
        </Title>

        <Title
          order={1}
          mb="sm"
          style={{ color: "#55ba4f", fontWeight: "normal", fontSize: "1.8rem" }}
          className="pt-1 text-center"
        >
          Reasons to choose us
        </Title>

        <div className="flex flex-wrap justify-center gap-8 px-6 py-10">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-8">
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-sm text-green-600 mb-2">
                Diversified Experience in Software Engineering
              </h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We have hands on consulting and implementation experiences in
                software development, system analysis, and software quality
                assurance at national and regional levels.
              </p>
            </div>
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-md text-green-600 mb-2">Qualified Staff</h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Perago houses internationally certified professionals among the
                few ones in the industry. This highly dedicated and committed
                staff are the cornerstones for providing quality products and
                services to our customers. We also engage subject matter experts
                to make sure we understand every bit of our customers’ business
                processes.
              </p>
            </div>
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-md text-green-600 mb-2">Customer Focus</h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We foster close relationships, rooted in trust and respect, with
                our customers, and face together the everyday challenge of tying
                the evolving information technology with their business goals.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-8 mt-8">
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-md text-green-600 mb-2">
                Understand Customers’ needs
              </h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We strive to understand our customers’ business, user,
                operational, and system requirements before designing solutions.
                Perago is very agile in addressing business process changes
                during project periods.
              </p>
            </div>
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-md text-green-600 mb-2">
                Awareness of all stakeholders
              </h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We engage all stakeholders in every phase of our project life
                cycle in order to get the confidence of users and to ensure the
                solutions are put into service.
              </p>
            </div>
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-md text-green-600 mb-2">
                Minimize the Total Cost of Ownership (TCO)
              </h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Perago houses internationally certified professionals among the
                few ones in the industry. This highly dedicated and committed
                staffs are the cornerstones for providing quality products and
                services to our customers.We also engage subject matter experts
                to make sure we understand every bit of our customers’ business
                processes.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-8 mt-8">
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-md text-green-600 mb-2">
                Adaptation of technologies
              </h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Fast adaptation of new technologies is the core of our business
                strategy. We help our customers embrace the benefits of
                technology to realize their business goals.
              </p>
            </div>
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-md text-green-600 mb-2">
                Knowledge Transfer
              </h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We always work in close partnership with our customers from
                requirement understanding to solution delivery. During all the
                phases we make sure that we able to impart our knowledge to
                customers.
              </p>
            </div>
            <div className="flex-1 w-full md:max-w-[30%] p-6 bg-white rounded-lg shadow-none mx-auto">
              <h4 className="text-sm text-green-600 mb-2">
                Timely Delivery & Support after solution delivery
              </h4>
              <hr className="border-gray-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">
                To ensure long term successes, a high standing and solid
                reputation in the marketplace are required. It is therefore a
                Perago standard to deliver high quality products and services
                within budget and time. We have the commitment to provide world
                class support service to customers’ request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
