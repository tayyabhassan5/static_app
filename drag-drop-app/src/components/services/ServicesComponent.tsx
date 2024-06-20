"use client";
import React, { useState, ChangeEvent, MouseEvent } from "react";
import { FaEdit } from "react-icons/fa";
import ServicePageTwo from "./ServicePageTwo";

const ServicesComponent = () => {
  const [title, setTitle] = useState("The solution we give to improve the business");
  const [editingHeading, setEditingHeading] = useState(false);

  const [description, setDescription] = useState(
    "We welcome you to visit our agency so that we have get a clear idea about our policy and how help our clients. So you are welcome any time you want."
  );
  const [editingDescription, setEditingDescription] = useState(false);

  const [backgroundImage, setBackgroundImage] = useState<string>(
    "url('/images/home/black-screen.jpg')"
  );

  const handleTitleEdit = () => {
    setEditingHeading(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setEditingHeading(false);
  };

  const handleDescriptionEdit = () => {
    setEditingDescription(true);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    setEditingDescription(false);
  };

  const handleBackgroundImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setBackgroundImage(`url(${e.target.result})`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center lg:h-[70vh] text-white relative"
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-8 md:p-28">
            {!editingHeading ? (
              <div
                className="font-medium text-2xl"
                onDoubleClick={handleTitleEdit}
              >
                {title}
              </div>
            ) : (
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
                className="bg-transparent border-none w-full text-2xl font-medium"
              />
            )}
            {editingDescription ? (
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                autoFocus
                onBlur={handleDescriptionBlur}
                className="bg-transparent border-none w-full mt-4"
              />
            ) : (
              <div className="mt-4" onDoubleClick={handleDescriptionEdit}>
                {description}
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <label htmlFor="bgImageInputServices">
            <FaEdit className="text-white cursor-pointer text-2xl" />
          </label>
          <input
            id="bgImageInputServices"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleBackgroundImageChange}
          />
        </div>
      </div>

      <ServicePageTwo />
    </>
  );
};

export default ServicesComponent;
