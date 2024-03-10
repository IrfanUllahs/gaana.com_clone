import React from "react";
import Herosection from "../components/Herosection";
import SecondaryNav from "../components/SecondaryNav";

function Home() {
  return (
    <div className=" bg-gray-500">
      <SecondaryNav />
      <Herosection />
    </div>
  );
}

export default Home;
