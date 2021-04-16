import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import router from 'next/router';
import React from 'react';

export default function InsetList({ lists, icon }) {
    return (
        <List component="nav" aria-label="contacts">
            {lists.map(({ name, url }) => (
                <ListItem
                    button
                    onClick={() => router.push(url)}
                    key={name}
                    style={{ paddingLeft: '0px' }}
                >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    );
}
