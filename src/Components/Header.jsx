import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../Images/labour-master-logo.png';
import './style.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiPhoneCall as ContactUs} from "react-icons/fi";


const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '/about-us/', current: false },
  { name: 'Job Seekers', href: '/job-seekers/', current: false },
  { name: 'Employers', href: '/employers/', current: false },
  // { name: 'Our Services', href: '/our-services/', current: false },
  { name: 'Contact Us', href: '/contact-us/', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(100);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY && mobileMenuOpen === false) {
      setShowHeader(false);
    } else if(window.scrollY < lastScrollY && mobileMenuOpen === false) {
      setShowHeader(true); 
    }
    else{
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
    if (window.scrollY > 100) {

      const myHeader = document.getElementById('mainHeader');
      myHeader.style.boxShadow = '0px 0px 10px #041132';
  } else if(window.scrollY <= 100 ){
      const myHeader = document.getElementById('mainHeader');
      myHeader.style.boxShadow = '0px 0px 6px #041132';
  }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    window.addEventListener('click', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  });
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  return (
    <Disclosure as="nav" className={`bg-zinc-900 header sticky-header ${showHeader ? 'visible' : 'hidden'}`}>
      <div
        className={`w-full py-4 px-0 sm:px-10 lg:px-8 lg:py-4 `}
        id="mainHeader"
      >

        <div className="relative flex h-16 items-center justify-center">

          {/* Mobile menu opening icons */}
          <div className="absolute right-12 flex items-center lg:hidden">
            <DisclosureButton className="group absolute inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white xl:hidden">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="mobile-menu-icon block h-6 w-6 group-data-[open]:hidden" onClick={() => setMobileMenuOpen(true)}/>
              <XMarkIcon aria-hidden="true" className="mobile-menu-icon hidden h-6 w-6 group-data-[open]:block" onClick={ () => setMobileMenuOpen(false)} />
            </DisclosureButton>
          </div>

          {/* Logo and Menu */}
          <div className="flex flex-1 items-center justify-start lg:items-stretch lg:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Labour Master" src={Logo} className="h-16 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:ml-6 lg:flex lg:items-center">
              <div className="flex flex-row space-x-2">
              <div className="hidden lg:mx-6 lg:flex lg:items-center">
            <div className="flex space-x-4">
              {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                location.pathname === item.href
                ? 'active-background text-white text-[1.1vw] tracking-wider uppercase tracking-wider font-semibold border-none'
                : 'text-gray-300 tracking-wide text-[1.1vw] tracking-wider uppercase hover:bg-gray-700 font-medium hover:text-white',
                  'rounded-md px-3 py-2 font-medium text-[1.1vw] tracking-wider uppercase font-medium',)}>
                      {item.name}
              </Link>))}
            </div>
          </div>
              </div>
            </div>

            <div className="hidden lg:ml-6 lg:flex lg:items-center">
              <div className="flex flex-row space-x-2">
                  <ContactUs className='text-[3.0vw] text-[var(--golden-color)]'/>
                  <div className='flex flex-col'>
                    <h4 className='text-[var(--white-color)] leading-4 text-[1vw] mb-0 p-0'>Call Us</h4>
                    <h3 className='text-[var(--golden-color)] font-[600] text-[1.4vw] leading-7 mt-0 p-0'><Link to={`tel:+1234567890`}>(012) 345 6789</Link></h3>
                  </div>
              </div>
            </div>


          </div>
        </div>
 
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className={`disclosure-panel lg:hidden` }>
        <div className="space-y-1 px-4 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as={Link}
            to={item.href}
            className={classNames(
              location.pathname === item.href
                ? 'active-background tracking-wider text-white'
                : 'text-gray-300 tracking-wide hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )}
          >
          {item.name}
        </DisclosureButton>
        ))}
        </div>
      </DisclosurePanel>

    </Disclosure>
  );
}
