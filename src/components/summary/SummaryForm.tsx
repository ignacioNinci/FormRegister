import React from "react";
import { SummaryProps } from "../../interfaces/interfaces";
import { notifySuccess } from "../../shared/toastMessage";

export const SummaryForm: React.FC<SummaryProps> = ({
    onBack,
    resetFormData,
    formData,
}): JSX.Element => {

    const sendData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        notifySuccess(`Usuario "${formData.name}" fue registrado exitosamente!`);
        setTimeout(() => {
            onBack(1)
            resetFormData();
        }, 2000);
    }

  return (
    <>
      <section>
        <div className="general-container">
          <div className="title-container">
            <h1>Summary</h1>
          </div>
          <form action="" onSubmit={ sendData }>
            <div className="summary-container">
              <div className="data-container">
                <label htmlFor="">
                    <strong>Name: </strong>
                </label>
                <label>
                    {formData.name}
                </label>
              </div>
              <div className="data-container">
                <label htmlFor="">
                    <strong>Email: </strong>
                </label>
                <label>
                    {formData.email}
                </label>
              </div>
              <div className="data-container">
                <label htmlFor="">
                    <strong>Topics: </strong>
                </label>
                <ul>
                  {formData.topics.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="button-container">
              <button className="button-continue" type="submit">Confirm</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
