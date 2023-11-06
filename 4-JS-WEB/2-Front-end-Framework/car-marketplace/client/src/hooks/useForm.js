import { useState } from "react"

export const useForm = (initialValues = {}, onSubmitHandler, parseToNumberValues = []) => {
    const [formValues, setFormValues] = useState(initialValues);

    const changeHandler = (e) => {
        let { name, value } = e.target;

        if (parseToNumberValues.includes(name)) {
            value = Number(value);
        }

        setFormValues(state => ({ ...state, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(formValues);
    };

    const changeFormValues = (newFormValues) => {
        setFormValues(newFormValues);
    };

    return { formValues, changeHandler, onSubmit, changeFormValues };
};