import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import Share from './Share';
import useCopyToClipboard from './useCopyToClipboard';


const Contacts = (props) => {
  const [anim, setAnim] = useState(true);

  const handleAnim = (e) => {
    console.log('prevent')
    e.preventDefault()
  };

    const [ value, copy] = useCopyToClipboard();
  return (
    <>
    
      <Link
        to='/contact'
        id={props.id}
        href={props.link}
        title={props.subtext}
        data-tip={props.subtext}
        className={` overflow-clip rounded-lg flex justify-center h-[76px] ${
          anim ? 'focus:bg-[#FCFCFD]' : 'focus:bg-[#98A2B3] '
        } bg-[#EAECF0]  hover:bg-[#D0D5DD]  `}
        rel="noreferrer"
      >
        {' '}
        {
          <div className="flex items-center h-full overflow-clip w-full gap-3 justify-center">
            <div
              
              className={`flex justify-end   h-full  bg-green-300 gap-1 `}
            >
              <span className={`text-[#101828] flex justify-center bg-gray-400 `}>
                <span className="text2 font-bold"> {props.name}</span>
              </span>
            </div>
            <div
              
              className="justify-self-start   f-full"
            > 
              <Share
                onClick={(e)=>{
                  console.log(e)
                  copy(props.link)
                }}
              />
            </div>
          </div>
        }
      </Link>
      <ReactTooltip
        place="bottom"
        multiline={true}
        clickable={true}
        effect="solid"
      />
    </>
  );
};

export default Contacts;
