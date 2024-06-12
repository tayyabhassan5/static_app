import React, { useState } from 'react';

interface CardProps {
  heading: string;
  description: string;
  descriptionClicked?: () => void;
  onUpdate: (updatedCard: { heading: string; description: string }) => void;
}

const Card: React.FC<CardProps> = ({
  heading,
  description,
  onUpdate,
}) => {
  const [editableHeading, setEditableHeading] = useState(false);
  const [editableDescription, setEditableDescription] = useState(false);
  const [currentHeading, setCurrentHeading] = useState(heading);
  const [currentDescription, setCurrentDescription] = useState(description);

  const handleHeadingDoubleClick = () => {
    setEditableHeading(true);
  };

  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentHeading(e.target.value);
  };

  const handleHeadingBlur = () => {
    setEditableHeading(false);
    onUpdate({ heading: currentHeading, description: currentDescription });
  };

  const handleDescriptionDoubleClick = () => {
    setEditableDescription(true);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    setEditableDescription(false);
    onUpdate({ heading: currentHeading, description: currentDescription });
  };

  return (
    <div className="min-h-[200px] md:w-[250px] lg:w-[320px] shadow-2xl rounded-lg p-6 mt-4">
      <div className="h-[45px] bg-blue-500 w-[45px] border rounded-full flex items-center justify-center mb-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
      {editableHeading ? (
        <input
          type="text"
          value={currentHeading}
          onChange={handleHeadingChange}
          onBlur={handleHeadingBlur}
          autoFocus
          className="font-semibold"
        />
      ) : (
        <div onDoubleClick={handleHeadingDoubleClick} className="font-semibold">
          {currentHeading}
        </div>
      )}
      {editableDescription ? (
        <textarea
          value={currentDescription}
          onChange={handleDescriptionChange}
          onBlur={handleDescriptionBlur}
          autoFocus
          className="mt-4 font-extralight"
        />
      ) : (
        <div onDoubleClick={handleDescriptionDoubleClick} className="mt-4 font-extralight">
          {currentDescription}
        </div>
      )}
    </div>
  );
};

export default Card;
