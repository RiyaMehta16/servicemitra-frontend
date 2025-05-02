import React from "react";
import LightGrayToTransparentGradientContainer from "../design/LightGrayToTransparentGradientContainer";
import CustomButton from "../design/CustomButton";

const Hero = () => {
  return (
    <div>
      <LightGrayToTransparentGradientContainer>
        <div className="flex flex-col items-center justify-center mt-40 max-xl:mt-32 max-md:mt-24 px-4">
          {/* Heading */}
          <h1 className="text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl text-center font-semibold font-primary bg-clip-text text-transparent bg-gradient-to-b from-blue-600 to-blue-900 py-2">
            Platform For Instant Loans
          </h1>

          {/* Subtitle */}
          <span className="mt-5 mb-10 font-bold opacity-45 text-lg max-md:text-base text-center">
            Your Loan, Tailored for You
          </span>

          {/* Buttons */}
          <div className="flex max-md:flex-col max-md:space-y-4 space-x-10 max-md:space-x-0">
            {/* WhatsApp Button */}
            <CustomButton className="bg-green-600 text-white hover:bg-green-700 shadow-md w-fit max-md:w-full">
              <a
                href="https://api.whatsapp.com/send/?phone=919317310355&text&type=phone_number&app_absent=0"
                className="flex items-center justify-center gap-x-2"
              >
                <img
                  src="whatsapp.png"
                  alt="whatsapp icon"
                  className="size-8 max-md:size-6"
                />
                Connect on WhatsApp
              </a>
            </CustomButton>

            {/* Instant Loan Button */}
            <CustomButton className="bg-blue-500 text-white hover:bg-blue-600 w-fit max-md:w-full">
              <a
                href="https://partner.werize.com/MyBusiness/SANDEEP/3fe1b107-724d-4812-ac29-6e1be2ff4198"
                className="flex items-center justify-center gap-x-2"
              >
                <img
                  src="rupee.png"
                  alt="rupee icon"
                  className="size-8 max-md:size-6"
                />
                Get Instant Loan →
              </a>
            </CustomButton>
          </div>
        </div>
      </LightGrayToTransparentGradientContainer>
    </div>
  );
};

export default Hero;
