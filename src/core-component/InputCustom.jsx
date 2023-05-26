import PropTypes from "prop-types"

function InputCustom({ idInput, typeInput, placeholderInput, icon }) {
    return (
        <div style={{ position: "relative" }}>
            <input type={typeInput} id={idInput}  placeholder={placeholderInput}/>
            <div style={{ content: " ", position: "absolute", left: 10, top: 12 }}>{icon}</div>
        </div>
    )
}

export default InputCustom

InputCustom.propTypes = {
    idInput: PropTypes.string.isRequired,
    typeInput: PropTypes.string.isRequired,
    placeholderInput: PropTypes.string,
    icon: PropTypes.element
}
