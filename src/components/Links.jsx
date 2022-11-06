import React, { useState, useRef } from "react";
import ReactTooltip from "react-tooltip";
import Share from "./Share";
import useCopyToClipboard from "./useCopyToClipboard";

const Links = (props) => {
  const [anim, setAnim] = useState(false);
  const [clicked, setClicked] = useState(false);
  const ref = useRef(null);

  const clickHandle = (event) => {
    event.stopPropagation();
    if (!clicked) {
      event.preventDefault();
      setClicked(() => !clicked);
    }else{
      
      setClicked(() => !clicked)
      setTimeout(setAnim(!anim),7000)
    }
  };

  


  const [value, copy] = useCopyToClipboard();

  return (
    <>
      <a
        id={props.id}
        href={props.link}
        title={props.subtext}
        target='_blank'
        onMouseEnter={() => setAnim(true)}
        onMouseLeave={() => setAnim(false)}
        data-tip={props.subtext}
        className={` overflow-clip rounded-lg flex justify-center h-[76px] ${
          anim ? "focus:bg-[#FCFCFD]" : "focus:bg-[#98A2B3] "
        } bg-[#EAECF0]  hover:bg-[#D0D5DD]  `}
        rel='noreferrer'>
        {" "}
        {
          <div
            className={`flex items-center h-full overflow-clip w-full gap-3 justify-center active:transform active:transition active:duration-500 active-translate-x-4 ${
              anim && "transform transition duration-500 -translate-x-4"
            }`}>
            <div
              className={`flex justify-center  text-[#101828]  text2 font-bold  items-center  h-full  gap-1 `}>
              {props.name}
            </div>
            <div
              id='share'
              ref={ref}
              onClick={(e) => {
                clickHandle(e);
                setClicked(() => true);
              }}
              className={`'justify-self-start' ${anim ? "block" : "hidden"}`}>
              <Share
                onClick={() => {
                  copy(props.link);
                }}
              />
            </div>
          </div>
        }
      </a>
      <ReactTooltip
        place='bottom'
        multiline={true}
        clickable={true}
        effect='solid'
      />
    </>
  );
};

export default Links;
