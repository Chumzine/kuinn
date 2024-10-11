import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export const StudentCount = () => {
    const studentCount = useSelector((state) => state.user.value)

    return (
        <Box
            sx={{
                width: { xs: '20%', sm: 100 },
                margin: 'auto',
                padding: { xs: 4, sm: 8 },
                backgroundColor: '#848486',
                borderRadius: 3,
                border: '1px solid #09090b'
            }}
        >
            <Typography variant="h4" color="#09090b">{studentCount}</Typography>
        </Box>
    )
}