import React from "react";
import { RegisterFormProps } from "../../interfaces/interfaces";
import { notifyError } from "../../shared/toastMessage";


export const RegisterForm: React.FC<RegisterFormProps> = ({
  onNextStep,
  onHandleFormData,
  formData
}): JSX.Element => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.name && formData.email) {
            onNextStep(2);
        } else {
          notifyError("Por favor completa todos los campos.");
        }
    }
    
  return (
    <>
      <section>
        <div className="general-container">
          <div className="title-container">
            <h1>Register</h1>
          </div>
          <form action="" onSubmit={ handleSubmit }>
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="">Name</label>
              </div>
              <input type="text" name="name" placeholder="enter your name" onChange={ onHandleFormData } />
            </div>
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="">Email</label>
              </div>
              <input type="email" name="email" placeholder="example@gmail.com" onChange={ onHandleFormData } />
            </div>
            <div className="button-container">
              <button className="button-continue" type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
