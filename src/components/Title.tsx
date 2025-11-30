import type {ReactNode} from "react";


const Title = ({text}:{text:string}): ReactNode => {
    return (
        <div><h2 className="my-6 text-5xl capitlize">{text} </h2></div>
    )
}
export default Title
