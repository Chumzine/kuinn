import { ThemeProvider } from "@emotion/react";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { courseOfStudy, level } from "./formOptions";
import { useDispatch } from "react-redux";


const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    studentID: Yup.string().required("Student ID is required"),
    courseOfStudy: Yup.string().required("Course of Study is required"),
    level: Yup.string().required("Level is required"),
})

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            fullName: "",
            studentID: "",
            courseOfStudy: "",
            level: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    const addUser = () => {
        user = formik.values;
        dispatch
    }

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Box>
                    <Typography variant="" gutterBottom>Registration Form</Typography>
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
                            sx={{ mt: 4,
                            }}
                        >Register</Button>
                    </form>
                </Box>
            </main>
        </ThemeProvider>
    )    
}