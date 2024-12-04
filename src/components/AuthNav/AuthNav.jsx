import { useState } from "react";
import css from "./AuthNav.module.css";
import logoutIcon from "/icons/logout.svg";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import SignUp from "../SignUp/SignUp.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
    selectIsLoggedIn,
    selectUser,
} from "../../redux/auth/selectorsAuth.js";
import { logoutUser } from "../../redux/auth/operationsAuth.js";

const AuthNav = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    const handleSignUpOpen = () => setIsSignUpOpen(true);
    const handleSignInOpen = () => setIsSignInOpen(true);

    const handleSignUpClose = () => setIsSignUpOpen(false);
    const handleSignInClose = () => setIsSignInOpen(false);

    return (
        <div className={css.container}>
            {!isLoggedIn && (
                <div className={css.unsignWrapper}>
                    <button
                        type="button"
                        onClick={handleSignInOpen}
                        className={css.buttonLogin}
                    >
                        <img
                            src={logoutIcon}
                            alt="Logout icon"
                            className={css.logoutIcon}
                        />
                        <span className={css.loginText}>log in</span>
                    </button>
                    <button
                        type="button"
                        onClick={handleSignUpOpen}
                        className={css.buttonRegister}
                    >
                        Registration
                    </button>
                </div>
            )}
            {isLoggedIn && (
                <div className={css.signWrapper}>
                    <button
                        type="button"
                        onClick={() => dispatch(logoutUser())}
                        className={css.loginButton}
                    >
                        <img
                            src={logoutIcon}
                            alt="Logout icon"
                            className={css.logoutIcon}
                        />
                        <span className={css.loginText}>Log out</span>
                    </button>
                    <div className={css.buttonRegister}>
                        {user?.name || "User"}
                    </div>
                </div>
            )}
            {isSignUpOpen && (
                <ModalWindow
                    onCloseModal={handleSignUpClose}
                    modalIsOpen={isSignUpOpen}
                >
                    <SignUp modalClose={handleSignUpClose} />
                </ModalWindow>
            )}
            {isSignInOpen && (
                <ModalWindow
                    onCloseModal={handleSignInClose}
                    modalIsOpen={isSignInOpen}
                >
                    <SignIn modalClose={handleSignInClose} />
                </ModalWindow>
            )}
        </div>
    );
};

export default AuthNav;
