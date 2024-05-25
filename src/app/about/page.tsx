import Image from "next/image";
import peragoLogo from "../../assets/perago1.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-8">
      <h1 className="text-4xl font-bold text-green-600 mb-8">About Us</h1>
      <div className="w-full flex justify-center mb-8">
        <Image src={peragoLogo} alt="Perago logo" />
      </div>
      <div className="max-w-4xl px-4 text-center">
        <p className="text-lg leading-relaxed mb-4">
          Welcome to Perago! We are dedicated to providing innovative solutions
          for your business needs. Our team is committed to excellence and
          delivering value through our services. Thank you for choosing Perago.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our mission is to empower businesses with the tools they need to
          succeed in today's competitive market. We strive to build long-lasting
          relationships with our clients based on trust and mutual respect.
        </p>
        <p className="text-lg leading-relaxed">
          Contact us today to learn more about how we can help your business
          grow and achieve its goals.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
