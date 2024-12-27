import React, { useState } from "react";
import { TopicsFormProps } from "../../interfaces/interfaces";
import { notifyError } from "../../shared/toastMessage";


export const TopicsForm: React.FC<TopicsFormProps> = ({
  onNextStep,
  onHandleFormData,
  formData
}): JSX.Element => {

    const [focusedButtons, setFocusedButtons] = useState<Record<string, boolean>>({});

    const options: string[] = [
        "Software Development",
        "User Experience",
        "Graphic Design",
    ];

    const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.topics.length > 0) {
            onNextStep(3);
        } else {
            notifyError('Seleccione al menos un tema de interés');
        }
    };

    const buttonFocus = (option: string) => {
        setFocusedButtons((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    }

  return (
    <>
      <section>
        <div className="general-container">
          <div className="title-container">
            <h1>Which topics you are interested in?</h1>
          </div>
            <form action="" onSubmit={ handleClick }>
              <div className="options-container">
                {options.map((option, key) => (
                  <button 
                    type="button"
                    className={`options-button ${focusedButtons[option] ? 'focused' : ''}`}
                    key={key}
                    onClick={ () => {
                        buttonFocus(option);
                        onHandleFormData(option);
                    }}
                    >
                    {option}

                  </button>
                ))}
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
