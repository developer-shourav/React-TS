type StatusProps = {
  status: "loading" | "pending" | "success" | "error";
};
export default function Status(props: StatusProps) {
  let statusMessage;
  if (props.status === "success") {
    statusMessage = "Data Fetched successfully!";
  } else if (props.status === "loading") {
    statusMessage = "loading...";
  } else if (props.status === "pending") {
    statusMessage = "loading...";
  } else if (props.status === "error") {
    statusMessage = "Error Fetching Data !!";
  }
  return (
    <div>
      <h2>{statusMessage}</h2>
    </div>
  );
}
