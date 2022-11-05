import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from '../assets/images/me.jpg'

import useCopyToClipboard from './useCopyToClipboard';

const notify = () => {
  toast('Link Copied to Clipboard', {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

const Profile = () => {
  const [active, setActive] = useState(false);
  const [display, setDisplay] = useState(false);
  const [url, setUrl] = useState('');
  const handleClick = () => {
    return setActive(() => !active);
  };
  const handleDisplay = () => {
    return setDisplay(() => !display);
  };
  useEffect(() => {
    setUrl(() => window.location.href);
  });

 
  const [value, copy] = useCopyToClipboard();

  return (
    <div className="">
      <div
        onClick={() => {
          handleClick();
          handleDisplay();
        }}
        className={`h-10 absolute flex right-5 md:right-[20%] top-5 w-10 border-dashed border  cursor-pointer focus:ring-[#F2F4F7] focus:ring-4 ${
          active ? 'bg-[#D0D5DD] border-[#F9FAFB]' : 'border-[#D0D5DD]'
        } rounded-full`}
      >
        <div className="h-5 w-5 md:hidden m-auto ">
          {!display ? (
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99998 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53975 10.4602 9.16666 9.99998 9.16666C9.53974 9.16666 9.16665 9.53975 9.16665 9.99999C9.16665 10.4602 9.53974 10.8333 9.99998 10.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8333 10.8333C16.2935 10.8333 16.6666 10.4602 16.6666 9.99999C16.6666 9.53975 16.2935 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53975 15 9.99999C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.16665 10.8333C4.62688 10.8333 4.99998 10.4602 4.99998 9.99999C4.99998 9.53975 4.62688 9.16666 4.16665 9.16666C3.70641 9.16666 3.33331 9.53975 3.33331 9.99999C3.33331 10.4602 3.70641 10.8333 4.16665 10.8333Z"
                stroke="#98A2B3"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <div className="h-[14.02px] w-[15.19px]  m-auto ">
              <svg
                onClick={() => {
                  // eslint-disable-next-line no-sequences
                  copy(url);
                  notify();
                  setTimeout(handleDisplay, 7000);
                }}
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z"
                  stroke="#667085"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="h-[14.02px] w-[15.19px] hidden md:block m-auto ">
          <svg
            onClick={() => {
              // eslint-disable-next-line no-sequences
              copy(url);
              notify();
            }}
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="h-[15.625vh] flex flex-col gap-6 justify-between items-center">
        <div
        style={{
          backgroundImage:`url(${Image})`
        }}
          id="profile__img"
          className={`focus:border-[#EBE9FE] focus:border-[5.5px] rounded-full  hover:bg-[#344054BF] bg-cover`}
        >
          <div className="h-[88px] opacity-0 hover:opacity-100  w-[88px] rounded-full hover:bg-[#344054BF] ">
            <div className="px-[34px] pt-[58px]">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7.37722C1 7.0269 1 6.85174 1.01462 6.70421C1.1556 5.28127 2.28127 4.1556 3.70421 4.01462C3.85174 4 4.03636 4 4.40558 4C4.54785 4 4.61899 4 4.67939 3.99634C5.45061 3.94963 6.12595 3.46288 6.41414 2.746C6.43671 2.68986 6.45781 2.62657 6.5 2.5C6.54219 2.37343 6.56329 2.31014 6.58586 2.254C6.87405 1.53712 7.54939 1.05037 8.32061 1.00366C8.38101 1 8.44772 1 8.58114 1H13.4189C13.5523 1 13.619 1 13.6794 1.00366C14.4506 1.05037 15.126 1.53712 15.4141 2.254C15.4367 2.31014 15.4578 2.37343 15.5 2.5C15.5422 2.62657 15.5633 2.68986 15.5859 2.746C15.874 3.46288 16.5494 3.94963 17.3206 3.99634C17.381 4 17.4521 4 17.5944 4C17.9636 4 18.1483 4 18.2958 4.01462C19.7187 4.1556 20.8444 5.28127 20.9854 6.70421C21 6.85174 21 7.0269 21 7.37722V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H5.8C4.11984 20 3.27976 20 2.63803 19.673C2.07354 19.3854 1.6146 18.9265 1.32698 18.362C1 17.7202 1 16.8802 1 15.2V7.37722Z"
                  stroke="#F9FAFB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 15.5C13.2091 15.5 15 13.7091 15 11.5C15 9.29086 13.2091 7.5 11 7.5C8.79086 7.5 7 9.29086 7 11.5C7 13.7091 8.79086 15.5 11 15.5Z"
                  stroke="#F9FAFB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full h-[20%]  text-[#101828] flex justify-center">
          <h3 id="twitter" className="text1">
            Tenu Isaac
          </h3>
          <h3 id="slack" className="text1 screen-reader-text">
            zykson
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
