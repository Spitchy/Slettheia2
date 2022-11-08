import React from "react";

function innsamling1(props) {
  const innsamlet = props.innsamlet;
  const prosent = props.prosent;
  return (
    <div
      id="framdrift"
      className="w-full h-auto max-w-[1440px] mx-auto bg-[#FFFFFF] shadow-2xl shadow-gray-100 rounded-lg p-4"
    >
      <div className="flex flex-col mx-auto my-20">
        <div className="tracking-widest uppercase text-2xl my-4 mx-20 font-light">
          <p>FRAMDRIFT</p>
        </div>
        <div className="flex flex-row my-4 justify-between mx-20 items-center">
          <div className="">
            <h1 className="text-[#A29BFE] text-6xl font-bold">
              <UpdatedSum />
              {props.innsamlet}
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A29BFE] text-lg font-semibold">
              <UpdatedPercent />
              {props.prosent}
            </p>
            <p>av målet møtt</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A29BFE] text-lg font-semibold">
              <UpdatedTotal />
            </p>
            <p>gjenstår</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A29BFE] text-lg font-semibold">
              <UpdatedDaysLeft />
            </p>
            <p>Dager igjen</p>
          </div>
          <Link href="/#om">
            <button className="p-4 bg-[#A29BFE] text-white rounded-md">
              Doner her
            </button>
          </Link>
        </div>
        <div className="w-full mx-auto px-20 flex justify-center items-center">
          <Progress max={1} value={0 / 228500} sx={styles.progress}></Progress>
          {/*<div className="p-8 mx-10 bg-gray-400 rounded-full"></div>*/}
        </div>
        <div className="flex justify-end mx-20">
          <p className="font-light text-md text-gray-400">
            <UpdatedLast />
          </p>
        </div>
      </div>
      <div className="flex flex-row my-40">
        <div className="">
          <p>Pristilbud: (alle tall inkl. mva)</p>
          <p>Trampolinepark Kr. 372.000,-</p>
          <p>- Tippemidler Kr 186.000,-</p>
          <p>Skolens Andel Kr 186.000,-</p>
        </div>
      </div>
    </div>
  );
}

export default innsamling1;

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
