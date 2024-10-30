"use client";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { transferToUser } from "@/actions/auth";

// Define Input Component
const Input = ({ label, type, name, placeholder }) => (
  <div className="mb-4">
    <label
      className="block text-sm font-medium text-gray-700 mb-1"
      htmlFor={name}
    >
      {label}
    </label>
    <input
      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  </div>
);

export default function PopupGfg({ username }) {
  return (
    <div className="p-4">
      <h4 className="text-lg font-bold mb-4">Next.js Popup - GeeksforGeeks</h4>
      <Popup
        trigger={
          <button className="trigger-button bg-blue-500 text-white p-2 rounded">
            Transfer
          </button>
        }
        position="right center"
        modal
        nested
      >
        {(close) => (
          <div className="modal bg-white p-4 rounded shadow-lg">
            <button className="close text-red-500 float-right" onClick={close}>
              &times;
            </button>
            <div className="header text-xl font-bold mb-4">
              {" "}
              Transfer Money{" "}
            </div>
            <div className="content">
              {/* Conditionally render the Input field based on the state */}
              <form action={(formData) => transferToUser(formData, username)}>
                <Input
                  label="Transfer"
                  type="number"
                  name="amount"
                  placeholder="Enter the amount to transfer: "
                />
              </form>
            </div>
            <div className="actions mt-4">
              <button
                className="bg-green-500 text-white p-2 rounded"
                onClick={() => {
                  console.log("Form submitted");
                  close();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
