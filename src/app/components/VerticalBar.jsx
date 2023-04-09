import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box, List, CssBaseline, Divider, IconButton, ListItem, ListItemButton,
    ListItemIcon, ListItemText,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';

import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function VerticalBar() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={open} >
                <DrawerHeader>
                    <Box sx={{ p: 5, mr: 5 }}>
                        <ImportantDevicesIcon sx={{ color: "white" }} />
                    </Box>
                    <IconButton onClick={() => setOpen(!open)}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block', color: "white" }}>
                        <ListItemButton onClick={() => { navigate("/home") }}
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',
                                }}
                            >
                                <HomeIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block', color: "white" }}>
                        <ListItemButton onClick={() => { navigate("/users") }}
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',
                                }}
                            >
                                <PeopleIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Gaming"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block', color: "white" }}>
                        <ListItemButton onClick={() => { navigate("/button") }}
                            sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                            <ListItemIcon
                                sx={{
                                    minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',
                                }}
                            >
                                <SmartButtonIcon sx={{ color: "white" }} />
                            </ListItemIcon>
                            <ListItemText primary={"ButtonEffect"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}