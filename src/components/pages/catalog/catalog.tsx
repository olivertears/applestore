import { FC } from 'react';
import { Button, PageWrap } from '../../ui';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { ProductForm } from './forms/product-form';

export const Catalog: FC = () => {
  const { isModalOpen, showModal, hideModal } = useModal();

  return (
    <PageWrap>
      <Button onClick={() => showModal()}>ADD</Button>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductForm />
      </Modal>
    </PageWrap>
  );
};
