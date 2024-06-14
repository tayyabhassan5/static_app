import Image from "next/image";
import { useState } from "react";
import FirstImage from "../../../public/images/home/girl.jpg";
import SecondImage from "../../../public/images/home/personcrypto.png";

const ServicePageTwo = () => {
  const [title, setTitle] = useState("Our real time experiences");
  const [editingTitle, setEditingTitle] = useState(false);

  const [subtitle1, setSubtitle1] = useState("Our aim and goals");
  const [editingSubtitle1, setEditingSubtitle1] = useState(false);

  const [description1, setDescription1] = useState(
    "We provide your business service with best ideas and try to give you best rate so you can success."
  );
  const [editingDescription1, setEditingDescription1] = useState(false);

  const [subtitle2, setSubtitle2] = useState("Our aim and goals");
  const [editingSubtitle2, setEditingSubtitle2] = useState(false);

  const [description2, setDescription2] = useState(
    "We provide your business service with best ideas and try to give you best rate so you can success."
  );
  const [editingDescription2, setEditingDescription2] = useState(false);

  const handleEdit = (setEditingFunction:any) => {
    console.log("COMING HERE")
    setEditingFunction(true);
  };

  const handleChange = (setFunction:any) => (e:any) => {
    setFunction(e.target.value);
  };

  const handleBlur = (setEditingFunction:any) => {
    setEditingFunction(false);
  };

  return (
    <div className="mt-16 flex">
      <div className="relative flex-1 ml-[300px]">
        <div className="relative w-full h-full">
          <Image
            src={FirstImage}
            alt="Service Image"
            className="h-full object-cover"
            objectFit="contain"
          />
        </div>
        <div className="absolute top-1/2 left-[-200px] transform -translate-y-1/2">
          <Image
            src={SecondImage}
            alt="Overlay Image"
            width={300}
            height={300}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex-1 ml-8 mt-[50px]">
        <div className="font-bold text-xl">
          {!editingTitle ? (
            <span onDoubleClick={() => handleEdit(setEditingTitle)}>
              {title}
            </span>
          ) : (
            <input
              type="text"
              value={title}
              onChange={handleChange(setTitle)}
              onBlur={() => handleBlur(setEditingTitle)}
              className="bg-transparent border-none w-full text-xl font-bold"
              autoFocus
            />
          )}
        </div>

        <div className="mt-[20px] flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
          <div className="font-semibold ml-[20px]">
            {!editingSubtitle1 ? (
              <span onDoubleClick={() => handleEdit(setEditingSubtitle1)}>
                {subtitle1}
              </span>
            ) : (
              <input
                type="text"
                value={subtitle1}
                onChange={handleChange(setSubtitle1)}
                onBlur={() => handleBlur(setEditingSubtitle1)}
                className="bg-transparent border-none w-full font-semibold"
                autoFocus
              />
            )}
          </div>
        </div>
        <div className="ml-[44px]">
          {!editingDescription1 ? (
            <span onDoubleClick={() => handleEdit(setEditingDescription1)}>
              {description1}
            </span>
          ) : (
            <input
              type="text"
              value={description1}
              onChange={handleChange(setDescription1)}
              onBlur={() => handleBlur(setEditingDescription1)}
              className="bg-transparent border-none w-full"
              autoFocus
            />
          )}
        </div>

        <div className="mt-[50px] flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>
          <div className="font-semibold ml-[20px]">
            {!editingSubtitle2 ? (
              <span onDoubleClick={() => handleEdit(setEditingSubtitle2)}>
                {subtitle2}
              </span>
            ) : (
              <input
                type="text"
                value={subtitle2}
                onChange={handleChange(setSubtitle2)}
                onBlur={() => handleBlur(setEditingSubtitle2)}
                className="bg-transparent border-none w-full font-semibold"
                autoFocus
              />
            )}
          </div>
        </div>
        <div className="ml-[44px] mb-[70px]">
          {!editingDescription2 ? (
            <span onDoubleClick={() => handleEdit(setEditingDescription2)}>
              {description2}
            </span>
          ) : (
            <input
              type="text"
              value={description2}
              onChange={handleChange(setDescription2)}
              onBlur={() => handleBlur(setEditingDescription2)}
              className="bg-transparent border-none w-full"
              autoFocus
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicePageTwo;
