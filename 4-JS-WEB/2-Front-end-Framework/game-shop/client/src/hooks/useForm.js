import { useState } from "react"

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues);

    const changeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(formValues);
    };

    const changeFormValues = (newFormValues) => {
        setFormValues(newFormValues)
    };

    return { formValues, changeHandler, onSubmit, changeFormValues };
};