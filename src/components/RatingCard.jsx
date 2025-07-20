import React from "react";
import Star from "../assets/icon-star.svg";
import useItemSelected from "../hooks/useItemSelected";
import RatingButtons from "./RatingButtons";
import cardButtonsData from "./cardButtonsData";

export default function RatingCard({optionSubmitted}) {
  const [isId, toggleButton] = useItemSelected();
  const [error, setError] = React.useState(false)

  function toggleSubmit() {
    //Validacion de opcion elegida
    if (isId) {
      optionSubmitted(isId)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <header className="header-div">
        <div className="star-div">
          <img src={Star} alt="Star Icon" />
        </div>
      </header>
      <section className="text-section">
        <div className="text-div">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
      </section>
      <div className="buttons-div">
      {cardButtonsData.map((button) => {
        return (
          <RatingButtons
            isId={isId}
            dataId={button.id}
            toggleButton={toggleButton}
            key={button.id}
          >
            {(bool, toggle) => {
              return (
                    <button className={`buttons-style ${bool ? "active" : ""}`} onClick={toggle}>{button.rating}</button>
              );
            }}
          </RatingButtons>
        );
      })}
      </div>
      <div className="submit-div">
        <button onClick={toggleSubmit}>SUBMIT</button>
        {error && !isId && <p className="error-text">Debes elegir una opcion</p>}
      </div>
    </>
  );
}
