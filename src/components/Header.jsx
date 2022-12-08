import { Link, NavLink } from "react-router-dom";

export default function Header(props) {
    return <header className="main-header">
        <Link to={'/'} className={'nav-link logo'}>Logo</Link>
        <nav>
            <NavLink to={'/'} className={'nav-link'} activeClassName='currentPage' exact>Home</NavLink>
            <NavLink to={'/add-post'} className={'nav-link'} activeClassName='currentPage'>Add post</NavLink>
        </nav>
    </header>
}