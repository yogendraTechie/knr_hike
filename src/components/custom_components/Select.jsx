import React from "react";
import Select from "react-select";

export default props => {
  return(
    <Select
      styles={props.styles !== undefined && props.styles}
      closeMenuOnSelect={true}
      isMulti={props.multi}
      name={props.name}
      options={props.options}
      className={props.classes !== undefined && props.classes}
      onChange={props.onChange}
      value={props.value}
      defaultValue={props.defaultSelected}
      key={props.dkey}
      isDisabled={props.disabled}
      placeholder={props.placeholder}
      autoBlur={true}
    />
  )
}
