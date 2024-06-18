
type ContainerProps = {
    cssStyle: React.CSSProperties
}

export const Container = ({cssStyle}: ContainerProps) => {
 
    return <div style={cssStyle}>Welcome to your Website</div>
}