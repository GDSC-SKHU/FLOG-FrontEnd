import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: React.PropsWithChildren<ModalProps>) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(isOpen);
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  return isOpen ? (
    <ModalContainer isAnimating={isAnimating} onAnimationEnd={handleAnimationEnd}>
      <Overlay /*onClick={onClose}*/></Overlay>
      <Content>{children}</Content>
      <ModalButton onClick={onClose}>X</ModalButton>
    </ModalContainer>
  ) : null;
};

export default Modal;

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
`;

interface ModalContainerProps {
  isAnimating: boolean;
}

const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${({ isAnimating }) => (isAnimating ? slideIn : slideOut)};

  background-color: rgba(133, 55, 55, 0.3);
  backdrop-filter: blur(1rem);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div`
  background-color: white;
  width: 100%;
  max-width: 600px;
  border-radius: 4px 4px 0 0;
  padding: 16px;
`;

const ModalButton = styled.button`
  font-weight: bold;
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
`;
