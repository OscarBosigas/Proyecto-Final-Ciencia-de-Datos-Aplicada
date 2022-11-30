import React from 'react'
import PropTypes from 'prop-types'
import Select from "react-select";


const SelectPanel = props => {
  return (
    <div className="SelectPanel">
      <h2>{props.title}</h2>
      <Select
        options={props.options}
        id={props.id}
        onChange={(choise) => props.setSelectedOption(choise.value)}
      />
    </div>
  );
}

SelectPanel.propTypes = {
    options: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    setSelectedOption: PropTypes.func.isRequired
}

export default SelectPanel