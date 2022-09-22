import { Dispatch, SetStateAction } from 'react';
import './style.css';
import icon from './../../../images/icon-arrow.svg';

interface InputProps {
    inputPlaceholder: string;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    onInputSubmit: () => void;
}

const Input = ({ inputPlaceholder, inputValue, setInputValue, onInputSubmit }: InputProps) => {
    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        setInputValue((event.target as HTMLInputElement).value)
    }

    return(
        <div className="input__container center-content">
            <input 
                className="input"
                placeholder={inputPlaceholder}
                type="text"
                value={inputValue}
                onInput={handleChange}
            />
            <button className="input__button center-content" onClick={onInputSubmit}>
                <img src={icon} alt="Arrow button" />
            </button>
        </div>
    );
}

export default Input;