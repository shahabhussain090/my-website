import React from "react";

const Contact = () => {
  return (
    <div className=" md:flex block  justify-between md:mx-24 mx-4 mt-32">
      {/* left */}
      <div className=" md:w-[45%]">
        <h1 className=" text-[40px] font-bold">
          Have Something To Ask? Get A Free Quote Now!
        </h1>
        <p className=" text-[#777986] text-[20px] font-medium mt-7">
          Reach out to us and let's start a conversation. We're here to answer
          your questions, provide guidance, and offer our exceptional service
          solutions. Your needs, our priority
        </p>
      </div>

      {/* right */}
      <div className=" flex flex-col gap-3 md:w-[50%]">
        <input className=" outline-[#14A2F1] " type="name" placeholder="name" />
        <input className="outline-[#14A2F1]" type="email" placeholder="Email Address" />
        <textarea className="outline-[#14A2F1]" name="text" placeholder="Message" rows="6"></textarea>
        <div>
          <button className=" bg-[#14A2F1] py-3 px-6 hover:bg-[#4889ac]  text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
