import React from "react";
import members from "../data/members";
import Card from "./Card";

function Cards() {
  return (
    <>
      <section
        style={{ fontFamily: "Montserrat" }}
        className=" bg-[#071e34] flex font-medium items-center mx-auto justify-start p-10 flex-wrap"
      >
        {members.map((member, index) => {
          return <Card key={index} member={member} />;
        })}
      </section>
    </>
  );
}

export default Cards;
