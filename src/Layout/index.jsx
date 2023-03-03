import React from 'react'
import { AppBar, Toolbar, Container, Typography, Box, IconButton } from '@mui/material'

import { Search, SearchIconWrapper, StyledInputBase } from './component.styled'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
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
                <Box >
                    {children}
                </Box>
            </Container>
        </>

    )
}

export default Layout