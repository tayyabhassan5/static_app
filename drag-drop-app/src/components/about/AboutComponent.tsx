"use client"

import React, { useState } from 'react';
import Card from "../Card"

interface CardProps {
    heading: string;
    description: string;
    isEditable?: boolean;
}

const AboutComponent: React.FC = () => {
  const [editableTitle, setEditableTitle] = useState(false);
  const [title, setTitle] = useState('Our Nature is Effortless Technology');
  const [editableDescription, setEditableDescription] = useState(false);
  const [description, setDescription] = useState('We are a consultancy company specialized in Technology and Information Systems.');

  const [cardsData, setCardsData] = useState<CardProps[]>([
    {
      heading: 'Heading 1',
      description: 'Description for Heading 1',
      isEditable: true,
    },
    {
      heading: 'Heading 2',
      description: 'Description for Heading 2',
      isEditable: true,
    },
    {
      heading: 'Heading 3',
      description: 'Description for Heading 3',
      isEditable: true,
    },
  ]);

  const handleTitleDoubleClick = () => {
    setEditableTitle(!editableTitle);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setEditableTitle(false);
  };

  const handleDescriptionDoubleClick = () => {
    setEditableDescription(!editableDescription);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    setEditableDescription(false);
  };

  const handleCardUpdate = (index: number, updatedCard: CardProps) => {
    const updatedCards = [...cardsData];
    updatedCards[index] = updatedCard;
    setCardsData(updatedCards);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-[#faf6f5]">
      {editableTitle? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          autoFocus
          className="font-bold text-2xl md:w-[500px] text-center mt-4"
        />
      ) : (
        <div onDoubleClick={handleTitleDoubleClick} className="font-bold text-2xl w-[500px] text-center mt-4">
          {title}
        </div>
      )}
      {editableDescription? (
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          onBlur={handleDescriptionBlur}
          autoFocus
          className="bg-transparent border-none text-center md:w-[500px] mt-4"
        />
      ) : (
        <div onDoubleClick={handleDescriptionDoubleClick} className="text-center w-[500px] mt-4">
          {description}
        </div>
      )}
      <div className="md:flex gap-4 mb-6 mt-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          {...card}
          onUpdate={(updatedCard) => handleCardUpdate(index, updatedCard)}
        />
      ))}
      </div>
    </div>
  );
};

export default AboutComponent;
