import { useContext } from "react";
import { InputContext } from "../../../context/InputContext";
import './style.css';
import TableSection from "../../molecules/TableSection/TableSection";

const FourSectionTable = () => {
    const { state } = useContext(InputContext);

    return(
        <div className="fourSectionTable">
            {Object.keys(state).map((key, index) => {
               return (
                <TableSection key={index} sectionTitle={key} sectionValue={state[key as keyof typeof state]} />
               ) 
            })}
        </div>
    )
}

export default FourSectionTable;