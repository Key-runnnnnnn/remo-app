import React from 'react';
import imageIcon from "/logo.png"; // Use actual path to the icons

const navigation = [
  { image: imageIcon, count: "100,000+", done: "Satisfied Users" },
  { image: imageIcon, count: "30,000+", done: "Cars" },
  { image: imageIcon, count: "18", done: "Service Providers" },
  { image: imageIcon, count: "59", done: "Cities" },
];

const Zymo = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-8">Why Zymo?</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {navigation.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gradient-to-br from-purple-500 to-blue-500 p-6 rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt="icon"
              className="w-10 h-4 mb-4"
            />
            <p className="text-2xl font-bold">{item.count}</p>
            <p className="text-base font-medium text-gray-200">{item.done}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zymo;
