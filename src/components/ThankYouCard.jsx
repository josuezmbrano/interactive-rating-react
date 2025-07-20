import HeaderImage from "../assets/illustration-thank-you.svg";
export default function ThankYouCard({result}) {
  return (
    <>
      <header className="thanks-header-section">
        <img src={HeaderImage} alt="Illustration thankYou" />
      </header>
      <section className="thanks-result-section">
        <div className="thanks-result-div">
          <p>You selected {result} out of 5</p>
        </div>
      </section>
      <section className="thanks-info-section">
        <div className="thanks-info-div">
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. if you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </section>
    </>
  );
}
