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
    </div>
  );
};

export default AboutUs;
