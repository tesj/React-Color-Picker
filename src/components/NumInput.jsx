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
            onChange={e => { //lambda for onChange event
                value = Number(e.target.value)
                if(validation(value)) { //if the value is valid, update the value prop
                    onChange(Number(value))
                    e.target.value = (value) //set the text to match the prop value
                }
            }}
            className="textbox" />
        </div>
    )
}

//specify the prop(erty) types for the component function
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