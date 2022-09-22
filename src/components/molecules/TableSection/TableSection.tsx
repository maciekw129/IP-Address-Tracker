import Text from '../../atoms/Text/Text';
import './style.css';

interface TableSectionProps {
    sectionTitle: string;
    sectionValue: string;
}

const TableSection = ({ sectionTitle, sectionValue }: TableSectionProps) => {

    return(
      <div className="tableSection">
        <Text
            textContent={sectionTitle}
            textWeight="500"
            isSmallSize
            isTextUppercase
            textColor='darkGray'
            isSpacingLonger
        />
        <Text
            textContent={sectionValue}
            textWeight="700"
        />
      </div>  
    )
};

export default TableSection;