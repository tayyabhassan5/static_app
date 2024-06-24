"use client";
import React, { useState, ChangeEvent } from "react";
import { FaEdit } from "react-icons/fa";

type NavItem =
  | "logo"
  | "home"
  | "shop"
  | "about"
  | "contact"
  | "businessDescription"
  | "revolutionStatement";

const NavBar = () => {
  const navItems: NavItem[] = ["home", "shop", "about", "contact"];
  const [editableItem, setEditableItem] = useState<NavItem | null>(null);
  const [values, setValues] = useState<Record<NavItem, string>>({
    logo: "LOGO",
    home: "Home",
    shop: "About",
    about: "Services",
    contact: "Contact",
    businessDescription: "Business Hand In Hand with Your Technology",
    revolutionStatement:
      "We are leading a revolution with our next-generation cloud-native technology platform",
  });

  const [backgroundImage, setBackgroundImage] = useState<string>(
    "url('/images/home/backgroundImageHomePage.jpg')"
  );

  const handleItemDoubleClick = (item: NavItem) => {
    setEditableItem(item);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, item: NavItem) => {
    setValues({
      ...values,
      [item]: e.target.value,
    });
  };

  const handleBlur = () => {
    setEditableItem(null);
  };

  const handleBackgroundImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackgroundImage(`url(${e.target?.result})`);
      };
      reader.readAsDataURL(file);
    }
  };

  const inputStyle = "bg-transparent border-none outline-none text-white p-0";

  return (
    <div
      className="text-white h-screen"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="border-b p-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">
            {editableItem === "logo" ? (
              <input
                type="text"
                value={values.logo}
                onChange={(e) => handleChange(e, "logo")}
                onBlur={handleBlur}
                autoFocus
                className={inputStyle}
              />
            ) : (
              <span onDoubleClick={() => handleItemDoubleClick("logo")}>
                {values.logo}
              </span>
            )}
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <div key={item}>
                {editableItem === item ? (
                  <input
                    type="text"
                    value={values[item]}
                    onChange={(e) => handleChange(e, item)}
                    onBlur={handleBlur}
                    autoFocus
                    className={inputStyle}
                  />
                ) : (
                  <span
                    className="hover:text-gray-400"
                    onDoubleClick={() => handleItemDoubleClick(item)}
                  >
                    {values[item]}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-3xl text-center font-semibold w-[200px] md:w-[400px] overflow">
          {editableItem === "businessDescription" ? (
            <input
              type="text"
              value={values.businessDescription}
              onChange={(e) => handleChange(e, "businessDescription")}
              onBlur={handleBlur}
              autoFocus
              className={inputStyle}
            />
          ) : (
            <span
              onDoubleClick={() => handleItemDoubleClick("businessDescription")}
            >
              {values.businessDescription}
            </span>
          )}
        </div>
        <div className="text-center w-[250px] md:w-[400px] mt-[20px]">
          {editableItem === "revolutionStatement" ? (
            <input
              type="text"
              value={values.revolutionStatement}
              onChange={(e) => handleChange(e, "revolutionStatement")}
              onBlur={handleBlur}
              autoFocus
              className={inputStyle}
            />
          ) : (
            <span
              onDoubleClick={() => handleItemDoubleClick("revolutionStatement")}
            >
              {values.revolutionStatement}
            </span>
          )}
          <div className=" flex justify-center">
            <div className="border border-2 cursor-pointer flex p-1 mt-4">
              <div>Edit</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                className="size-6 ml-2"          
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                
              </div>
            </div>
            <div className="ml-2 border border-2 cursor-pointer p-1 flex mt-4">
              <div className="">Preview</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <label htmlFor="bgImageInputNavBar">
            <FaEdit className="text-white cursor-pointer text-2xl" />
          </label>
          <input
            id="bgImageInputNavBar"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleBackgroundImageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
