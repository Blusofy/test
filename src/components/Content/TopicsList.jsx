import {
    Collapse,
    Divider,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    FiberManualRecord as FiberManualRecordIcon,
} from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import appActionMethods from '../../../redux/actions/app';

const { removeExtAtLast } = appActionMethods;
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function CustomListItem({ chapterTitle, contentTitle, path }) {
    const classes = useStyles();
    const { currentContent, currentChapter } = useSelector((state) => state.content);
    const router = useRouter();
    return (
        <ListItem
            button
            className={classes.nested}
            onClick={() =>
                router.push(
                    `${path.replaceAll(' ', '-')}/${removeExtAtLast(contentTitle).replaceAll(
                        ' ',
                        '-'
                    )}`
                )
            }
        >
            <ListItemIcon>
                <FiberManualRecordIcon
                    style={{
                        color:
                            `${currentContent && currentContent.replaceAll('-', ' ')}.md` ===
                                contentTitle && currentChapter === chapterTitle.replaceAll(' ', '-')
                                ? '#303f9f'
                                : 'inherit',
                    }}
                />
            </ListItemIcon>

            {contentTitle && (
                <ListItemText primary={contentTitle.slice(3, contentTitle.length - 3)} />
            )}
        </ListItem>
    );
}
function NonContentListItem() {
    const classes = useStyles();
    return (
        <ListItem button className={classes.nested}>
            <ListItemIcon>
                <FiberManualRecordIcon />
            </ListItemIcon>

            <ListItemText primary="..." />
        </ListItem>
    );
}
function CollapseListItem({ chapterTitle }) {
    const [open, setOpen] = useState(false);
    const [subList, setSubList] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const { currentTopic, currentChapter } = useSelector((state) => state.content);
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                `${process.env.CONTENT_API_URI}/${currentTopic}/${chapterTitle}`
            );
            setSubList(res.data.map(({ name }) => name));
            setLoading(false);
        } catch (e) {
            setLoading(true);
        }
    };
    const handleClick = () => {
        setOpen(!open);
        if (!subList) {
            fetchData();
        }
    };
    useEffect(() => {
        if (currentChapter === chapterTitle.replaceAll(' ', '-')) {
            setOpen(true);
            if (!subList) {
                fetchData();
            }
        }
    }, []);
    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={chapterTitle.slice(3)} />
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Divider />
            {isLoading && <LinearProgress />}

            <Collapse in={open}>
                {!subList || subList.length === 0 ? (
                    <NonContentListItem />
                ) : (
                    subList.map((subListTitle) => (
                        <CustomListItem
                            key={subListTitle}
                            contentTitle={subListTitle}
                            chapterTitle={chapterTitle}
                            path={`/${currentTopic}/${chapterTitle}`}
                        />
                    ))
                )}
            </Collapse>
        </>
    );
}
function CustomSkeleton() {
    return (
        <div style={{ padding: '0rem 0.5rem' }}>
            <Skeleton height="3rem" style={{ minWidth: '8rem' }} />
        </div>
    );
}
function TopicLists() {
    const classes = useStyles();
    const { topics, isLoading } = useSelector((state) => state.content);
    if (isLoading) {
        return (
            <>
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
                <CustomSkeleton />
            </>
        );
    }
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <Typography variant="button">Programming Made Easy</Typography>
                </ListSubheader>
            }
            className={classes.root}
        >
            <Divider />
            {topics.map((title) => (
                <CollapseListItem chapterTitle={title} key={title} />
            ))}
        </List>
    );
}
export default TopicLists;
