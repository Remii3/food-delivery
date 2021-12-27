import React from "react";
import styles from "./CartForm.module.css";
import useInputValidate from "../../hooks/useInputValidate";

const letterCheck = (enteredValue) => enteredValue.trim() !== "";

const CartForm = (props) => {
  const {
    enteredValue: enteredName,
    hasError: nameHasError,
    isValid: nameIsValid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInputValidate(letterCheck);
  const {
    enteredValue: enteredStreet,
    hasError: streetHasError,
    isValid: streetIsValid,
    changeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
    reset: streetReset,
  } = useInputValidate(letterCheck);
  const {
    enteredValue: enteredAddress,
    hasError: addressHasError,
    isValid: addressIsValid,
    changeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
    reset: addressReset,
  } = useInputValidate(letterCheck);
  const {
    enteredValue: enteredCity,
    hasError: cityHasError,
    isValid: cityIsValid,
    changeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInputValidate(letterCheck);
  let formValid = false;

  if (nameIsValid && streetIsValid && addressIsValid && cityIsValid) {
    formValid = true;
  }

  const formValidation = (e) => {
    e.preventDefault();

    if (!nameIsValid && !streetIsValid && !addressIsValid && !cityIsValid) {
      formValid = false;
    }
    props.onSendOrder({
      enteredName,
      enteredStreet,
      enteredAddress,
      enteredCity,
    });

    nameReset();
    streetReset();
    addressReset();
    cityReset();
  };

  return (
    <form onSubmit={formValidation}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Error</p>}
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p>Error</p>}
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={enteredAddress}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressHasError && <p>Error</p>}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p>Error</p>}
      </div>
      <button type="submit" disabled={!formValid}>
        Accept
      </button>
    </form>
  );
};
export default CartForm;
