

/* ---------Position Can Be One of ----

"left-center" | "left-top" | "left-bottom" | "center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"

*/

type HorizontalPosition = "left" | "center" | "right" ;

type VerticalPosition = "top" | "center" | "bottom" ;

type ToastPositionProps = {
    position: Exclude <`${HorizontalPosition}-${VerticalPosition}`, "center-center"> | "center"
}



export const Toast = ({position}: ToastPositionProps ) => {

    return <div>Toast Notification Position - {position}</div>
}