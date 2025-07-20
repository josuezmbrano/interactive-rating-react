export default function RatingButtons({children, isId, dataId, toggleButton}) {
    
    return children (isId === dataId, () => toggleButton(dataId))
}