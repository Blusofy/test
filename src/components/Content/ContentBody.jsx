/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: PROGRAMMING PAGE
 * Description: Core programming knowldage
 * * */

import { CardContent, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';
import { dracula } from '../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism';
import actionMethods from '../../../redux/actions/content';

const { fetchContentData } = actionMethods;

const NotFoundContent = () => (
    <div style={{ padding: '5rem 0rem' }}>
        <Typography align="center" variant="h4" color="textSecondary">
            404 NOT FOUND
        </Typography>
    </div>
);
const AnimateSkeleton = () => (
    <>
        <Skeleton height="50px" />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </>
);
const renderers = {
    code: ({ language, value }) => (
        <SyntaxHighlighter style={dracula} language={language}>
            {value}
        </SyntaxHighlighter>
    ),
};

const Content = () => {
    const { content } = useSelector((state) => state.content);
    if (content) {
        return (
            <ReactMarkdown plugins={[gfm]} renderers={renderers}>
                {content}
            </ReactMarkdown>
        );
    }
    return <NotFoundContent />;
};
function ContentBody() {
    const dispatch = useDispatch();
    const { isLoadingContent, currentTopic, currentChapter, currentContent } = useSelector(
        (state) => state.content
    );
    useEffect(() => {
        if (currentTopic && currentChapter && currentContent) {
            dispatch(fetchContentData(`${currentTopic}/${currentChapter}/${currentContent}`));
        }
    }, [currentTopic, currentChapter, currentContent]);
    return <CardContent>{isLoadingContent ? <AnimateSkeleton /> : <Content />}</CardContent>;
}
export default ContentBody;
