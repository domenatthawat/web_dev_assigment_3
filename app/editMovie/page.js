import React from "react";
import EditMovie from "../components/EditMovie";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <main className="flex flex-col items-center justify-center p-8 ">
        <EditMovie />
      </main>
    </div>
  );
};

export default page;
