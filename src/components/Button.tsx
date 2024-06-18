// ----------- Normal Button component
/* type ButtonProps = {
    handleClick: () => void
}

export const Button = (props: ButtonProps) => {
    return <button onClick={props.handleClick}>Click Here</button>
} */


// ----------- Example of complex Button Component 

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return <button onClick={(event) => props.handleClick(event, 1)}>Click Here</button>;
};
