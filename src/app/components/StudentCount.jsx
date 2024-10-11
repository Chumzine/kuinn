import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export const StudentCount = () => {
    const studentCount = useSelector((state) => state.user.user)

    return (
        <Box
            sx={{
                width: { xs: '20%', sm: 200 },
                mt: 4,
                ml: 10,
                mb: 4,
                padding: { xs: 4, sm: 8 },
                backgroundColor: '#f9f9fb',
                borderRadius: 3,
                border: '1px solid #09090b'
            }}
        >
            <Typography variant="h4" color="#09090b">{studentCount}</Typography>
        </Box>
    )
}