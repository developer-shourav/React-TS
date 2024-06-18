
type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/* --------------Example of Distracting Props */
export const Input = ({value, handleChange}: InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    console.log("🚀 ~ handleInputChange ~ event:", event)
 
       
    }

    return <input name="name" value={value} onChange={handleChange} type="text" />
}