import React from "react";
import PropTypes from "prop-types"

export const Dropdown = ({elements, onChange }) => {
    return(
        <p>
            <label htmlFor="app-select">Choose an App</label>
            <select id="app-select" onChange={onChange}>
                {elements.map((elem,i)=>{
                    return(
                        <option key={i} value={elem.value} >{elem.name}</option>
                    )
                })}
            </select>
        </p>
    )
}

Dropdown.propTypes={
    elements: PropTypes.array,
    onChange: PropTypes.func
}