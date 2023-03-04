import { FC, ReactElement } from 'react';
import { Modal } from '@mui/material';

interface IModalWindowProps {
  isModalOpen: boolean;
  closeModal: () => void;
  children: ReactElement;
}

export const ModalWindow: FC<IModalWindowProps> = ({
  isModalOpen,
  closeModal,
  children,
}) => {
  return (
    <div>
      <Modal open={isModalOpen} onClose={closeModal}>
        {children}
      </Modal>
    </div>
  );
};
