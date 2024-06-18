
type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("🚀 ~ handleInputChange ~ event:", event)
 
       
    }

    return <input name="name" value={props.value} onChange={handleInputChange} type="text" />
}