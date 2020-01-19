import React from 'react'
import { Form, Label } from 'semantic-ui-react'

export const TextInput = ({input, width, type, placeholder, meta: {touched, error}}) => {
    return (
        /*
            !!'abc' // Evaluates to true.
            !!null // Evaluates to false.

            provide all the input properties to the textarea property
        */
        <Form.Field error={touched && !!error}>            
            <input {...input} placeholder={placeholder} type={type} />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    );
};
