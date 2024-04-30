import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const Navbar = () => {

    const [value, setValue] = useState();

  return (
    <>
        <AppBar sx={{ backgroundColor: '#6B5895'}} position={'sticky'}>

            <Toolbar>
                <Typography>
                    <LibraryBooksOutlinedIcon/>
                </Typography>

                <Tabs sx={{ m: 'auto' }} textColor={'white'} value={value} onChange={(e, val) => setValue(val)}>
                    <Tab label="Add Book" LinkComponent={NavLink} to="/add" />
                    <Tab label="Books" LinkComponent={NavLink} to="/books" />
                    <Tab label="Home" LinkComponent={NavLink} to="/" />
                    <Tab label="About us" LinkComponent={NavLink} to="/about" />
                </Tabs>
            </Toolbar>

        </AppBar>

    </>
  )
}

export default Navbar