import {
  FaBath,
  FaBed,
  FaChair,
  FaHouseUser,
  FaMedal,
  FaToiletPortable,
} from "react-icons/fa6";
import { User } from "../Context/UserContext";

const RoomInfo = () => {
  const { hostName, hostImage } = User();
  return (
    <div className="mt-10">
      {/* Title */}
      <div className="flex md:justify-between justify-around items-center mb-5">
        <div className="md:text-2xl text-xl md:mr-0 mr-14">
          Room in a rental unit hosted by{" "}
          <span className="font-semibold">{hostName}</span>
        </div>
        <div>
          <img src={hostImage} alt="profile" className="w-14 rounded-full" />
        </div>
      </div>
      {/* Card */}
      <div className="grid grid-cols-3 gap-3">
        <div className="border border-gray-300 flex flex-col md:flex-row justify-around items-center pl-5 pr-5 pt-7 pb-7 rounded-xl">
          <FaBed className="text-2xl" />
          <p className="font-semibold">1 double bed</p>
        </div>
        <div className="border border-gray-300 flex flex-col md:flex-row justify-around items-center pl-5 pr-5 pt-7 pb-7 rounded-xl">
          <FaBath className="text-2xl" />
          <p className="font-semibold">Shared bathroom</p>
        </div>
        <div className="border border-gray-300 flex flex-col md:flex-row justify-around items-center pl-5 pr-5 pt-7 pb-7 rounded-xl">
          <FaHouseUser className="text-2xl" />
          <p className="font-semibold">Guests may be here</p>
        </div>
      </div>
      <hr className="mt-8" />
      {/* Bullet Points */}
      <div className="mt-5">
        <div className="flex items-center mb-5">
          <div className="mr-3">
            <FaToiletPortable className="md:text-3xl text-2xl" />
          </div>
          <div>
            <p className="md:text-xl text-lg font-semibold">
              Room in a rental unit
            </p>
            <p className="md:text-lg text-sm">
              Your own room in a home, plus access to shared spaces.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <div className="mr-3">
            <FaChair className="md:text-3xl text-2xl" />
          </div>
          <div>
            <p className="md:text-xl text-lg font-semibold">
              Dedicated workspace
            </p>
            <p className="md:text-lg text-sm">
              A room with wifi that’s well-suited for working.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-5">
          <div className="mr-3">
            <FaMedal className="md:text-3xl text-2xl" />
          </div>
          <div>
            <p className="md:text-xl text-lg font-semibold">
              {hostName} is a Superhost
            </p>
            <p className="md:text-lg text-sm">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
    </div>
  );
};

export default RoomInfo;
