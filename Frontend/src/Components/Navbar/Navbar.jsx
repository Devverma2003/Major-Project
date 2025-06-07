import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/Aboutpage' },
  { name: 'Destinations', href: '/destination' },
  { name: 'Contact', href:'/Contact'}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <div>
      <Disclosure as="nav" className="navbar fixed w-full z-50 top-0 left-0 bg-white shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className=" bg-white group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>

            {/* Logo and Links */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  alt="Logo"
                  src="/NavLogo.png"
                  className="h-10 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 ml-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      // className={({ isActive }) =>
                      //   classNames(
                      //     isActive
                      //       ? ' text-black'
                      //       : 'text-black hover:bg-blue-400 hover:bg-opacity-55',
                      //     'rounded-md px-3 py-2 text-lg font-medium'
                      //   )
                      // }
                      className={({ isActive }) =>
  classNames(
    isActive
      ? 'text-black font-semibold '
      : 'text-black ',
    'rounded-md px-3 py-2 text-lg transition-all duration-200'
  )
}

              >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Sign Up Button */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <NavLink to="/signup">
              <button>
                  Sign up
                  <div className="arrow-wrapper">
                    <div className="arrow" />
                  </div>
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile menu items */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? ' text-black'
                      : 'text-black hover:bg-blue-400 hover:bg-opacity-40',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default Navbar;
