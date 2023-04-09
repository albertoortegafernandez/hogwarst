import React, { useEffect, useState } from 'react'
import NavBar from "../components/NavBar"
import VerticalBar from '../components/VerticalBar'
import { Box, Container, Paper, List, ListItem, ListItemAvatar, Avatar, Typography, Divider } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useDispatch, useSelector } from "react-redux";
import { addUsers, getAllUsers } from '../store/reducers/userSlice'


const Home = () => {

    const dispatch = useDispatch();
    const users = useSelector(getAllUsers);

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters/students")
            .then(response => response.json())
            .then(data => dispatch(addUsers(data)))
    }, [])
    const principalUsers = users.allUsers.slice(0, 10);

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={2}>
                        <VerticalBar />
                    </Grid>
                    <Grid item xs={10}>
                        <Container maxWidth="md">
                            <Paper elevation={8} >
                                <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>Personajes Principales</Typography>
                                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    {principalUsers.map((item, i) => (
                                        <>
                                            <ListItem key={i} >
                                                <ListItemAvatar>
                                                    <Avatar alt="Remy Sharp" src={item.image} />
                                                </ListItemAvatar>
                                                <Typography
                                                    variant="body1"
                                                    color="text.primary"
                                                    sx={{ mr: 4 }}
                                                >
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    variant="body3"
                                                    color="text.secondary"
                                                >
                                                    {item.house}
                                                </Typography>
                                            </ListItem>
                                            <Divider variant="inset" component="li" />
                                        </>
                                    ))}
                                </List>
                            </Paper>
                        </Container>
                    </Grid>
                </Grid>
        </Box >
        </>
    )
}

export default Home