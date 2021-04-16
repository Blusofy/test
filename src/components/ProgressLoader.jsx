/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB HEADER
 * Description: Website head section
 * * */
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

function Header() {
    const ref = useRef(null);
    const { topLoadingProgress } = useSelector((state) => state).content;

    useEffect(() => {
        if (topLoadingProgress === true) {
            ref.current.continuousStart();
        } else if (topLoadingProgress === false) {
            ref.current.complete();
        }
    }, [topLoadingProgress]);
    return (
        <>
            <LoadingBar color="#f11946" ref={ref} />
        </>
    );
}

export default Header;
