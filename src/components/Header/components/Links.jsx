export default function Link ({props}) {
  return(
    <a onClick={() => props?.setActive(props?.index)} style={props?.style} href={props?.href}>{props?.text}</a>
  )
}