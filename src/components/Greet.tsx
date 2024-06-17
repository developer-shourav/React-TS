
type GreetPropsType = {
  name: string,
  unreadMessageCount: number

}
export default function Greet(props: GreetPropsType) {
  return (
    <div>
      <h2>Welcome {props.name} You Have {props.unreadMessageCount} unread Message</h2>
    </div>
  );
}
