import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1587059481645-b3a17becd6e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
        alt="Blue Sea"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white ">
          <h1 className="font-bold text-2xl md:text-5xl">
            Find Your Special Trip
          </h1>
          <h2 className="text-xl md:text-2xl italic mt-2">With Weekaway</h2>

          <p className="text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit
            sapiente aliquam odio impedit quos minima ut ab doloremque, quasi
            molestiae perferendis aliquid accusamus eveniet. Facere iure neque
            reprehenderit aliquam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
