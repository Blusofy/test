/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB FOOTTER
 * Description: Web footer section
 * * */
import { Box, IconButton } from '@material-ui/core';
import {
    Facebook as FacebookIcon,
    GitHub as GithubIcon,
    LinkedIn as LinkedInIcon,
    YouTube as YoutubeIcon,
} from '@material-ui/icons';

// const links = [
//     {
//         icon: <FacebookIcon />,
//         href: 'https://facebook.com',
//     },
//     {
//         icon: <GithubIcon />,
//         href: 'https://github.com',
//     },
//     {
//         icon: <LinkedInIcon />,
//         href: 'https://linkedin.com',
//     },
//     {
//         icon: <YoutubeIcon />,
//         href: 'https://youtube.com',
//     },
// ];

const iconsList = {
    facebook: <FacebookIcon />,
    github: <GithubIcon />,
    linkedin: <LinkedInIcon />,
    youtube: <YoutubeIcon />,
};

function Social({ links }) {
    return (
        <Box display="flex">
            {links.map(({ name, href }) => (
                <IconButton color="primary" key={name} href={href} target="blank">
                    {iconsList[name]}
                </IconButton>
            ))}
        </Box>
    );
}

export default Social;
