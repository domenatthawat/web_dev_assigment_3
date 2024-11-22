import React from "react";
import ViewMovie from "../components/ViewMovie";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <main className="flex flex-col items-center justify-center p-8 ">
        <ViewMovie />
      </main>
    </div>
  );
};

export default page;