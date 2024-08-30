import React, { useEffect, useState } from 'react';
// import { CiSaveUp1} from "react-icons/ci";
import { LuArrowUpRightFromCircle as ScrollUp } from "react-icons/lu";


const JumpToTop = () => {
  const [lastScrollY, setLastScrollY] = useState(100);
  const [showBtn, setBtnDisplay] = useState(false);
  const BtnCall = () => {
    setLastScrollY(window.scrollY);
    if (window.scrollY > 400) {
      setBtnDisplay(true);
    } else {
      setBtnDisplay(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', BtnCall);
    return () => {
      window.removeEventListener('scroll', BtnCall);
    };
  }, [lastScrollY]);

 
  return (
    <>
      <div
        className={`fixed p-[.45%] rounded-[100px] bottom-[5%] right-[2%] text-[var(--dark-golden-color)] bg-[#2b2b2b47] rotate-[-45deg] ${showBtn ? 'block' : 'hidden'}`}
      >
        <ScrollUp className='text-[1.8vw] cursor-pointer ' />
      </div>
    </>
  );
};

export default JumpToTop;
