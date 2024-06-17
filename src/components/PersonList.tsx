
type NameListProps = {
    names: {
        firstName: string,
        lastName:string,
    }[]
}

export default function PersonList(props: NameListProps) {
  return (
    <div >
        <h2>The Person List</h2>
        {
            props.names.map((name, index) => <div key={index}>
             <p>{name.firstName} {name.lastName}</p>
            </div> )
        }
    </div>
  )
}

