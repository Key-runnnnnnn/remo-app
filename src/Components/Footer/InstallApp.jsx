import React from "react";
import gpayapp from "../../assets/gp.png";
import py from "../../assets/payment.png";

const InstallApp = () => {
  return (
    <div className="w-full md:w-[368px] md:h-[241px]">
      <h3 className="text-xl font-bold mb-4">Install App</h3>
      <p className="mb-3">From App Store or Google Play</p>
      <div className="flex space-x-2">
        <a href="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew" className="text-white px-2 py-2 rounded-md">
          <img
            src={gpayapp}
            alt="Google Play Badge"
            className="h-16 w-auto inline-block ml-2 pr-5" // Adjusted height and width for the badge
          />
        </a>
      </div>
      <p className="mt-4 mb-4">Secured Payment Gateway</p>
      <div>
        <img src={py} alt="Payment Gateway" className="w-full h-auto" /> {/* Ensures the image scales proportionally */}
      </div>
    </div>
  );
};

export default InstallApp;
