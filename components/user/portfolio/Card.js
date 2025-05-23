"use client"; // Mark the component as a client component
//this is card component-1
import React from "react";
import Image from "next/image"; // Import Image from next/image

const Card = () => {
  return (
    <div className="rounded-border15 border p-2 border-leftTextColorGreen">
      <div className="rounded-border15">
        {/* Use Image component from next/image */}
        <Image
          src="/pf/alsn.png" // Ensure the path is correct
          alt="Card Image"
          width={500} // Provide width and height for optimization
          height={300}
          className="rounded-border15"
        />
      </div>
      <div>
        <h1 className="text-leftTextColorWhite text-15 font-bold my-2">
          JmmErp
        </h1>
        <p className="text-leftTextColorWhite text-12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          eos nobis, impedit quasi nulla vitae ea libero culpa ad, und
        </p>
      </div>
      <div className="text-leftTextColorWhite grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 gap-4 mt-4">
        <a
          href=""
          className="bg-leftBgOne py-2 px-4 max-md:px-2 rounded-border15"
        >
          Next.js
        </a>
        <a
          href=""
          className="bg-leftBgOne py-2 px-4 max-md:px-2 rounded-border15"
        >
          Css
        </a>
        <a
          href=""
          className="bg-leftBgOne max-md:px-2 py-2 px-4 rounded-border15"
        >
          Tailwind.css
        </a>
        <a
          href=""
          className="bg-leftBgOne max-md:px-2 py-2 px-4 rounded-border15"
        >
          react-icons
        </a>
        <a
          href=""
          className="bg-leftBgOne max-md:px-2 py-2 px-4 rounded-border15"
        >
          Express.js
        </a>
        <a
          href=""
          className="bg-leftBgOne max-md:px-2 py-2 px-4 rounded-border15"
        >
          MongoDB
        </a>
      </div>
    </div>
  );
};

export default Card;
