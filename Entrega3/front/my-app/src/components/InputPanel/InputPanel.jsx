import React from 'react'
import PropTypes from 'prop-types'
import "./inputPanel.scss";

const InputPanel = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <input id={props.id} className="input-text" type='number' onChange={(val) =>props.setSelectedOption(val.target.value)} />
    </div>
  );
}

InputPanel.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  setSelectedOption: PropTypes.func
};

export default InputPanel