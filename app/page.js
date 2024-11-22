import Image from "next/image";
import StudentList from "./components/StudentList";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="bg-white mt-52">
      <div className="flex flex-col items-center justify-center p-8 ">
        <h1 className="text-5xl text-black">
          Welcome to the French Fries Movies
        </h1>
        <h2 className="text-1xl text-black mt-10">
          Use the Navigation Bar to Navigate
        </h2>
      </div>
    </div>
  );
}
