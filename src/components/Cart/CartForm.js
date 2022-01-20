import React from "react";
import styles from "./CartForm.module.css";
import useInputValidate from "../../hooks/useInputValidate";
import Button from "../UI/Button";

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
    <form onSubmit={formValidation} className={styles.outerForm}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={`${styles.defaultInput} ${
            nameHasError ? styles.errorInput : ""
          } `}
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className={styles.errorMessage}>Error</p>}
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          className={`${styles.defaultInput} ${
            streetHasError ? styles.errorInput : ""
          }`}
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p className={styles.errorMessage}>Error</p>}
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          className={`${styles.defaultInput} ${
            addressHasError ? styles.errorInput : ""
          }`}
          value={enteredAddress}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressHasError && <p className={styles.errorMessage}>Error</p>}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          className={`${styles.defaultInput} ${
            cityHasError ? styles.errorInput : ""
          }`}
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p className={styles.errorMessage}>Error</p>}
      </div>
      <div id={styles.buttonSpace}>
        <Button
          type="button"
          className={`${styles.defaultButton}`}
          onClick={() => props.onHideForm()}
          closeClass={true}
        >
          Close
        </Button>
        <Button
          type="submit"
          className={`${
            !formValid ? styles.unavailableButton : styles.availableButton
          }`}
          disabled={!formValid}
        >
          Accept
        </Button>
      </div>
    </form>
  );
};
export default CartForm;
