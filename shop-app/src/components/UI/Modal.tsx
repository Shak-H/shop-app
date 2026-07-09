import { PropsWithChildren, useRef } from "react";
import ReactDOM from "react-dom";

import { useClickOutside } from "../../hooks/useClickOutside";
import classes from "./Modal.module.css";

type BackdropProps = {
  hideModal: () => void;
};

const Backdrop = ({ hideModal }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={hideModal} />;
};

type ModalOverlayProps = PropsWithChildren<{
  className?: string;
  hideModal: () => void;
}>;

const ModalOverlay = ({
  children,
  className = "",
  hideModal,
}: ModalOverlayProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside(modalRef, hideModal);

  return (
    <div ref={modalRef} className={`${classes.modal} ${className}`}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

type ModalProps = PropsWithChildren<{
  className?: string;
  hideModal: () => void;
}>;

const Modal = ({ children, className = "", hideModal }: ModalProps) => {
  if (!portalElement) return null;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop hideModal={hideModal} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay className={className} hideModal={hideModal}>
          {children}
        </ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
