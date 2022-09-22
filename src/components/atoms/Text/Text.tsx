interface TextProps {
    textContent: string;
    textWeight?: "400" | "500" | "700";
    textColor?: "white" | "veryDarkGray" | "darkGray";
    isSmallSize?: boolean;
    isTextUppercase?: boolean;
    isSpacingLonger?: boolean;
}

const Text = ({ textContent, textWeight, textColor, isSmallSize, isTextUppercase, isSpacingLonger }: TextProps) => {
    const getStyle = (): string | '' => {
        return (textWeight ? `fn-wgh-${textWeight} ` : '') 
        + (isSmallSize ? 'fn-size-10 ' : '') 
        + (isTextUppercase ? 'fn-uppercase ' : '')
        + (textColor ? `clr-${textColor} ` : '')
        + (isSpacingLonger ? 'fn-spacing-2' : '');
    }

    return(
        <>
            <p className={getStyle()}>{textContent}</p>
        </>
    )
}

export default Text;