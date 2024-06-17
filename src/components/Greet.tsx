
type GreetPropsType = {
  name: string,
  unreadMessageCount: number,
  isLoggedIn: boolean

}
export default function Greet(props: GreetPropsType) {
  return (
    <div>
      {props.isLoggedIn ? <h2>Welcome {props.name} You Have {props.unreadMessageCount} unread Message</h2> : <h2> Welcome Vai</h2>}
    </div>
  );
}
