import React from "react";

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-black text-4xl animate-spin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3a9 9 0 1 0 9 9"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loading;