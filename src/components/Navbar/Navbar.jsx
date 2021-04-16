/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB NAVBAR
 * Description: Website navbar
 * * */
import {
    AppBar,
    Box,
    Container,
    CssBaseline,
    Drawer,
    Grid,
    IconButton,
    Toolbar,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import actionMethods from '../../../redux/actions/app';
import Logo from '../Logo';
import CustomSearch from '../Search';
import ScrollOnHide from './ScrollOnHide';
import style from './style.module.css';
import TabBar from './TabBar';

const { handleClickMobileMenu } = actionMethods;
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const informativeCodingLogo = (
    <Link href="/">
        <a>
            <Logo width="70px" height="70px" />
        </a>
    </Link>
);
const MobileView = () => {
    const { isOpenMobileMenu } = useSelector((state) => state).app;

    const dispatch = useDispatch();
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
                {informativeCodingLogo}
            </Box>
            <Box display="flex">
                <CustomSearch />
                <IconButton onClick={() => dispatch(handleClickMobileMenu())}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <Drawer
                anchor="right"
                open={isOpenMobileMenu}
                onClose={() => dispatch(handleClickMobileMenu())}
            >
                <TabBar orientation="vertical" />
            </Drawer>
        </Box>
    );
};

const DesktopView = () => {
    const matches = useMediaQuery('(max-width:600px)');

    return (
        <Grid container>
            <Grid item sm={1}>
                {informativeCodingLogo}
            </Grid>
            <Grid item sm={10}>
                {!matches && (
                    <div className={style.navbar}>
                        <TabBar />
                    </div>
                )}
            </Grid>
            <Grid item sm={1}>
                <Box
                    component="div"
                    height="100%"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
};

export default function Navbar(props) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <ScrollOnHide {...props}>
                <AppBar color="default">
                    <Toolbar>
                        <Container>{isMobile ? <MobileView /> : <DesktopView />}</Container>
                    </Toolbar>
                </AppBar>
            </ScrollOnHide>
        </div>
    );
}
