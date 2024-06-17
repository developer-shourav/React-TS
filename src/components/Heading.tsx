type HeadingProps = {
    children: string
}

export default function Heading(props: HeadingProps) {
  return (
    <h2>Heading main Title: {props.children}</h2>
  )
}
