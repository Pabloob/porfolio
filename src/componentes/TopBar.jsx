import React, { useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import "../css/TopBar.css";
import {
    Box, AppBar as MuiAppBar, Toolbar, CssBaseline, Typography, IconButton, Drawer,
    List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider
} from '@mui/material';

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import CustomSwitch from "./CustomSwitch";

const sideBarWidth = 250;

const menuItems = [
    { text: 'Proyectos', icon: <FolderRoundedIcon />, id: 'proyectos' },
    { text: 'Lenguajes', icon: <CodeRoundedIcon />, id: 'lenguajes' },
    { text: 'Contacto', icon: <ContactMailRoundedIcon />, id: 'contacto' }
];

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${sideBarWidth}px)`,
        marginRight: sideBarWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

function TopBar() {
    const [open, setOpen] = useState(false);

    const handleScroll = useCallback((id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    }, []);

    const handleMenuClick = useCallback((id) => () => handleScroll(id), [handleScroll]);

    return (
        <Box>
            <CssBaseline />
            <AppBar open={open} className="topbar">
                <Toolbar>
                    <Typography className="topbar-title">
                        Pablo Orbea Benitez
                    </Typography>

                    <CustomSwitch />
                    {!open && (
                        <IconButton className="topbar-menu-icon" onClick={() => setOpen(true)}>
                            <MenuRoundedIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                variant="persistent"
                anchor="right"
                open={open}
                classes={{ paper: 'topbar-sidebar' }}
                sx={{
                    '& .MuiDrawer-paper': { width: sideBarWidth }
                }}
            >
                <IconButton className="topbar-menu-icon" onClick={() => setOpen(false)}>
                    <ChevronLeftRoundedIcon />
                </IconButton>

                <Divider className="topbar-sidebar-divider" />

                <List>
                    {menuItems.map(({ text, icon, id }) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={handleMenuClick(id)}>
                                <ListItemIcon className="topbar-sidebar-icon">{icon}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider className="topbar-sidebar-divider" />
            </Drawer>
        </Box>
    );
}

export default TopBar;
