import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | number | undefined>(undefined);

  const showModal = (id?: number | string) => {
    setSelectedItemId(id);
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(undefined);
  };

  return { isModalOpen, showModal, hideModal, selectedItemId };
};
