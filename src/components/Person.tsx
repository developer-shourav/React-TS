/* ---------------Example of Import Custom Types ------------ */
import { PersonProps } from "./Person.type";


export default function Person(props: PersonProps) {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
}
