import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import VerticalBar from '../components/VerticalBar'
import { Box, Container, Paper, Typography, Grid, Button, List, ListItem, Avatar, Divider, ListItemAvatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../store/reducers/userSlice'

const Users = () => {

  const users = useSelector(getAllUsers);
  const [resultUsers, setResultUsers] = useState([]);

  const usersGryffindor = users.allUsers.filter(user => user.house === "Gryffindor");
  const usersHufflepuff = users.allUsers.filter(user => user.house === "Hufflepuff");
  const usersSlytherin = users.allUsers.filter(user => user.house === "Slytherin");
  const usersRavenclaw = users.allUsers.filter(user => user.house === "Ravenclaw");

  const listUsers = (e) => {
    e.preventDefault();
    const value = e.target.getAttribute("value");
    value === "Gryffindor" ? setResultUsers(usersGryffindor) :
      value === "Slytherin" ? setResultUsers(usersSlytherin) :
        value === "Hufflepuff" ? setResultUsers(usersHufflepuff) :
          value === "Ravenclaw" ? setResultUsers(usersRavenclaw) :
            setResultUsers("")
  }


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
              <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>Elige la casa Hogwarts</Typography>
              <Container sx={{ textAlign: "center", mt:1, mb:2 }}>
                <Button value="Gryffindor" sx={{ color: "yellow", background: "red", mr: 1 }} onClick={listUsers}>Gryffindor</Button>
                <Button value="Slytherin" sx={{ color: "silver", background: "green", mr: 1 }} onClick={listUsers}>Slytherin</Button>
                <Button value="Hufflepuff" sx={{ color: "black", background: "yellow", mr: 1 }} onClick={listUsers}>Hufflepuff</Button>
                <Button value="Ravenclaw" sx={{ color: "orange", background: "blue" }} onClick={listUsers}>Ravenclaw</Button>
              </Container>
              <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {resultUsers.map((item, i) => (
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

export default Users