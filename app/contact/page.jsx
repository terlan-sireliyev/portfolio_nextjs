"use client";
import React, { useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Page = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, from_email, message } = formData;
    if (!from_name || !from_email || !message) {
      setError("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }
    setError("");

    emailjs
      .sendForm(
        "service_810xcvr",
        "template_280qaf4",
        form.current,
        "bIeMVkO1hN21lcoG7"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      {/* Contact Information */}
      <div className="bg-leftBgOne w-[full] h-[290px] max-md:h-[290px] p-4 rounded-border5">
        <h1 className="text-leftTextColorWhite font-bold py-2 mt-4">
          Əlaqə məlumatı
        </h1>
        <div className="grid grid-cols-1 max-md:grid-cols-1 gap-4 mt-4">
          <div className="bg-mainBgColor border border-leftTextColorGreen rounded-border15 p-6 flex flex-col gap-4">
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

      {/* Contact Form */}
      <div className="bg-mainBgColor mt-12 p-4 rounded-border5">
        <h2 className="text-leftTextColorWhite font-bold pb-4">Müraciət Formu</h2>

        <form ref={form} onSubmit={sendEmail}>
          {error && (
            <p className="text-leftTextColorWhite text-center mb-4">{error}</p>
          )}
          <div className="bg-leftBgOne border border-leftTextColorGreen flex rounded-border5 py-4 flex-col gap-4 items-center justify-center">
            <div className="w-[50%] max-lg:w-full my-2 p-2">
              <input
                className="w-full py-2 px-[8px] rounded-border5 bg-mainBgColor text-leftTextColorWhite"
                type="text"
                name="from_name"
                placeholder="Adınız"
                value={formData.from_name}
                onChange={handleChange}
              />
            </div>
            <div className="w-[50%] max-lg:w-full my-2 p-2">
              <input
                className="w-full py-2 px-[8px] rounded-border5 bg-mainBgColor text-leftTextColorWhite"
                type="email"
                name="from_email"
                placeholder="Email"
                value={formData.from_email}
                onChange={handleChange}
              />
            </div>
            <div className="w-[50%] max-lg:w-full my-2 p-2">
              <textarea
                name="message"
                placeholder="Mesajınız"
                className="w-full py-2 px-[8px] rounded-border5 bg-mainBgColor text-leftTextColorWhite"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="w-[50%] max-lg:w-full my-2 p-2">
              <button
                type="submit"
                className="w-full p-2 rounded-border5 bg-leftTextColorGreen"
              >
                Göndər
              </button>
            </div>
          </div>
        </form>

        <div className="mt-4 max-xs:bg-leftTextColorRed p-4 bg-leftBgOne border border-leftTextColorGreen rounded-border5 m-auto">
          <div className="text-leftTextColorGray py-2 pb-[10px] border-b-2 border-leftTextColorGreen text-center max-sm:text-12">
            C 2024 bütün hüquqlar qorunur
          </div>
          <div className="flex justify-between rounded-border5 py-2 pt-[10px]">
            <div className="text-leftTextColorGray max-sm:text-12">
              By Tharlan
            </div>
            <div className="text-leftTextColorGray max-sm:text-12 flex items-center gap-2">
              <SiGmail />
              <Link href="https://mail.google.com/mail/u/1/#inbox">
                sireliyevterlan95@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
