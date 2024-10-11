import { Box } from "@mui/material";
import { SideNav } from "../../components/SideBar";
import { RegisterForm } from "./Register";

export const Registration = () => {
    return (
        <main>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box sx={{ flexGrow: 1, backgroundColor: "#f9f9fb" }}>
                    <RegisterForm />
                </Box>
            </Box>
        </main>
    )
}