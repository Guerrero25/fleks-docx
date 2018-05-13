import React from 'react'

import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

const Input = ({ type, placeholder, name, value, onChange, glyph }) => {
    return (
        <FormGroup>
            <InputGroup>
                <FormControl
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <InputGroup.Addon>
                    <Glyphicon glyph={glyph} />
                </InputGroup.Addon>
            </InputGroup>
        </FormGroup>
    )
}

export default Input