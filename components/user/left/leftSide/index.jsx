"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Circle from "../circle/index";
import leftSideStyle from "./leftSide.module.css";
import LineProgress from "../line/index";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from "@mui/icons-material/Download";
import Sliks from "../skils/index";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { Information } from "../InformationMock";
import { InformationPerson } from "./Mock";

const Index = ({ toggleMenu }) => {
  const [percentage, setPercentage] = useState(0);
  const [percentageRus, setpercentageRus] = useState(0);
  const [percentageTurk, setPercentageTurk] = useState(0);
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - percentage / 100);
  const dashOffsetRus = circumference * (1 - percentageRus / 100);
  const dashOffsetTurk = circumference * (1 - percentageTurk / 100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 30) {
        setPercentage((prevPercentage) => prevPercentage + 1);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [percentage]);

  useEffect(() => {
    const intervalRus = setInterval(() => {
      if (percentageRus < 50) {
        setpercentageRus((prevPercentage) => prevPercentage + 1);
      }
    }, 10);
    return () => clearInterval(intervalRus);
  }, [percentageRus]);

  useEffect(() => {
    const intervalTurk = setInterval(() => {
      if (percentageTurk < 80) {
        setPercentageTurk((prevPercentage) => prevPercentage + 1);
      }
    }, 10);
    return () => clearInterval(intervalTurk);
  }, [percentageTurk]);

  // Line progress start
  const [filled, setFilled] = useState(0);
  const [filled1, setFilled1] = useState(0);
  const [filled2, setFilled2] = useState(0);

  useEffect(() => {
    if (filled < 80) {
      setTimeout(() => {
        setFilled((prev) => (prev += 1));
      }, 10);
    }
  }, [filled]);

  useEffect(() => {
    if (filled1 < 50) {
      setTimeout(() => {
        setFilled1((prev) => (prev += 1));
      }, 10);
    }
  }, [filled1]);

  useEffect(() => {
    if (filled2 < 60) {
      setTimeout(() => {
        setFilled2((prev) => (prev += 1));
      }, 10);
    }
  }, [filled2]);

  return (
    <>

      <div className="  relative">
        <div className="bg-leftBgTwo flex items-center flex-col fixed top-0 z-50 w-[22%] max-lg:w-[90%] h-[660px] max-lg:h-screen max-lg:rounded-borderzero rounded-leftMainBorder  overflow-y-scroll [&::-webkit-scrollbar]:hidden">
          <div className="fixed  bg-leftBgTwo z-50 w-[22%] max-lg:w-[90%] top-0">
            {InformationPerson.map((item) => (
              <div key={item.id} className="flex flex-col justify-center items-center pb-4 relative">
                <div className="absolute top-4 right-4 hidden max-lg:block">
                  <button onClick={toggleMenu}>
                    <IoClose />
                  </button>
                </div>
                <div className="rounded-fiftyPercent w-24 h-24">
                  <Link href={"/"}>
                    <Image
                      src="/img/img1.jpg"
                      width={100}
                      className="rounded-fiftyPercent m-auto pt-2 h-full object-cover"
                      height={100}
                      alt="Picture of the author"
                    />
                  </Link>
                </div>
                <h1 className="text-leftTextColorWhite text-14 font-bold mt-4">
                  {item.name} {item.surname}
                </h1>
                <p className="text-leftTextColorGray max-sm1:px-[4px] text-12 mt-2 text-center">
                  {item.specialty}
                </p>
              </div>
            ))}
          </div>
          {/* 2ci hisse */}
          <div className={`${leftSideStyle.progScroll} mt-[190px]`}>
            <div className="bg-red-600 bg-mainBgColor w-full py-4">
              {
                Information.map((item) => (
                  <div key={item.id} className="flex justify-between mt-2 px-4">
                    <span className="text-leftTextColorWhite text-12">{item.title1}</span>
                    <span className="text-leftTextColorGray text-12">{item.title2}</span>
                  </div>
                ))
              }


            </div>
            <div className=" bg-mainBgColor text-leftTextColorWhite pb-4">
              <div className="text-14 font-bold max-lg:ml-[17px] ml-[17px]">
                Dil bilikləri
              </div>
              <div className="flex">
                <Circle
                  radius={radius}
                  percentage={percentage}
                  circumference={circumference}
                  dashOffset={dashOffset}
                  color={"#007C00"}
                />
                <Circle
                  radius={radius}
                  percentage={percentageRus}
                  circumference={circumference}
                  dashOffset={dashOffsetRus}
                  color={"#007C00"}
                />
                <Circle
                  radius={radius}
                  percentage={percentageTurk}
                  circumference={circumference}
                  dashOffset={dashOffsetTurk}
                  color={"#007C00"}
                />
              </div>
              <div className="flex justify-evenly ml-[-10px] ">
                <div className=" text-leftTextColorWhite p-2 max-sm2:ml-2 text-12">
                  English
                </div>
                <div className=" text-leftTextColorWhite p-2 max-sm2:ml-3 text-12">
                  Russian
                </div>
                <div className=" text-leftTextColorWhite p-2 max-sm2:ml-6 text-12 ml-4">
                  Turk
                </div>
              </div>
            </div>
            <div className="bg-mainBgColor border border-t-leftTextColorGray max-lg:border-none  py-4 ">
              <div className="text-leftTextColorWhite max-lg:ml-[12px] font-bold text-14 ml-[17px]">
                Bacarıqlar
              </div>

              <div>
                <LineProgress
                  filled={filled}
                  title={"HTML/CSS"}
                  color={"#1FDF64"}
                />
                <LineProgress
                  filled={filled1}
                  title={"JavaScript"}
                  color={"#1FDF64"}
                />
                <LineProgress
                  filled={filled2}
                  title={"React/Next"}
                  color={"#1FDF64"}
                />
              </div>
            </div>
            <div className="bg-mainBgColor border border-t-leftTextColorGray max-lg:border-none py-4">
              <Sliks />
            </div>
            <div className="bg-mainBgColor  border border-t-leftTextColorGray max-lg:border-none py-4">
              <span className="text-leftTextColorWhite cursor-pointer ml-[17px] text-12 max-lg:ml-[22px]">
                CV Yüklə(Azərbaycan dilində)
              </span>
              <a href="/pf/Tərlan-Şirəliyev-CV-az.pdf" download={"Resume"} className="text-leftTextColorWhite cursor-pointer text-12">
                <DownloadIcon />
              </a>
            </div>
            <div className="bg-mainBgColor  border border-t-leftTextColorGray max-lg:border-none py-4">
              <span className="text-leftTextColorWhite cursor-pointer ml-[17px] text-12 max-lg:ml-[22px]">
                CV Yüklə(İngilis dilində)
              </span>
              <a href="/pf/Tarlan-Shiraliyev-CV.pdf" download={"Resume"} className="text-leftTextColorWhite cursor-pointer text-12">
                <DownloadIcon />
              </a>
            </div>
          </div>

          <div className="flex bg-leftBgOne w-full justify-center gap-3 mt-[-15px]  p-3">
            <a
              href="https://github.com/terlan-sireliyev?tab=repositories"
              className="text-leftTextColorWhite hover:text-lineProgressColor rounded-fiftyPercent"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/terlan-sireliyev-820a44258/"
              className="text-leftTextColorWhite hover:text-lineProgressColor"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-leftTextColorWhite hover:text-lineProgressColor"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
