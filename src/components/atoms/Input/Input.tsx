import { Dispatch, SetStateAction } from 'react';
import './style.css';
import icon from './../../../images/icon-arrow.svg';

interface InputProps {
    inputPlaceholder: string;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    inputSubmit: () => void;
}

const Input = ({ inputPlaceholder, inputValue, setInputValue, inputSubmit }: InputProps) => {
    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        setInputValue((event.target as HTMLInputElement).value)
    }

    return(
        <div className="input__container">
            <input 
                className="input"
                placeholder={inputPlaceholder}
                type="text"
                value={inputValue}
                onInput={handleChange}
            />
            <button className="input__button" onClick={inputSubmit}>
                <img src={icon} alt="Arrow button" />
            </button>
        </div>
    );
}

export default Input;