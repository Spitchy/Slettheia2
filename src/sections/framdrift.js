import Link from "next/link";
import React from "react";
import { Progress } from "theme-ui";

function UpdatedDaysLeft() {
  return <div>{new Date().getFullYear() - 2017}</div>;
}

function framdrift({
  innsamlet,
  prosent,
  totalsum,
  dagerigjen,
  oppdatertsist,
}) {
  return (
    <div
      id="framdrift"
      className="w-full h-auto max-w-[1440px] mx-auto bg-[#FFFFFF] shadow-2xl shadow-gray-100 rounded-lg p-4 mb-32"
    >
      <div className="flex flex-col mx-auto mt-20 mb-16">
        <div className="mx-4 my-4 text-2xl font-light tracking-widest uppercase md:mx-10 lg:mx-24">
          <p>Framdrift</p>
        </div>
        {/*SUM OG TOTAL STOR*/}
        <div className="flex-row items-center justify-between hidden mx-10 my-4 lg:mx-24 md:flex">
          <div className="">
            <h1 className="text-[#A29BFE] text-6xl font-bold">
              Kr {innsamlet},-
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A29BFE] text-lg font-semibold">{prosent}%</p>
            <p>av målet møtt</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A29BFE] text-lg font-semibold">
              Kr {totalsum},-
            </p>
            <p>Av totalen gjenstår</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A29BFE] text-lg font-semibold">{dagerigjen}</p>
            <p>Dager igjen</p>
          </div>
          <Link href="/#innsamling">
            <button className="p-4 bg-[#A29BFE] hidden lg:block text-white rounded-md">
              Doner her
            </button>
          </Link>
        </div>
        {/*SUM OG TOTAL LITEN*/}
        <div className="flex flex-col items-start justify-center mx-4 my-4 md:mx-10 lg:mx-24 md:hidden">
          <div className="">
            <h1 className="text-[#A29BFE] text-6xl font-bold mb-2">
              Kr {innsamlet},-
            </h1>
          </div>
          <div className="flex flex-row">
            <p className="text-[#A29BFE] text-lg font-semibold mr-2">
              {prosent}%
            </p>
            <p>Av målet møtt</p>
          </div>
          <div className="flex flex-row">
            <p className="text-[#A29BFE] text-lg font-semibold mr-2">
              Kr {totalsum},-
            </p>
            <p>Av totalen gjenstår</p>
          </div>
          <div className="flex flex-row">
            <p className="text-[#A29BFE] text-lg font-semibold mr-2">
              {dagerigjen}
            </p>
            <p>Dager igjen</p>
          </div>
          <Link href="/#om">
            <button className="p-4 bg-[#A29BFE] hidden lg:block text-white rounded-md">
              Doner her
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center w-full px-4 mx-auto md:px-10 lg:px-20">
          <Progress max={1} value={0 / 228500} sx={styles.progress}></Progress>
          {/*<div className="p-8 mx-10 bg-gray-400 rounded-full"></div>*/}
        </div>
        <div className="flex justify-start mx-4 md:justify-end md:mx-10 lg:mx-24">
          <p className="font-light text-gray-400 text-md">
            Sist oppdatert: {oppdatertsist}
          </p>
        </div>
        <div className="flex justify-start mx-4 my-4 md:justify-end md:mx-10 lg:mx-24">
          <Link href="/#om">
            <button className="p-4 bg-[#A29BFE] lg:hidden text-white rounded-md">
              Doner her
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center mx-auto mb-20">
        <div className="flex flex-row justify-between mx-4 my-4 md:mx-16 lg:mx-44">
          <p className="text-lg underline">Pristilbud: (alle tall inkl. mva)</p>
        </div>
        <div className="flex flex-row justify-between mx-4 md:mx-16 lg:mx-44">
          <p className="text-lg font-bold">Trampolinepark</p>
          <p className="text-lg font-bold">Kr. 372.000,-</p>
        </div>
        <div className="flex flex-row justify-between mx-4 md:mx-16 lg:mx-44">
          <p className="text-lg">Finansiering:</p>
        </div>
        <div className="flex flex-row justify-between mx-4 md:mx-16 lg:mx-44">
          <p className="text-lg text-red-800">- Tippemidler</p>
          <p className="text-lg text-red-800">- Kr 186.000,-</p>
        </div>
        <div className="flex flex-row justify-between mx-4 md:mx-16 lg:mx-44">
          <p className="text-lg">Skolens Andel</p>
          <p className="text-lg">Kr 186.000,-</p>
        </div>
        <div>
          <br></br>
          <br></br>
        </div>
        <div className="flex flex-row justify-between mx-4 md:mx-16 lg:mx-44">
          <p className="text-lg font-bold">Basketstativ</p>
          <p className="text-lg font-bold">Kr. 85.000,-</p>
        </div>
        <div className="flex flex-row justify-between mx-4 md:mx-16 lg:mx-44">
          <p className="text-lg">Finansiering:</p>
        </div>
        <div className="flex flex-row justify-between mx-4 md:mx-16 lg:mx-44">
          <p className="text-lg text-red-800">- Tippemidler</p>
          <p className="text-lg text-red-800">- Kr 42.500,-</p>
        </div>
        <div className="flex flex-row justify-between mx-4 md:mx-16 lg:mx-44">
          <p className="text-lg">Skolens Andel</p>
          <p className="text-lg">Kr 42.500,-</p>
        </div>
        <div className="flex flex-row justify-between mx-4 my-4 md:mx-16 lg:mx-44">
          <p className="text-lg font-bold">Totalt</p>
          <p className="text-lg font-bold">Kr. 228.500,-</p>
        </div>
      </div>
    </div>
  );
}

framdrift.defaultProps = {
  innsamlet: "0",
  prosent: "0",
  totalsum: "228 500",
  dagerigjen: "60",
  oppdatertsist: "18.11.2022 - 12:53",
  /* husk å legg inn på value på progress også! */
};

export default framdrift;

const styles = {
  progress: {
    backgroundColor: "#C0C0C0",
    color: "#A29BFE",
    height: 32,
    mr: [],
    ml: [],
    mt: [2],
    mb: [2],
  },
};
