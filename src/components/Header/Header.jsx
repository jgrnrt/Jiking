import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import JikingLogo from '/JikingLogo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const navigation = [
    { name: 'Calculator', to: '/Calculator' },
    { name: 'Services', to: '/Services' },
    { name: 'Products', to: '/Products' },
    { name: 'Contact', to: '/Contact' },
]

export default function Header() {

    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();

    const handleNavLinkClick = (index) => {
        setActiveLink(index);
    };

    useEffect(() => {
        // Seite wird zum ersten Mal aufgerufen, damit setActiveLink gesetzt wird
        const activeIndex = navigation.findIndex(item => item.to === location.pathname);
        setActiveLink(activeIndex);
    }, [location.pathname]);

    return (
        <Disclosure as="nav" className="bg-lime-900">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-center sm:justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-lime-600 hover:text-white">
                                    <span className="absolute -inset-0.5" />
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            <div className="absolute flex justify-center">
                                <Link className='flex items-center' to="/">
                                    <img
                                        className='w-auto h-8'
                                        src={JikingLogo}
                                        alt="Jiking"
                                    />
                                    <h1 className='hidden sm:block ms-2 text-2xl font-semibold text-gray-900 dark:text-white'>Jiking</h1>
                                </Link>
                            </div>

                            <div className="flex justify-end flex-1 items-center">
                                <nav className="hidden sm:block space-x-4">
                                    {navigation.map((item, index) => (
                                        <NavLink
                                            key={index}
                                            to={item.to}
                                            className={classNames(
                                                'text-gray-200 hover:bg-lime-600 hover:text-white rounded-md px-3 py-2 text-base font-medium',
                                                activeLink === index ? 'bg-lime-500 text-gray-900' : ''
                                            )}
                                            onClick={() => handleNavLinkClick(index)}
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3">
                            {navigation.map((item, index) => (
                                // Navlink erstellen, darin dann den Button erstellen
                                <NavLink
                                    key={index}
                                    to={item.to}
                                >
                                    <Disclosure.Button
                                        as="span" // Verwenden Sie 'span', da 'button' innerhalb von 'a' möglicherweise unzulässig ist
                                        className={classNames(
                                            'mt-2 text-gray-200 hover:bg-lime-600 hover:text-white block rounded-md px-3 py-2 text-base font-medium',
                                            activeLink === index ? 'bg-lime-500 text-gray-900' : ''
                                        )}
                                        onClick={() => handleNavLinkClick(index)}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
