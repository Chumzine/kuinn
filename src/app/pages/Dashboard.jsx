import { Box } from "@mui/material";
import { SideNav } from "../components/SideBar";
import { StudentCount } from "../components/StudentCount";
import { StudentDataTable } from "../components/StudentTable";

export const Dashboard = () => {
    return (
        <main>
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box sx={{ flexGrow: 1 }}>
                    <StudentCount />
                    <StudentDataTable />
                </Box>
            </Box>
        </main>
    )
}