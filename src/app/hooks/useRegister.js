import { useDispatch } from "react-redux";
import { register } from "../../features/redux/slices/registerSlice";
import { useState, useEffect } from "react";

export const useRegister = () => {
    const dispatch = useDispatch();
    const [success, setSuccess ] = useState(false);
    const [error, setError] = useState(null);

    const handleRegistration = (values) => {
        const { fullName, studentID, courseOfStudy, level } = values;

        setSuccess(false);
        setError(null);

        if (fullName && studentID && courseOfStudy && level) {
            dispatch(register({ fullName, studentID, courseOfStudy, level }));
            setSuccess(true);
        } else {
            setError("Please fill in all fields");
        }
    };

    useEffect(() => {
        if (success || error) {
            const timer = setTimeout(() => {
                setError(null);
                setSuccess(false);
            }, 4000);

            return () => clearTimeout(timer);
        }

    }, [error, success]);

    return { handleRegistration, error, success };
};