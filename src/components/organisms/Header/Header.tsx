import { useContext, useState } from 'react';
import { InputContext } from '../../../context/InputContext';
import './style.css';
import Title from '../../atoms/Title/Title';
import Input from '../../atoms/Input/Input';
import FourSectionTable from '../FourSectionTable/FourSectionTable';

const Header = () => {
    const { state, dispatch } = useContext(InputContext);
    const [ inputValue, setInputValue ] = useState(state.ip);

    const handleInputSubmit = () => {
        dispatch({ type: 'SET_IP_VALUE', payload: inputValue });
        setInputValue('');
    }

    return(
        <header className="header">
            <Title titleText="IP Address Tracker" />
            <Input
                inputPlaceholder="Search for any IP address or domain" 
                inputValue={inputValue}
                setInputValue={setInputValue}
                onInputSubmit={handleInputSubmit}
            />
            <FourSectionTable />
        </header>
    )
}

export default Header;