import React from "react";
import AddMovie from "../components/AddMovie";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <main className="flex flex-col items-center justify-center p-8 ">
        <AddMovie />
      </main>
    </div>
  );
};

export default page;
