import React from 'react';
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';
function AppFormField({ name, ...otherprops }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => {setFieldTouched(name)}}
                onChangeText={handleChange(name)}
                {...otherprops} />                   
            <ErrorMessage  error={errors[name]} visible={touched[name]}  />
        </>
    );
}

export default AppFormField;