import React from "react";

import Contacts from "../components/Contact";
import Footer from "../components/Footer";
import Links from "../components/Links";
import Profile from "../components/Profile";

export const details = [
  {
    id: "btn__zuri",
    link: "https://training.zuri.team/",
    name: "Zuri Team",
  },
  {
    id: "books",
    link: "http://books.zuri.team/",
    name: "Zuri Books",
    subtext: "This is where you find books about design and coding",
  },
  {
    id: "book__python",
    link: "https://books.zuri.team/python-for-beginners?ref_id=zykson",
    name: "Python Books",
    subtext: "You want to level up your python skills? click here",
  },
  {
    id: "pitch",
    link: "https://background.zuri.team",
    name: "Background Check for Coders",
    subtext:
      "Tired of being catfished? trying to fish out impersonators? here's the best tool online",
  },
  {
    id: "book__design",
    link: "https://books.zuri.team/design-rules",
    name: "Book Design",
    subtext: "Get free design books offered by Zuri",
  },
];

const HNG = () => {
  return (
    <div className='flex flex-col gap-4 px-4 md:px-[10%] h-full  justify-between'>
      <Profile />
      <div className='flex flex-col gap-3 justify-between'>
        <Links id='twitter' link='https://twitter.com/zykson' name='Zykson' />

        {details.map((detail) => {
          return (
            <Links
              key={detail.id}
              id={detail.id}
              name={detail.name}
              link={detail.link}
              subtext={detail.subtext}
            />
          );
        })}
        <Contacts id={"contact"} name={"Contact Me"} />
       
      </div> 
      <Footer/>
    </div>
  );
};

export default HNG;
