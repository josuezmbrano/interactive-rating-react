import React from 'react'
import RatingCard from "./RatingCard";
import ThankYouCard from "./ThankYouCard";

export default function Card() {
    const [shouldRender, setShouldRender] = React.useState(false)
    const [buttonSelected, setButtonSelected] = React.useState(null)

    function optionSubmitted(id) {
        if (id) {
            setButtonSelected(id)
            setShouldRender(true)
        }
    }

    return (
        <main className="card-style">
            {shouldRender ? <ThankYouCard result={buttonSelected} /> : <RatingCard optionSubmitted={optionSubmitted} />}
        </main>
    )
}