import { useContext, useState } from 'react';
import { InputContext } from '../../../context/InputContext';
import './style.css';
import Title from '../../atoms/Title/Title';
import Input from '../../atoms/Input/Input';

const Header = () => {
    const { state, dispatch } = useContext(InputContext);
    const [ inputValue, setInputValue ] = useState(state.inputValue);

    const handleInputSubmit = () => {
        dispatch({ type: 'SET_INPUT_VALUE', payload: inputValue });
        setInputValue('');
    }

    return(
        <header className="header">
            <Title titleText="IP Address Tracker" />
            <Input
                inputPlaceholder="Search for any IP address or domain" 
                inputValue={inputValue}
                setInputValue={setInputValue}
                inputSubmit={handleInputSubmit}
            />
        </header>
    )
}

export default Header;