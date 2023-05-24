import React from 'react';
import ButtonEl from '../elements/Button';
import styled from 'styled-components';

const Modal = ({
  isOpen,
  confirmMessage,
  closeModalHandlerWithConfirm
}: {
  isOpen: boolean;
  confirmMessage: string;
  closeModalHandlerWithConfirm: () => void;
}) => {
  return (
    <>
      {isOpen && (
        <StyledModalBackdrop onClick={closeModalHandlerWithConfirm}>
          <StyledModalView onClick={(e) => e.stopPropagation()}>
            <StyledConfirmMessageContainer>
              <StyledConfirmMessage>{confirmMessage}</StyledConfirmMessage>
            </StyledConfirmMessageContainer>
            <StyledButtonContainer>
              <ModalConfirmButton onClick={closeModalHandlerWithConfirm}>
                확인
              </ModalConfirmButton>
            </StyledButtonContainer>
          </StyledModalView>
        </StyledModalBackdrop>
      )}
    </>
  );
};

export default Modal;

const StyledModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

const ModalConfirmButton = ButtonEl({
  flex: '1',
  bg: 'var(--cyan-dark-400)',
  hoverBg: 'var(--cyan-dark-500)'
});

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledModalView = styled.div.attrs((props) => ({
  role: 'dialog'
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  background-color: #ffffff;
  width: 45rem;
  min-height: 15rem;
  padding: 2rem;

  @media screen and (max-width: 650px) {
    width: 30rem;
    min-height: 10rem;
  }
`;

const StyledConfirmMessageContainer = styled.div`
  display: flex;
  height: 70%;
  justify-content: center;
  align-items: center;
`;

const StyledConfirmMessage = styled.div`
  display: flex;
  margin-top: 1.8rem;
  font-size: 1.8rem;
`;
