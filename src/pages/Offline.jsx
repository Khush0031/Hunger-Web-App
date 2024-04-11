
import { PowerOff } from "lucide-react";

export default function Offline() {
  return (
    <div className="flex flex-col justify-center mt-30  px-2 py-60 lg:flex-row lg:items-center">
      <div>
        <div>
          <h1 className="mt-3 text-3xl text-center font-semibold text-red-500 md:text-3xl">
            Connect to the Internet
          </h1>
          <p className="mt-4 text-2xl text-gray-500 text-center">
            {`You're offline. Check your connection.`}
          </p>
          <div className="grid place-items-center">
            {" "}
            <PowerOff size={40} className="" />
          </div>
        </div>
        <div className="flex items-center justify-center  lg:block"></div>
      </div>
    </div>
  );
}