/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: HOME PAGE
 * Description: Web Home Page
 * * */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actionMethods from '../../redux/actions/app';
import commonComponents from '../components/common';
import Explore from '../components/Explore';
import Layout from '../components/Layout';
import Sldie from '../components/Slide';
import Tutorials from '../components/Tutorials';

const { handleChangeSelectMenu } = actionMethods;

const { Margin } = commonComponents;
export default function name() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handleChangeSelectMenu('/'));
    }, []);
    return (
        <>
            <Layout>
                <Margin />
                <Margin />

                <Sldie />
                <Margin />
                <Tutorials />
                <Margin />
                <Explore />
                <Margin />
            </Layout>
        </>
    );
}
