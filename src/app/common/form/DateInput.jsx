import React from 'react'
import { Form, Label} from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const DateInput = ({input, width, placeholder, meta: {touched, error}, ...rest}) => {
    //select : create a JavaScript Date
    //onChangeRaw avoid user to type in the field date
    return (
        <Form.Field error={touched && !!error}>
            <DatePicker 
            {...rest}
            placeholderText={placeholder}
            selected={input.value ? new Date(input.value) : null}
            onChange={input.onChange}
            onBlur={input.onBlur}
            onChangeRaw={(e) => e.preventDefault()}
            />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    )
}
