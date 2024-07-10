import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import HouseLogo from "../assets/images/HouseLogo.png";
import avatar from "../assets/images/avatar.webp";
import bell from "../assets/icons/bell-icon.png";
import person from "../assets/icons/person-icon.png";
import order from "../assets/icons/order-icon.png";
import history from "../assets/icons/history-icon.png";
import logout1 from "../assets/icons/logout-icon.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authentication";

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: "Prompt",
}));

const Navbar_user = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const { logout } = useAuth();

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 md:px-20 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="/">
            <img
              src={HouseLogo}
              alt="HomeServices Logo"
              className="h-8 sm:h-10"
            />
          </a>
          <a href="/" className="text-blue-500 text-lg sm:text-2xl font-bold">
            HomeServices
          </a>
          <a
            href="/servicelist"
            className="text-black text-sm sm:text-base pt-1"
          >
            บริการของเรา
          </a>
        </div>
        <div className="flex items-center ml-2 sm:ml-4">
          <button className="mr-2" onClick={handleAvatarClick}>
            <img src={avatar} alt="avatar" className="h-8 sm:h-6" />
          </button>
          <button>
            <img src={bell} alt="bell" className="h-8 sm:h-6" />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <CustomMenuItem onClick={() => handleMenuItemClick("/profile")}>
              <img src={person} alt="person" className="mr-1 h-8 sm:h-6" />
              ข้อมูลผู้ใช้งาน
            </CustomMenuItem>
            <CustomMenuItem onClick={() => handleMenuItemClick("/orders")}>
              <img src={order} alt="order" className="mr-1 h-8 sm:h-6" />
              รายการคำสั่งซ่อม
            </CustomMenuItem>
            <CustomMenuItem onClick={() => handleMenuItemClick("/history")}>
              <img src={history} alt="history" className="mr-1 h-8 sm:h-6" />
              ประวัติการซ่อม
            </CustomMenuItem>
            <CustomMenuItem
              onClick={() => {
                logout();
                navigate("/");
              }}
              // className="border-t border-gray-300 pt-1" ใช้ไม่ได้แต่อยากทำให้ได้
            >
              <img src={logout1} alt="logout" className="mr-1 h-8 sm:h-6" />
              ออกจากระบบ
            </CustomMenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_user;
