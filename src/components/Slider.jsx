import PropTypes from 'prop-types';

function Slider({
    value, 
    onChange,
    color = null
}) {


    return(
        <div className="slider-container"> 
            <input 
                type={"range"} 
                min={0} 
                max={255} 
                value={value} 
                className="slider" 
                onChange= { e => 
                    onChange(e.target.value)
                }
                style = {{"--thumb-color": color ?? "rgb(255,255,255)"}}
            />
        </div>
        )
    
}

Slider.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func,
    color: PropTypes.string
}

export default Slider