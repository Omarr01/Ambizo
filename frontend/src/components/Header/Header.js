import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import CountryModal from "../CountryModal/CountryModal";
import UserMenu from "../UserMenu/UserMenu"
import canChamLogo from '../../images/CanChamLogo.png'
import SearchBar from '../SearchBar/SearchBar';
import CountryIcon from '../../images/CountryIcon.png'
import ArrowDownIcon from '../../images/ArrowDownIcon.png'
import ArrowUpIcon from '../../images/ArrowUpIcon.png'

function Header() {

    const [countryModal, setCountryModal] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [userMenu, setUserMenu] = React.useState(false);
    const navigate = useNavigate();
    let loggedInUser = JSON.parse(sessionStorage.getItem("User"));

    const toggleCountryModal = () => {
        setCountryModal(prevModal => !prevModal);
    };
    
    const toggleLogIn = () => {
        navigate("/login");
        // sessionStorage.setItem('loggedIn', true);
        // setIsLoggedIn(true);
    }

    const toggleLogOut = () => {
        sessionStorage.removeItem('Type');
        sessionStorage.removeItem('User');
        setIsLoggedIn(false);
        setUserMenu(false)
        navigate("/");
        navigate(0);
    }

    const toggleUserMenu = () => {
        setUserMenu(prevMenu => !prevMenu);
    }

    React.useEffect(() => {
        if(sessionStorage.getItem("Type")){
            setIsLoggedIn(true)
        }
    }, []);

    return (
        <>
            <nav>
                <Link to="/">
                    <img src={canChamLogo} alt='CanCham Logo' className='nav--logo'/>
                </Link>
                <SearchBar />
                {isLoggedIn ?
                (
                    <>  
                        <div className='user--div' onClick={toggleUserMenu}>
                            <p className='user--button'>{loggedInUser.Username}</p>
                            {!userMenu && <img src={ArrowDownIcon} alt='Arrow Down Icon' className='arrow--icon'/>}
                            {userMenu && <img src={ArrowUpIcon} alt='Arrow Up Icon' className='arrow--icon'/>}
                            {userMenu && <UserMenu toggleLogOut={toggleLogOut} loggedInUser={loggedInUser} userType={sessionStorage.getItem("Type")}/>}
                        </div>
                    </>
                )
                :
                (
                    <>
                        <button 
                            className='button--login'
                            onClick={toggleLogIn}
                        >Log in
                        </button>
                        <button 
                            id='delete-product-button'
                            className='button--signup'
                            // disabled={}
                            // onClick={}
                        >Sign up
                        </button>
                    </>
                )
                }

                <img src={CountryIcon} alt='Country Icon' className='country--icon'/>
                <button className="country--button" onClick={toggleCountryModal}/>
            </nav>

            <CountryModal countryModal={countryModal} toggleCountryModal={toggleCountryModal} />
            
        </>
    )
}

export default Header;