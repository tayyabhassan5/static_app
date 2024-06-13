"use client";
import React, { useState } from "react";

const ServicesComponent = () => {
  const [title, setTitle] = useState(
    "The solution we give to improve the business"
  );
  const [editingHeading, setEditingHeading] = useState(false);

  const [description, setDescription] = useState(
    "We welcome you to visit our agency so that we have get a clear idea about our policy and how help our clients.So you are welcome any time you want."
  );
  const [editingDescription, setEditingDescription] = useState(false);

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
    console.log("On Double click description clicked");
    setEditingDescription(true);
  };

  const handleDescriptionChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setDescription(e.target.value)
  }
  const handleDescriptionBlur=()=>{
    setEditingDescription(false);
  }
  return (
    <div
      className="bg-cover bg-center lg:h-[70vh] text-white"
      style={{ backgroundImage: `url(images/home/black-screen.jpg)` }}
    >
      <div className="grid lg:grid-cols-2">
        <div className="p-8 md:p-28">
          {!editingHeading ? (
            <>
              <div
                className="font-medium text-2xl"
                onDoubleClick={handleTitleEdit}
              >
                {title}
              </div>
            </>
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

        <div>Hello</div>
      </div>
    </div>
  );
};

export default ServicesComponent;
