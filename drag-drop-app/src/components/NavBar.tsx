"use client";
import React, { useState, ChangeEvent } from "react";
import { FaEdit } from "react-icons/fa";

type NavItem = "logo" | "home" | "shop" | "about" | "contact" | "businessDescription" | "revolutionStatement";

const NavBar = () => {
  const navItems: NavItem[] = ["home", "shop", "about", "contact"];
  const [editableItem, setEditableItem] = useState<NavItem | null>(null);
  const [highlightedItem, setHighlightedItem] = useState<NavItem | null>(null);
  const [values, setValues] = useState<Record<NavItem, string>>({
    logo: "LOGO",
    home: "Home",
    shop: "About",
    about: "Services",
    contact: "Contact",
    businessDescription: "Business Hand In Hand with Your Technology",
    revolutionStatement: "We are leading a revolution with our next-generation cloud-native technology platform",
  });

  const [backgroundImage, setBackgroundImage] = useState<string>("url('/images/home/backgroundImageHomePage.jpg')");

  const handleItemClick = (item: NavItem) => {
    setHighlightedItem(item);
  };

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
    <div className="text-white h-screen" style={{ backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
              <span
                onClick={() => handleItemClick("logo")}
                onDoubleClick={() => handleItemDoubleClick("logo")}
                className={highlightedItem === "logo" ? "text-red-500" : ""}
              >
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
                    className={`hover:text-gray-400 ${
                      highlightedItem === item ? "text-red-500" : ""
                    }`}
                    onClick={() => handleItemClick(item)}
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
              onClick={() => handleItemClick("businessDescription")}
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
              onClick={() => handleItemClick("revolutionStatement")}
              onDoubleClick={() => handleItemDoubleClick("revolutionStatement")}
            >
              {values.revolutionStatement}
            </span>
          )}
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
