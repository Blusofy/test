/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title:   CONTENT FOOTER
 * Description: Content footer functionalities.
 * * */
import { Box, Button, Typography } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import Social from '../Social';

const links = (title) => [
    { name: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=#${title}` },
    { name: 'linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${title}` },
];
function ContentFooter() {
    const { currentTopic, currentChapter, currentContent } = useSelector((state) => state.content);
    const path = `${currentTopic}/${currentChapter}/${currentContent}`;
    return (
        <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            style={{ padding: '0.5rem' }}
        >
            <Button
                variant="text"
                startIcon={<EditIcon />}
                href={`${process.env.GITHUB_CONTENT_PREFIX}/${path.replaceAll('-', ' ')}.md`}
                target="blank"
            >
                Edit On Github
            </Button>
            <Box component="div" display="flex" alignItems="center">
                <Typography variant="button" color="textSecondary">
                    Share on-
                </Typography>
                <Social
                    links={links(
                        `${process.env.WEB_PREFIX}/${currentTopic}/${currentChapter}/${currentContent}`
                    )}
                />
            </Box>
        </Box>
    );
}
export default ContentFooter;
