import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/kuinn-logo-transparent.png";
import { Box } from "@mui/material";

export const LandingPage = () => {
    return (
        <Box
            sx={{ 
                backgroundColor: "#09090b", 
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                py: 4
            }}
        >
            <Box 
                component="img" 
                src={Logo} 
                alt="Kuinn Logo" 
                sx={{ width: 100, height: 'auto', mb: 2 }} 
            />
            <Typography variant="h1" color="#f9f9fb">Kuinn</Typography>
            <Link
                component={RouterLink}
                to="/registration" 
                underline="hover" 
                sx={{ 
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: "#f9f9fb",
                    "&:hover": {
                    color: "#ff5722",
                } 
                }}
                >
                    Let's get you registered!
                </Link>
        </Box> 
    )
}