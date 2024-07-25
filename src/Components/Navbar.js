import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Icons/cheerbull-logo.svg";
import play_store from "../assets/Icons/play-store.svg";
import app_store from "../assets/Icons/app-store.svg";
import phone from "../assets/Icons/phone-icon.svg";
import call_back from "../assets/Icons/call-back-icon.svg";
function Navbar() {
  return (
    <section>
      <div className="container hidden xl:block">
        <div className="grid grid-rows-2 grid-flow-col gap-2">
          <div className="row-span-3 ... py-2">
            <img src={logo} />
          </div>
          <div className="col-span-2 ...  bg-[#EDEDED] flex justify-between rounded-b ">
            <div className="py-2 flex gap-4 px-4">
              <div className="flex gap-2 border-r border-customGray px-3">
                <img src={phone} className="h-5 w-8 mt-1" />
                <p className="text-sm font-bold roboto mt-1">1800 2666</p>
              </div>
              <div className="flex gap-1 border-r border-customGray px-3">
                <img src={call_back} className="h-3 w-3 mt-2" />
                <p className="text-sm font-bold roboto mt-1"> Call Back</p>
              </div>
              <p className="text-sm font-bold roboto mt-1">Live Chat</p>
            </div>
            <div className="flex gap-12">
              <button className="px-4 py-2 asap text-sm font-bold text-white bg-[#014579]">
                Become a Partner
              </button>
              <button className="px-4 my-1.5 mr-4 asap text-sm font-bold rounded-lg text-white bg-custom">
                Login/ Register
              </button>
            </div>
          </div>
          <div className="row-span-2 col-span-2 ... flex justify-between  ">
            <div className="flex gap-7 inter text-sm font-semibold items-center">
              <NavLink to="/home"> Home </NavLink>
              <NavLink to="/about"> About Us </NavLink>
              <NavLink to="/product"> Our Products </NavLink>
              <NavLink to="/mutual-funds-sip"> Mutual Funds/SIP </NavLink>
              <NavLink to="/insurance"> Insurance </NavLink>
              <NavLink to="/#">Succession & Will</NavLink>
              <NavLink to="/track-portfolio"> Track Portfolio Free!! </NavLink>
              <NavLink to="/goal-calculators"> Goal Calculators </NavLink>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-[#181818] asap text-sm font-bold">
                Download mobile app -
              </p>
              <img src={play_store} className="h-6 w-6"></img>
              <img src={app_store} className="h-6 w-6"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
