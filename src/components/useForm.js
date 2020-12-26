import { useState } from "react";
import * as Constants from './Conts'
export function useForm(initialFValues) {
    const [values, setValues] = useState(initialFValues);
    const [loggedIn, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState({
        emailHelper: "",
        passwordHelper: "",
        emailError: false,
        passwordError: false,
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
                Constants.EMAIL_REGEX.test(value)
                    ? setErrors({ ...errors, emailHelper: "", emailError: false })
                    : setErrors({
                          ...errors,
                          emailHelper: "Email is not valid!",
                          emailError: true,
                      });
                break;
            case "password":
                value.length > 8
                    ? setErrors({ ...errors, passwordHelper: "", passwordError: false })
                    : setErrors({
                          ...errors,
                          passwordHelper: "Password should consists of atleast 8 characters",
                          passwordError: true,
                      });
                break;
            default:
                break;
        }

        setValues({
            ...values,
            [name]: value,
        });
    };

    return {
        values,
        setValues,
        handleInputChange,
        errors,
        loggedIn,
        setLoggedIn,
    };
}
