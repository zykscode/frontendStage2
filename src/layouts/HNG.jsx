import React from 'react'
import Footer from '../components/Footer';
import Links from '../components/Links';
import Profile from '../components/Profile';
import { ToastContainer } from 'react-toastify';


export const details = [
    {
      id: 'btn__zuri',
      link: 'https://training.zuri.team/',
      name: 'Zuri Team',
    },
    {
      id: 'books',
      link: 'http://books.zuri.team/',
      name: 'Zuri Books',
      subtext: 'This is where you find books about design and coding',
    },
    {
      id: 'book__python',
      link: 'https://books.zuri.team/python-for-beginners?ref_id=zykson',
      name: 'Python Books',
      subtext: 'You want to level up your python skills? click here',
    },
    {
      id: 'pitch',
      link: 'https://background.zuri.team',
      name: 'Background Check for Coders',
      subtext:
        "Tired of being catfished? trying to fish out impersonators? here's the best tool online",
    },
    {
      id: 'book__design',
      link: 'https://books.zuri.team/design-rules',
      name: 'Book Design',
      subtext: 'Get free design books offered by Zuri',
    },
  ];
  

const HNG = () => {
  return (
    <div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <div className="pt-16 pb-8 flex flex-col gap-6   min-h-screen w-full">
        <div className="flex flex-col gap-8 px-4 md:px-[10%] h-full  justify-between">
          <Profile/>
          <div className="h-full flex flex-col gap-6 justify-between">
            <Links
              id="twitter"
              link="https://twitter.com/zykson"
              name="Zykson"
            />

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
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default HNG