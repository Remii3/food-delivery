import { useState } from "react";

const useInputValidate = (textValidation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = textValidation(enteredValue);
  const hasError = isTouched && !isValid;

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const blurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };
  return {
    enteredValue,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};
export default useInputValidate;
