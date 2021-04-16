/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: ALGORITHMS
 * Description: Algorithms Content
 * * */
import {
    Code as CodeIcon,
    DataUsage as DataUsageIcon,
    Help as HelpIcon,
    ShowChart as ShowChartIcon,
} from '@material-ui/icons';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionMethods from '../../../../redux/actions/content';
import Content from '../../../components/Content';
import Layout from '../../../components/Layout';

const { updateContentPath, fetchTopicsData } = actionMethods;

const content = {
    programming: {
        title: 'Learn Programming',
        description: 'Learn the core concept of programming to this tutorials.',
        Icon: CodeIcon,
    },
    'data-structures': {
        title: 'Data Structures',
        description: 'Learn the core concept of Data Structures to this tutorials.',
        Icon: DataUsageIcon,
    },
    algorithms: {
        title: 'Algorithms',
        description: 'Learn the core concept of Algorithms to this tutorials.',
        Icon: ShowChartIcon,
    },
    javascript: {
        title: 'JavaScript',
        description: 'Learn the core concept of JavaScript to this tutorials.',
        imgPath: '/static/icons/js.png',
    },
    python: {
        title: 'Python',
        description: 'Learn the core concept of Python to this tutorials.',
        imgPath: '/static/icons/py.png',
    },
    'c++': {
        title: 'C++',
        description: 'Learn the core concept of C++ to this tutorials.',
        imgPath: '/static/icons/c++.png',
    },
    technologies: {
        title: 'Technologies',
        description: 'Most Popular techlogies',
        Icon: HelpIcon,
    },
};

function Core() {
    const router = useRouter();
    const { title, chapterid, contentid } = router.query;
    const dispatch = useDispatch();
    const { currentTopic } = useSelector((state) => state.content);

    useEffect(() => {
        if (title && chapterid && contentid) {
            if (currentTopic !== title) {
                dispatch(fetchTopicsData(title, chapterid, contentid));
            } else {
                dispatch(updateContentPath(title, chapterid, contentid));
            }
        }
    }, [title, chapterid, contentid]);
    return (
        <Layout>
            <Content contentHead={content[title]} />
        </Layout>
    );
}

export default Core;
