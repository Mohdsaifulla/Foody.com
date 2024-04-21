import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <hr></hr>
        <div className="flex gap-4 md:flex-row flex-col justify-between  pt-10">
          <h1 className="lg:text-4xl text-2xl">
            For better experience download our app
          </h1>
          <img src="/app_store.png" className="max-w-44" />
          <img src="/play_store.png" className="max-w-44" />
        </div>
      </div>
      <div className="pt-6 pb-8 text-gray-500 font-mono">
        Made with 💟 by saif don't forget to give it ⭐ at github
      </div>
    </div>
  );
};

export default Footer;
