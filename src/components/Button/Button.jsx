/* eslint-disable react/prop-types */
export default function Button({props}){
  return (
    <button style={{
      backgroundColor: props?.color,
      padding: props?.padding,
      border: 0,
      fontWeight: 900,
      color: props?.textColor
    }}>{props?.title}</button>
  )
}