import React, {useState, } from "react";

type validateHandler = (value: string) => boolean;

const useInput = (validateValue: validateHandler) => {
    const [value, setValue] = useState<string>('');
    const [isTought, setIsTought] = useState<boolean>(false);

    const isValueValid = validateValue(value);
    const isValid = isValueValid || !isTought;

    const inputChangeHandler = (value: string): void => {
        setValue(value);
    };

    const blurHandler = (): void => {
        setIsTought(true);
    };

    const resetValue = (): void => {
        setValue('');
        setIsTought(false);
    };

    return {
        value,
        inputChangeHandler,
        isValueValid,
        isValid,
        blurHandler,
        resetValue
    }
}

export default useInput;