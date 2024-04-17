import React from "react";

const SignIn = () => {
  return (
    <div>
      <div className="w-full relative  flex items-center justify-center  opacity-85">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="shadow-2xl border border-gray-400 flex flex-col sm:w-[400px] w-full gap-4 absolute top-2 rounded-lg mt-20"
        >
          <label className="text-3xl font-semibold pt-6 mx-4">Sing in</label>
          {/* {!isSingIn && (
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="bg-transparent text-white border p-4 mx-4 rounded"
            />
          )} */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="bg-transparent text-white border border-gray-400 p-4 mx-4 rounded"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="bg-transparent text-white border p-4 mx-4 rounded border-gray-400"
          />
          <p className="text-green-600 text-sm mx-4"></p>
          <button className="bg-green-600 rounded text-xl font-semibold p-2 mx-4 text-white hover:bg-green-700 opacity-100">
            Sing in
          </button>
          <div className="flex gap-2 text-white p-2 mx-4">
            <p className="">New to Netflix?</p>
            <p className="font-semibold cursor-pointer hover:text-gray-400">
              Sign up Now
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
