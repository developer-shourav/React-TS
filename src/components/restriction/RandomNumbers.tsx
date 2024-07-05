

type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never

}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}


type RandomNumbersProps = PositiveNumber | NegativeNumber | Zero ;


export const RandomNumbers = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumbersProps) => {
  
    return (
        <div>
            {value} {isPositive && "positive"} {isNegative && "negative"} {" "} {isZero && "zero"}
        </div>
    )
}