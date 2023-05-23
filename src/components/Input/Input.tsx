import React from 'react'
import { InputProps } from './Input.props'

const Input = ({ type, label, setState, state }: InputProps) => {
    return (
        <div className="form-floating mb-3">
            <input type={type} className="form-control" onChange={(e) => setState(e.target.value)} value={state} id={label} placeholder="name@example.com" />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}

export default Input