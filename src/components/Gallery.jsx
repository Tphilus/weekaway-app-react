import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=475&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1613553497126-a44624272024?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover "
            src="https://plus.unsplash.com/premium_photo-1677359735525-41758ffe51c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=470&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover "
            src="https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1504731231146-c0f65dc6a950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
