import React, { useState, useEffect }  from 'react';
import { Link  } from 'react-router-dom';
import './Header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';



function Header(loggedinuser) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState(false)
    const [night, setNight] = useState(false)
    const [user, setUser] = useState(loggedinuser.user)

    return (
        <div className="header">
            <div class="logo">
                <div className="logo_left">
                    {open === false ? <ListIcon onClick={() => setOpen(true)} fontSize="large"/> : <CloseIcon onClick={() => setOpen(false)} color="secondary" fontSize="large"/>}
                </div>
                <div className="logo_middle">
                    <h2 className="title"><a href="/">Ecommerce</a></h2>
                </div>
                <div className="logo_right">
                {user ? 
                    <AccountCircleIcon className="icon icon_user" fontSize="medium"/> :
                    <Link to="/login">
                        <AccountCircleIcon className="icon icon_user" fontSize="medium"/>
                    </Link>
                }
                <Link to="/cart">
                    <ShoppingCartIcon className="icon icon_cart" fontSize="medium"/>
                    <span className="item_number">20</span>
                </Link>
                </div>
            </div>
            {search === false ?
                <div className="search">
                    <SearchIcon className="searchbar" onClick={() => setSearch(true)} fontSize="small"/>
                </div> :
                <div className="search active">
                    <input type="text"/>
                    <SearchIcon className="searchbar" fontSize="small"/>
                </div>
            }
            <div className="categories">
                <a href="#" className="category">New Arrival</a>
                <a href="#" className="category">Women</a>
                <a href="#" className="category">Shoes</a>
                <a href="#" className="category">Clearence</a>
            </div>
        </div>
    )
}

export default Header

