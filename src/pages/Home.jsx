import React from "react";
import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setLink(text);
  };

  return (
    <div>
      <div>
        <form>
          <label for="search" class="mb-2 text-sm font-medium text-primary">
            Enter text
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-secondary-content rounded-lg bg-primary-content focus-none"
              placeholder="text"
              onChange={handleChange}
              required
            />

            <div
              class="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-secondary focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
              onClick={handleClick}
            >
              Create
            </div>
          </div>
        </form>
      </div>

      <div className="card w-60 bg-base-100 shadow-xl mt-3">
        <figure className="px-10 pt-10">
          <img
            src={`http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=100x100`}
            alt="Shoes"
            className="rounded-xl w-[150px] h-[150px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Generated QR</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
