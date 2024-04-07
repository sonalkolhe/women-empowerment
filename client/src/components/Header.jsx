/** @format */

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import Modal from "./Signup.jsx";

function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='fade-button'
        // disabled
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <Avatar
          sx={{ width: 24, height: 24 }}
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
        />
      </Button>
      <Menu
        id='fade-menu'
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}>
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        <MenuItem onClick={handleClose}>Setting</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`z-50 fixed w-full transition-opacity duration-300 ease-in-out backdrop-blur-sm ${
        visible ? "opacity-100" : "opacity-0"
      }`}>
      <nav className='bg-[--backGround-sec] opacity-50 text-[var(--heading-main)] z-[-1] p-4 text-2 xl absolute w-screen h-16'></nav>
      <nav className='opacity-100 text-[var(--heading-light)] p-4 px-10 text-2 xl w-screen h-16 flex justify-between '>
        <a
          href='https://google.com'
          className='font-bold text-[var(--heading-main)] flex '>
          <img src="/logo.png" alt="logo fire stream"  className="h-10"/>
        </a>
        <ul className='flex gap-5 font-semibold'>
          <li>
            <a href='#' className='hover:text-[var(--heading-main)]'>
              Blogs
            </a>
          </li>
          <li>
            <a className='hover:text-[var(--heading-main)]' href='#'>
              News
            </a>
          </li>
          {true ? (
            <li>
              <a className='hover:text-[var(--heading-main)]'>
                <Modal />
              </a>
            </li>
          ) : (
            <li>
              <FadeMenu />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
