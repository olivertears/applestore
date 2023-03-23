import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(undefined);

  const showModal = (id?: string) => {
    setSelectedItemId(id);
    setIsModalOpen(true);
  };

  const hideModal = () => setIsModalOpen(false);

  return { isModalOpen, showModal, hideModal, selectedItemId };
};
