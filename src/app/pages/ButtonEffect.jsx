import React from 'react'
import NavBar from '../components/NavBar'
import VerticalBar from '../components/VerticalBar'
import { Box, Container, Paper } from '@mui/material'
import Grid from '@mui/material/Grid'

const ButtonEffect = () => {
    return (
        <>
            <>
                <Box sx={{ display: "flex" }}>
                    <Grid container xs={12}>
                        <Grid container xs={12}>
                            <NavBar />
                        </Grid>
                        <Grid item xs={2}>
                            <VerticalBar />
                        </Grid>
                        <Grid item xs={10}>
                            <Container maxWidth="md">
                                <Paper elevation={8} >
                                    <div className='fondo2'>
                                        <a className='btn boton2' href="#">BOTÓN
                                            <span></span>
                                        </a>
                                    </div>
                                </Paper>
                            </Container>
                        </Grid>
                    </Grid>
                </Box >
            </>
        </>
    )
}

export default ButtonEffect