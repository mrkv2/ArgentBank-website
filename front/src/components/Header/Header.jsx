import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setLogOut } from "../../redux/reducers/userAuthSlice"
import { resetProfile } from "../../redux/reducers/profileSlice"
import logo from "../../assets/images/argentBankLogo.png"

export default function Header() {
    const token = useSelector(state => state.userAuth.token)
    const profile = useSelector((state) => state.profile)
    const dispatch = useDispatch()

    return (
        <header>
            <nav className="main-nav">
                <Link
                    className="main-nav-logo"
                    to="./" >
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {token && (
                        <Link
                            className="main-nav-item"
                            to="./user">
                            {profile.userName}
                        </Link>
                    )}
                    <Link
                        className="main-nav-item"
                        to={token ? "./" : "./sign-in/"}
                        onClick={() => {
                            if (token) {
                                dispatch(setLogOut({}))
                                dispatch(resetProfile())
                            }
                        }}>
                        <i className="fa fa-user-circle"></i>
                        {token ? " Sign Out" : " Sign In"}
                    </Link>
                    {!token && (
                        <Link
                            className="main-nav-item"
                            to="./sign-up">
                            Sign Up
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}