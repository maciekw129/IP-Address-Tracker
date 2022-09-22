import { useContext } from "react";
import { InputContext } from "../../../context/InputContext";
import './style.css';
import TableSection from "../../molecules/TableSection/TableSection";

const FourSectionTable = () => {
    const { state } = useContext(InputContext);
    const tableSections: [string, string][] = [
        ['IP ADDRESS', state.ip], 
        ['LOCATION', state.location], 
        ['TIMEZONE', state.timezone], 
        ['ISP', state.isp]
    ];

    return(
        <div className="fourSectionTable">
            {tableSections.map((section, index) => {
               return (
                <TableSection key={index} sectionTitle={section[0]} sectionValue={section[1]} />
               ) 
            })}
        </div>
    )
}

export default FourSectionTable;