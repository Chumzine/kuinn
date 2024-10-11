import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { courseOfStudy, level } from "./formOptions";
import { useDispatch } from "react-redux";
import { useRegister } from "../../hooks/useRegister";
import { updateUserCount } from "../../../features/redux/slices/userSlice";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    studentID: Yup.string().required("Student ID is required"),
    courseOfStudy: Yup.string().required("Course of Study is required"),
    level: Yup.string().required("Level is required"),
})

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const { handleRegistration, success, error } = useRegister();

    const formik = useFormik({
        initialValues: {
            fullName: "",
            studentID: "",
            courseOfStudy: "",
            level: ""
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            handleRegistration(values);
            if (success) {
                resetForm();
                dispatch(updateUserCount()); 
            };
        }
    });

    // const addUser = (user) => {
    //     user = formik.values;
    //     dispatch(updateUserCount(user))
    // }

    return (
        <>
        {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
                <AlertTitle>Success</AlertTitle>
                You have successfully registered!
            </Alert>
        )}

        {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>
        )}

        <Box 
            sx={{
                width: { xs: '70%', sm: 600 },
                margin: 'auto',
                mt: 18,
                padding: { xs: 2, sm: 4 },
                backgroundColor: '#faf9f6',
                borderRadius: 3,
                border: '1px solid #848486'
            }}
        >
            <Typography variant="h5" gutterBottom>Registration Form</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="studentID"
                    name="studentID"
                    label="Student ID"
                    value={formik.values.studentID}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.studentID && Boolean(formik.errors.studentID)}
                    helperText={formik.touched.studentID && formik.errors.studentID}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    id="courseOfStudy"
                    select
                    name="courseOfStudy"
                    label="Course of Study"
                    value={formik.values.courseOfStudy}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.courseOfStudy && Boolean(formik.errors.courseOfStudy)}
                    helperText={formik.touched.courseOfStudy && formik.errors.courseOfStudy}
                >
                    {courseOfStudy.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}    
                </TextField>
                <TextField
                    fullWidth
                    margin="normal"
                    id="level"
                    select
                    name="level"
                    label="Level"
                    value={formik.values.level}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.level && Boolean(formik.errors.level)}
                    helperText={formik.touched.level && formik.errors.level}
                >
                    {level.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}    
                </TextField>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 4 }}
                    disabled={!formik.isValid || formik.isSubmitting}
                >
                    Register
                </Button>
            </form>
        </Box>
        </>
    )    
}