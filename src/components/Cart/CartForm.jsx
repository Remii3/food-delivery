import React from "react";
import styles from "./CartForm.module.css";
import useInputValidate from "../../hooks/useInputValidate";
import { MainButton } from "../UI/Button";

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
    <>
      <div className={styles.titleSpace}>
        <h1 className={styles.titleSpace_title}>Order</h1>
        <p className={styles.titleSpace_desc}>
          Please fill in the blank spots to finish your order.
        </p>
      </div>
      <form onSubmit={formValidation} className={styles.orderForm}>
        <div className={styles.inputSpace}>
          <label htmlFor="name" className={styles.inputSpace_title}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`${styles.inputSpace_orderInput} ${
              nameHasError ? styles.inputSpace_errorInput : ""
            } `}
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className={styles.inputSpace_errorMessage}>Error</p>
          )}
        </div>
        <div className={styles.inputSpace}>
          <label htmlFor="street" className={styles.inputSpace_title}>
            Street
          </label>
          <input
            type="text"
            id="street"
            className={`${styles.inputSpace_orderInput} ${
              streetHasError ? styles.inputSpace_errorInput : ""
            }`}
            value={enteredStreet}
            onChange={streetChangeHandler}
            onBlur={streetBlurHandler}
          />
          {streetHasError && (
            <p className={styles.inputSpace_errorMessage}>Error</p>
          )}
        </div>
        <div className={styles.inputSpace}>
          <label htmlFor="address" className={styles.inputSpace_title}>
            Address
          </label>
          <input
            type="text"
            id="address"
            className={`${styles.inputSpace_orderInput} ${
              addressHasError ? styles.inputSpace_errorInput : ""
            }`}
            value={enteredAddress}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          />
          {addressHasError && (
            <p className={styles.inputSpace_errorMessage}>Error</p>
          )}
        </div>
        <div className={styles.inputSpace}>
          <label htmlFor="city" className={styles.inputSpace_title}>
            City
          </label>
          <input
            type="text"
            id="city"
            className={`${styles.inputSpace_orderInput} ${
              cityHasError ? styles.inputSpace_errorInput : ""
            }`}
            value={enteredCity}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
          />
          {cityHasError && (
            <p className={styles.inputSpace_errorMessage}>Error</p>
          )}
        </div>
        <div className={styles.buttonSpace}>
          <MainButton
            type="button"
            className={`${styles.defaultButton}`}
            onClick={() => props.onHideForm()}
            closeClass={true}
          >
            Close
          </MainButton>
          <MainButton
            type="submit"
            className={`${
              !formValid ? styles.unavailableButton : styles.availableButton
            }`}
            disabled={!formValid}
          >
            Accept
          </MainButton>
        </div>
      </form>
    </>
  );
};
export default CartForm;
