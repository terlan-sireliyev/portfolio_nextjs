// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { FaEnvelope, FaHome, FaSuitcase } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";

// const Mobil_Navbar = ({ isOpen, setIsOpen, toggleMenu }) => {
//   return (
//     <div
//       className={`bg-leftBgTwo  fixed h-screen z-30  top-0 right-0 w-[500px] transition-transform duration-700 ease-in-out ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <button className="m-5">
//         <IoMdClose onClick={toggleMenu} />
//       </button>
//       <div className="w-[30%] m-auto ">
//         <div className="flex flex-col h-screen justify-center">
//           <ul>
//             <li className="mt-4 hover:text-leftTextColorWhite transition-all duration-100">
//               <Link href={"/"} className="flex items-center space-x-3  ">
//                 <FaHome size={22} />
//                 <span className="transition-all duration-100 group-hover:text-xl">
//                   Home
//                 </span>
//               </Link>
//             </li>
//             <li className="mt-4 hover:text-leftTextColorWhite transition-all duration-100">
//               <Link
//                 href={"/contact"}
//                 className="flex items-center space-x-3 transition-all duration-300 hover:text-indigo-200"
//               >
//                 <FaEnvelope size={22} />
//                 <span className="transition-all duration-100 group-hover:text-xl">
//                   Contact
//                 </span>
//               </Link>
//             </li>
//             <li className="mt-4 hover:text-leftTextColorWhite transition-all duration-100">
//               <Link
//                 href={"/portfolio"}
//                 className="flex items-center space-x-3 transition-all duration-300 hover:text-indigo-200"
//               >
//                 <FaSuitcase size={22} />
//                 <span className="transition-all duration-100 group-hover:text-xl">
//                   Portfolio
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mobil_Navbar;
