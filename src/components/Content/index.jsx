/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: CONTENT COMPONENT
 * Description: Content component for showing content on the website as tutorials
 * * */
import { Box, Card, Drawer, Fab, Grid, useMediaQuery } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import commonComponents from '../common';
import ContentBody from './ContentBody';
import ContentFooter from './ContentFooter';
import ContentHead from './ContentHead';
import ContentWelcome from './ContentWelcome';
import Topics from './TopicsList';

const { Margin } = commonComponents;

function Content({ contentHead }) {
    const [isOpenDrawer, setDrawer] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const { currentContent } = useSelector((state) => state.content);
    const handleClick = () => {
        setDrawer(!isOpenDrawer);
    };

    return (
        <>
            <ContentHead {...contentHead} />
            <br />
            <br />

            <Grid container>
                <Grid item sm={3}>
                    {isMobile ? (
                        <Drawer open={isOpenDrawer} onClose={handleClick}>
                            <Topics />
                        </Drawer>
                    ) : (
                        <Card style={{ marginRight: '1rem' }}>
                            <Topics />
                        </Card>
                    )}
                </Grid>
                <Grid item sm={9}>
                    <Card>
                        {currentContent ? <ContentBody /> : <ContentWelcome />}
                        {currentContent && <ContentFooter />}
                        {isMobile && (
                            <Box position="fixed" bottom="3%" left="5%" zIndex="999">
                                <Fab onClick={handleClick}>
                                    <MenuIcon />
                                </Fab>
                            </Box>
                        )}
                    </Card>
                </Grid>
            </Grid>
            <Margin />
        </>
    );
}
export default Content;
