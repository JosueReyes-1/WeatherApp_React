

export const ClimaCardData = ({title,text}) => {
    return (
        <div className="flex-column my-2 ">
            <p className="text-light text-center h4"><strong>{title}</strong></p>
            <p className="text-light text-center "><strong>{text}</strong></p>
        </div>
    )
}
