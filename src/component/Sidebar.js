import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Book, People, Receipt } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        color: 'text.primary',
        minHeight: '100vh',
        boxShadow: 3,
      }}
    >
      <List>
        <ListItem button component={Link} to="/books">
          <ListItemIcon>
            <Book color="primary" />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemIcon>
            <People color="primary" />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/transactions">
          <ListItemIcon>
            <Receipt color="primary" />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
