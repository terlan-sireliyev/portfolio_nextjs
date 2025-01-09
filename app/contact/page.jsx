"use client"; 
import React, { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from '@emailjs/browser';
import Link from "next/link";

const Page = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_810xcvr', 'template_280qaf4', form.current, {
      publicKey: 'bIeMVkO1hN21lcoG7',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.error('FAILED...', error.text);
      }
    );}

  return (
    <div>
      <div className="bg-leftBgOne w-[full] h-[290px]  max-md:h-[290px]  p-4 rounded-border5">
        <h1 className="text-leftTextColorWhite font-bold py-2 mt-4">
        Əlaqə məlumatı
        </h1>
        <div className="grid grid-cols-1 max-md:grid-cols-1 gap-4 mt-4">
          <div className="bg-mainBgColor border border-leftTextColorGreen  rounded-border15 p-6 flex flex-col gap-4">
            <div className="flex justify-between text-leftTextColorWhite">
              <p>Gmail:</p>
              <p>sireliyevterlan95@gmail.com</p>
            </div>
            <div className="flex justify-between text-leftTextColorWhite">
              <p>Linkedin:</p>
              <p>terlan-sireliyev</p>
            </div>
            <div className="flex justify-between text-leftTextColorWhite">
              <p>Phone:</p>
              <p>+994-50-836-96-69</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4 bg-mainBgColor border border-leftTextColorGreen rounded-border15 mt-4 p-6">
          <p className="text-15 text-leftTextColorWhite">
            <Link href="https://mail.google.com/mail/u/0/#inbox">
              <SiGmail />
            </Link>
          </p>
          <p className="text-15 text-leftTextColorWhite">
            {/* href="" */}
            <Link href="https://www.linkedin.com/in/terlan-sireliyev-820a44258/">
              <FaLinkedin />
            </Link>
          </p>
          <p className="text-15 text-leftTextColorWhite">
            <Link href="https://github.com/terlan-sireliyev?tab=repositories">
              <FaGithub />
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-mainBgColor mt-12 p-4 rounded-border5">
        <h2 className="text-leftTextColorWhite font-bold pb-4">Müraciət Formu</h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="bg-leftBgOne border border-leftTextColorGreen flex rounded-border5 py-4 flex-col gap-4 items-center justify-center ">
            <div className="w-[50%] max-lg:w-full my-2 p-2">
              <input
                className="w-full  py-2 px-[8px]  rounded-border5 bg-mainBgColor text-leftTextColorWhite"
                type="text"
                name="from_name"
                placeholder="Adınız"
              />
            </div>
            <div className="w-[50%] max-lg:w-full my-2 p-2">
              <input
                className="w-full py-2 px-[8px]  rounded-border5 bg-mainBgColor text-leftTextColorWhite"
                type="email" 
                name="from_email"
                placeholder="Email"
              />
            </div>
            <div className="w-[50%] max-lg:w-full my-2 p-2">
              <textarea
                name="message"
                placeholder="Mesajınız"
                className="w-full  py-2 px-[8px] rounded-border5 bg-mainBgColor text-leftTextColorWhite"
              ></textarea>
            </div>
            <div className="w-[50%] max-lg:w-full my-2 p-2">
              <button className="w-full p-2 rounded-border5 bg-leftTextColorGreen">
                Göndər
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="p-4 ">
        <div className="bg-leftBgOne border border-leftTextColorGreen flex justify-between  rounded-border5 p-2">
          <div className="text-leftTextColorGray max-sm:text-8">
            C 2024 all right reseerved
          </div>
          <div className="text-leftTextColorGray max-sm:text-8">
            Made with by Tharlan
          </div>
          <div className="text-leftTextColorGray max-sm:text-8 flex items-center gap-2">
            <SiGmail />
            sireliyevterlan95@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
