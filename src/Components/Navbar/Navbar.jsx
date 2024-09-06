import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [
  { name: "Home", id: "Home" },
  { name: "About", id: "About" },
  { name: "Education", id: "Education" },
  { name: "Skills", id: "Skills" },
  { name: "Projects", id: "Projects" },
  { name: "Contact", id: "Contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={` sticky top-0 z-50 px-2 py-2 bg-yellow-300`}>
      <nav className="container mx-auto px-6 lg:px-8 flex items-center justify-between" aria-label="Global">
         <div className="flex lg:flex-1 lg:block">Logo</div>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer text-base font-semibold leading-6"
            >
              {item.name}
            </div>
          ))}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className={` fixed inset-0 z-50 overflow-y-auto px-6 py-6 lg:hidden`}>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="-mx-3 cursor-pointer block rounded-lg py-2 px-3 text-base font-semibold leading-7"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;