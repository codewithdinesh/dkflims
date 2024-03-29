import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import Image from 'next/image';
import { Drawer, ImageListItem, MenuList } from '@mui/material';
import { Router, useRouter } from 'next/router';

const pages = ['shows', 'characters', 'shop', "blogs", "about", "contact"];

const settings = ['account', 'signup', "login"];

const drawerWidth = 240;

const Appbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);




    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color='transparent'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* Desktop Logo */}
                    <ImageListItem sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{
                        cursor: "pointer"
                    }} >
                        <Link href={"/"}>
                            <Image src="/media/dk-flim-logo.webp" width={"120"} height={"50"} />
                        </Link>
                    </ImageListItem>


                    {/* Tablet/phone Nav */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>


                        <Drawer
                            variant="temporary"
                            color='black'
                            anchor="left"
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            keepMounted
                            sx={{

                                display: { md: "none" }
                                ,
                                width: drawerWidth,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: drawerWidth,
                                    boxSizing: 'border-box',
                                    backgroundColor: "#282d3e",
                                    boxShadow: "gray",

                                },

                            }}
                        >


                            <MenuList sx={{
                                color: "white"
                            }}>
                                {pages.map((page) => (

                                    < Link href={"/" + page} key={page} >

                                        <MenuItem key={page} onClick={handleCloseNavMenu} sx={{
                                            ":hover": {
                                                backgroundColor: "#ffffff46"
                                            }
                                        }}>

                                            <Typography textAlign="center" textTransform={"capitalize"}>{page}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </MenuList>

                        </Drawer>
                    </Box>


                    {/* Mobile/tablets Logo*/}
                    <Link href={"/#"} >

                        <ImageListItem
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            style={{
                                cursor: "pointer"
                            }}>

                            <Image src="/media/dk-flim-logo.webp"
                                width={"120"} height={"50"}
                            />
                        </ImageListItem>
                    </Link>




                    {/* Desktop Nav*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link href={"/" + page} key={page}>
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'inherit', fontWeight: "600", display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        {/* User avatar */}
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, }}>
                                <Avatar alt="Remy Sharp" sx={{ cursor: "pointer" }} />
                            </IconButton>
                        </Tooltip>


                        {/* Login , Logout, and Account Menu   */}
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <Link href={`/${setting}`} key={setting}>
                                    <MenuItem key={setting} onClick={handleCloseUserMenu} >

                                        {/* <Typography textAlign="center">{setting}</Typography> */}
                                        {setting}

                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>

                    </Box>
                </Toolbar>
            </Container>

        </AppBar >
    );
};
export default Appbar;
