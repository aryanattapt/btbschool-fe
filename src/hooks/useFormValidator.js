import { useEffect, useState } from 'react';

export function useEmailValidator(isRequired = null, fieldName = '', initialEmail = '') {
    const [email, setEmail] = useState(initialEmail);
    const [error, setError] = useState('');

    const validateEmail = (emailToValidate, isRequired) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(isRequired && !emailToValidate){
            setError(fieldName + ' is mandatory!');
        } else if (emailToValidate && !emailPattern.test(emailToValidate)) {
            setError('Invalid email address for field ' + fieldName);
        } else {
            setError('');
        }
    };

    const handleChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail, isRequired);
    };

    useEffect(() => {
        validateEmail(initialEmail, isRequired);
    }, [initialEmail]);

    return {email, error, handleChange};
}

export function usePhoneNumberValidator(isRequired = null, fieldName = '', initialPhoneNumber = '') {
    const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
    const [error, setError] = useState('');
    const e164Regex = /^\+\d{1,15}$/;
  
    const validatePhoneNumber = (phoneNumberToValidate, isRequired) => {
        if(isRequired && !phoneNumberToValidate){
            setError(fieldName + ' is mandatory');
        } else if (phoneNumberToValidate && !e164Regex.test(phoneNumberToValidate)) {
            setError('Invalid phone number format. Must be in E.164 format for field: ' + fieldName);
        } else {
            setError('');
        }
    };
  
    const handleChange = (e) => {
        const newPhoneNumber = e.target.value;
        setPhoneNumber(newPhoneNumber);
        validatePhoneNumber(newPhoneNumber, isRequired);
    };

    useEffect(() => {
        validatePhoneNumber(initialPhoneNumber, isRequired);
    }, [initialPhoneNumber]);
  
    return {phoneNumber, error, handleChange};
}

export function useStringValidator(initialValue = '', isRequired = null, fieldName = '', minLength = Number.MIN_SAFE_INTEGER, maxLength = Number.MAX_SAFE_INTEGER) {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
  
    const validate = (valueToValidate, isRequired) => {
        if (isRequired && !valueToValidate) {
            setError('Value cannot be null or empty for field: ' + fieldName);
        } else if (valueToValidate && valueToValidate.length < minLength) {
            setError(`Value must be at least ${minLength} characters long for field: ` +  fieldName);
        } else if (valueToValidate && valueToValidate.length > maxLength) {
            setError(`Value must be at most ${maxLength} characters long for field: ` + fieldName);
        } else {
            setError('');
        }
    };
  
    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        validate(newValue, isRequired);
    };

    useEffect(() => {
        validate(initialValue), isRequired;
    }, [initialValue]);
  
    return {value, error, handleChange};
  }
  