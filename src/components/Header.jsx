/**
 * Date:01/04/2021
 * Author: Muhammad Minhaj
 * Title: WEB HEADER
 * Description: Website head section
 * * */
import Navbar from './Navbar/Navbar';
import TopLoader from './ProgressLoader';

function Header() {
    return (
        <header>
            <TopLoader />
            <Navbar />
        </header>
    );
}

export default Header;
