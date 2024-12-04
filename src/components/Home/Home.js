import React, {useState} from 'react'
import './Home.css'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Home() {
    return(
        <div className='home-wrapper'>    
            <div className='home-navigation'>
                <Drawer
                    variant="permanent"
                    anchor="left"
                    sx={{
                        width: 240,
                        fontSize: 25,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                        width: 350,
                        boxSizing: 'border-box',
                        backgroundColor: '#ffffff',
                        border: 'none',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        },
                    }}
                >
                     <div className='home-header'>
                        <span className='logo-text'>Turing</span>
                        <div className="header__logo"></div>
                    </div>
                <List>
                    {[
                    { text: 'Home', icon: <HomeIcon /> },
                    { text: 'Notifications', icon: <NotificationsIcon /> },
                    { text: 'Profile', icon: <AccountCircleIcon /> },
                    ].map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                    ))}
                </List>
        </Drawer>
            </div>
        </div>
    )

}
export default Home