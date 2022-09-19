import React from "react";
import PropTypes from "prop-types";

export const Input = ({ type, placeholder, value, pratiMiIzmeni, name, changeInputType, renderTextArea, changeField }) => {

    return (
        <p>
            {renderTextArea ?
                <textarea
                    rows={8}
                    cols={20}
                    onChange={pratiMiIzmeni}
                /> :
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={pratiMiIzmeni}
                    name={name}
                />
            }
            {name === "password" &&
                <button type="button" className="eye-button" onClick={changeInputType}>
                    <i className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                </button>}
            {name === 'comment' &&
                <button type="button" onClick={changeField} className='eye-button'>
                    <i className={renderTextArea ? 'fa fa-comment-o' : 'fa fa-comments-o'}></i>
                </button>
            }
        </p>
    )
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    pratiMiIzmeni: PropTypes.func,
    name: PropTypes.string,
    changeInputType: PropTypes.func,
    renderTextArea: PropTypes.bool,
    changeField: PropTypes.func
}