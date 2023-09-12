import React from "react";

export default function Navbar() {
  return (
    <nav className="flex bg-gray-50 rounded-lg justify-between drop-shadow-md mx-auto max-w-[1300px] px-10 py-6">
      <h1>
        <span className="text-[#800080] font-bold text-xl">Letz</span>Learn
      </h1>

      <div className="flex gap-10 l">
        <a>Home</a>
        <a>About us</a>
        <a>Product & Services</a>
        <a>Contact Us</a>
      </div>
    </nav>
  );
}
