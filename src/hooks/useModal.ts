import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | undefined>(undefined);

  const showModal = (id?: number) => {
    setSelectedItemId(id);
    setIsModalOpen(true);
  };

  const hideModal = () => setIsModalOpen(false);

  return { isModalOpen, showModal, hideModal, selectedItemId };
};
