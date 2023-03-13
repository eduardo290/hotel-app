import React from 'react'
import { Container, Box } from '@mui/material'

function Layout({ children }) {
    return (
        <>
            {/* <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Inmobiliaria App
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper><StyledInputBase
                            placeholder="Buscar propiedad.."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar> */}
            <Container maxWidth="xl">
                <header>
                    <h1>Hotel React</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Inicio</a>
                            </li>
                            <li>
                                <a href="/PaginaCheckIn">Check In</a>
                            </li>
                            <li>
                                <a href="/contacto">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Box >
                    {children}
                </Box>
            </Container>
        </>

    )
}

export default Layout