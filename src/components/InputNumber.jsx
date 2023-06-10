import React from 'react'
import PropTypes from 'prop-types'

const InputNumber = (props) => {
    const onChange = event => {
        props.onChange(event.target.value);
      };
  return (
    <div className='flex flex-col mb-5'>
        <label className='leading-5 mb-1' htmlFor={props.name}>{props.label}</label>
        <input className='w-full h-8 border rounded-md px-2 placeholder:text-sm' type="number" name={props.name} placeholder='Masukkan Harga Beli' value={props.value} onChange={onChange}/>
    </div>
  )
}

InputNumber.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

export default InputNumber