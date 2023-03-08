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
      <Overlay /*onClick={onClose}*/>
        <ModalButton onClick={onClose}>X</ModalButton>
        <Content>{children}</Content>
      </Overlay>
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
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${({ isAnimating }) => (isAnimating ? slideIn : slideOut)};
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(0.4rem);
`;

const Overlay = styled.div`
  margin: auto;
  width: 70vw;
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: orange;
`;

const Content = styled.div`
  margin: auto;
  width: 70vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5cc189;
  max-width: 35rem;
  border-radius: 2rem;
  padding: 16px;
`;

const ModalButton = styled.button`
  all: unset;
  margin: 0.1rem;
  background-color: #ffffff;
  border-radius: 50%;
  font-weight: bold;
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.5rem;
  &:hover {
    color: red;
  }
`;
