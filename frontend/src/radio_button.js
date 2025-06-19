
export default function EmpireRadioButton(props) {
    const { isSelected, onClick } = props;
    return (
        <div className="empire-radio-button" role={'button'} onClick={onClick} data-testid="empire-radio-button">
            {isSelected ? (<div className="empire-radio-button-inner" data-testid="empire-radio-button-inner"></div>) : (<></>)}
        </div>
    );
}