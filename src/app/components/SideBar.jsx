import React from "react";
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { Box } from "@mui/material";


export const SideNav = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    return (
        <Box sx={{ width: { xs: '30%', sm: 400 }, bgcolor: '#09090b', textAlign: 'center', height: '100vh' }}>
            <Typography variant="h4" color="#f9f9fb" sx={{ mb:12, mt: 4 }}>Kuinn</Typography>
            <List component="nav">
                <ListItem>
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                        component={RouterLink} to="/registration"
                    >
                        <ListItemText 
                            primary="Register" 
                            primaryTypographyProps={{
                                sx: { 
                                fontSize: '1.5rem',
                                color: '#f9f9fb',
                                 
                                }
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                        component={RouterLink} to="/dashboard"
                    >
                        <ListItemText 
                            primary="View" 
                            primaryTypographyProps={{
                                sx: { 
                                fontSize: '1.5rem',
                                color: '#f9f9fb', 
                                }
                            }}
                        />
                    </ListItemButton>
                </ListItem>
            </List> 
        </Box>
    )
}