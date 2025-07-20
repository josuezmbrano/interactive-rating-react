import React from 'react'

export default function useItemSelected() {
    const [isId, setIsId] = React.useState(null)

    function toggleButton(identificacion) {
        if (identificacion !== isId) {
            setIsId(identificacion)
        }
    }

    return [isId, toggleButton]
}