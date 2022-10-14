import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Card({ member }) {
  return (
    <>
      <section className="w-64 bg-[#20354b] rounded-2xl px-8 py-6 mx-5 my-3 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">Bytewise Member</span>
        </div>
        <div className="mt-6 w-fit mx-auto">
          <img
            src={member.img}
            className="rounded-full w-28 "
            alt="profile picture"
          />
        </div>
        <div className="mt-8 ">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            {member.firstname} <br /> {member.lastname}
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5">
          {member.team} Fellow
        </p>

        <div className="flex justify-start space-x-4 mt-5">
          <div className="bg-white p-1 rounded-full">
            <a href={member.socialUrls.facebook} target="_blank">
              <BsFacebook color="#3b5998" />
            </a>
          </div>
          <div className="bg-white p-1 rounded-full">
            <a href={member.socialUrls.linkedIn} target="_blank">
              <BsLinkedin color="#0072b1" />
            </a>
          </div>
          <div className="bg-white p-1 rounded-full">
            <a href={member.socialUrls.instagram} target="_blank">
              <AiFillInstagram color="#3f729b" />
            </a>
          </div>
        </div>

        <div className="h-0.5 w-full bg-indigo-500 mt-5 rounded-full"></div>
        <div className="mt-3 text-white text-sm">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            City
          </span>
          <span>{member.city}</span>
        </div>
      </section>
    </>
  );
}

export default Card;
