import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import CloseIcon from "./CloseIcon";
import ModalButton from "./ModalButton";

const ModalStepOne = ({ nextStep }) => {
  return (
    <div className="modal__info">
      <div className="modal__header">
        <div className="modal__title">
          What type of mortgage are you looking for?
        </div>
        <div>
          <img
            src="https://cdn.zeplin.io/5fb6b6e30914549574b7eeee/assets/2D708EBB-2086-44D5-BB65-834E59EA227D.png"
            alt="credit score"
          />
        </div>
      </div>
      <div className="modal__buttons">
        <ModalButton purpose="Purchase" onClick={nextStep} />
        <ModalButton purpose="Refinance" />
        <ModalButton purpose="Home Equity" />
      </div>
    </div>
  );
};

const ModalStepTwo = () => {
  return (
    <div className="modal__info">
      <div className="modal__header">
        <div className="modal__title">How soon do you want to close?</div>
        <div>
          <img
            src="https://cdn.zeplin.io/5fb6b6e30914549574b7eeee/assets/0EF884D8-EB9B-455F-A7F9-F3B2A799E582.png"
            alt="credit score"
          />
        </div>
      </div>
      <div className="modal__buttons">
        <ModalButton purpose="As soon as possible" />
        <ModalButton purpose="Within a few months" />
        <ModalButton purpose="Just looking around" />
      </div>
    </div>
  );
};

export default function CreditScoreModal({
  selectValue,
  closeHandler,
  show = false,
}) {
  const [step, setStep] = useState(1);
  return (
    <div className="scores__modal--container">
      <div
        className="scores__modal--background"
        style={{ display: `${show ? "block" : "none"}` }}
      ></div>
      <AnimatePresence exitBeforeEnter key={step}>
        {step === 1 ? (
          <motion.div
            className="scores__modal"
            initial="initial"
            animate="open"
            exit="close"
            variants={{
              initial: { top: -200, opacity: 0 },
              open: { top: 50, opacity: 1 },
              close: { top: 200, opacity: 0 },
            }}
          >
            <CloseIcon onClick={closeHandler} />
            <ModalStepOne nextStep={() => setStep(2)} />
          </motion.div>
        ) : (
          <motion.div
            className="scores__modal"
            initial="initial"
            animate="open"
            exit="close"
            variants={{
              initial: { top: -200, opacity: 0 },
              open: { top: 50, opacity: 1 },
              close: { top: 200, opacity: 0 },
            }}
          >
            <CloseIcon onClick={closeHandler} />
            <ModalStepTwo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
