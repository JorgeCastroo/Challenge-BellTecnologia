import React from "react";

type Icard = {
  image: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  action: () => void;
};

const CardUser: React.FC<Icard> = ({
  image,
  city,
  country,
  email,
  name,
  phone,
  action,
}) => {
  return (
    <div className="w-full max-w-lg h-48 bg-purple-100 flex flex-col items-center justify-between font-mono  p-4 shadow-lg shadow-stone-500/50 rounded-md mt-6">
      <div className="w-full flex flex-row items-center  p-2 ">
        <img className="rounded-md max-w-24 h-24" src={image}></img>
        <div className="pl-4">
          <div className="font-bold">{name}</div>
          <div className="font-normal">{email}</div>
          <div className="font-normal">Phone: {phone}</div>
          <div className="flex dir-row ">
            <div className="font-normal pr-2">{city},</div>
            <div className="font-normal">{country}</div>
          </div>
        </div>
      </div>

      <button
        onClick={action}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        View Profile
      </button>
    </div>
  );
};

export default CardUser;
