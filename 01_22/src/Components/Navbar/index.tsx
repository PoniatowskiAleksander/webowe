import {routes} from '../../Helpers/router'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                {routes.map((route) => (
                    <li key={route.path}>
                        <Link to={route.path}>{route.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar