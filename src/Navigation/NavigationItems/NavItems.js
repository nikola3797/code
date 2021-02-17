import React from 'react';

import classes from './NavItems.css';
import NavigationItem from '../NavigationItem/NavItem';

const navigationItems = () => (
    <ul className="navbar-nav mr-auto">
        <NavigationItem link="/home" exact>Home</NavigationItem>
        <NavigationItem link="/about" exact>About</NavigationItem>
        <NavigationItem link="/login" exact>Login</NavigationItem>
        <NavigationItem link="/contact" exact>Contact</NavigationItem>
    </ul>
);

export default navigationItems;