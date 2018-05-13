import React from 'react'

import { FormGroup, Button, Glyphicon } from 'react-bootstrap'

import Input from './Input'

const FormData = ({ onChange, addressee, remitter, onSubmit }) => {
    return (
        <form className='form' >
            <h2>Letter Data</h2>
            <Input
                type='text'
                name='addressee'
                glyph='share-alt'
                placeholder='Addressee'
                value={addressee}
                onChange={onChange}
            />
            <Input
                type='text'
                name='remitter'
                glyph='paperclip'
                placeholder='Remitter'
                value={remitter}
                onChange={onChange}
            />
            <FormGroup>
                <Button
                    onClick={onSubmit}
                    bsStyle='success'
                    disabled={addressee === '' || remitter === ''}
                >
                    Save As <Glyphicon glyph="save" />
                </Button>
            </FormGroup>
        </form>
    )
}

export default FormData 