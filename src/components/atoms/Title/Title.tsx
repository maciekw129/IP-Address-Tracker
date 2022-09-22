import './style.css';

interface TitleProps {
    titleText: string;
}

const Title = ({ titleText }: TitleProps) => {
    return (
        <>
            <h1 className="title">{titleText}</h1>
        </>
    )
}

export default Title;