import PropTypes from 'prop-types';

function NumberInput({
    value,
    onChange,
    validation,
    label="NUMBER", 
    min=0, 
    max=Number.MAX_SAFE_INTEGER, 
    stepValue=1, 
    placeholderValue="0"
}) {

    return (
        <div style={ {display:"flex", flexDirection:"column", justifyContent:"flex-start"} }>
            <p style={{textAlign: "left", margin: "0px"}}>{label}</p>
            <input 
            type="number" 
            min={min} 
            max={max} 
            step={stepValue} 
            placeholder={placeholderValue} 
            value={value} 
            onChange={e => {
                value = Number(e.target.value)
                if(validation(value)) {
                    onChange(Number(value))
                    e.target.value = String(value)
                }
            }}
            style={{width:"300px"}}></input>
        </div>
    )
}

NumberInput.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    validation: PropTypes.func.isRequired,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    stepValue: PropTypes.number,
    placeholderValue: PropTypes.string
}

export default NumberInput