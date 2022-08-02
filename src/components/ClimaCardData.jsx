

export const ClimaCardData = ({title,text}) => {
    return (
        <div class="flex-column">
            <p className="text-light"><strong>{title}</strong></p>
            <p className="text-light"><strong>{text}</strong></p>
        </div>
    )
}
