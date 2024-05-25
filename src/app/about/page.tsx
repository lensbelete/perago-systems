import Image from "next/image";
import peragoLogo from "../../assets/perago1.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-8 bg-gray-100">
      <h1 className="text-4xl d text-green-600 mb-8">About Us</h1>
      <div className="w-full flex justify-center mb-8">
        <Image src={peragoLogo} alt="Perago logo" />
      </div>
      <div className="px-14">
        <h2 className="text-3 text-green-600 mb-5">Who We Are</h2>
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

      <div className="w-full bg-white py-14">
        <h2 className="text-4xl text-green-600 mb-2 text-center">
          Why Perago?
        </h2>
        <h3 className="text-2xl text-green-600 mb-8 text-center">
          Reasons to choose us
        </h3>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          <div className="flex-1 max-w-sm p-6 bg-gray-50 rounded-lg shadow">
            <h4 className="text-xl text-green-600 mb-2">
              Diversified Experience in Software Engineering
            </h4>
            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed">
              We have hands on consulting and implementation experiences in
              software development, system analysis, and software quality
              assurance at national and regional levels.
            </p>
          </div>
          <div className="flex-1 max-w-sm p-6 bg-gray-50 rounded-lg shadow">
            <h4 className="text-xl text-green-600 mb-2">Qualified Staff</h4>
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
          <div className="flex-1 max-w-sm p-6 bg-gray-50 rounded-lg shadow">
            <h4 className="text-xl text-green-600 mb-2">Customer Focus</h4>
            <hr className="border-gray-300 mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed">
              We foster close relationships, rooted in trust and respect, with
              our customers, and face together the everyday challenge of tying
              the evolving information technology with their business goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
