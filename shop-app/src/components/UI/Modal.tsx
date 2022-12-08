import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

type BackdropProps = {
  className?: string;
  hideModal: () => void;
};

const Backdrop = ({ hideModal }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={hideModal}></div>;
};

type ModalOverlayProps = {
  children: React.ReactNode;
  className?: string;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement: any = document.getElementById("overlays");

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  hideModal: () => void;
};

const Modal = ({ children, hideModal }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop hideModal={hideModal} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
