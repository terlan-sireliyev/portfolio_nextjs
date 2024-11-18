import React from "react";
import Card from "../../components/user/portfolio/Card";
const page = () => {
  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2 p-2">
        <Card />
        <Card />
      </div>
    </>
  );
};

export default page;
