import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  logoApe,
  logoutIcon,
  userIconWhite,
  userIcon,
} from "../../assets/image-icons-barrel";
import { sidebarMenuItems } from "../../tools/menusAndForms";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { useState } from "react";
import { ISidebarProps } from "../../types/components.types";
import { useNavHook } from "../../tools/custom.hooks";
import { useLocation } from "react-router";

//Sidebar
const Sidebar: React.FC<ISidebarProps> = ({ onToggle }) => {
  const { toRoute } = useNavHook();
  const [isMinimized, setIsMinimized] = useState(false);

  //sidebar toggle
  const toggleSideBar = () => {
    const newState = !isMinimized;
    setIsMinimized(newState);

    //call onToggle prop with the new state
    onToggle(newState);
  };

  const location = useLocation();

  return (
    <section className={`sidebar ${isMinimized ? "minimized" : ""}`}>
      <div className="header">
        <h1 className="logo-expanded">
          <span>SilverBack</span>
          <span>Kitchen</span>
        </h1>
        <img className="logo-collapsed" src={logoApe} alt="Logo" />
      </div>

      <div className="separator-wrapper">
        <hr className="separator" />
        <button className="minimize-btn" onClick={toggleSideBar}>
          <FontAwesomeIcon
            icon={isMinimized ? faChevronRight : faChevronLeft}
            style={{ color: "#4a4849" }}
          />
        </button>
      </div>

      <div className="navigation">
        <div className="section main-section">
          <ul className="items">
            {sidebarMenuItems.map(
              ({ icon, itemName, itemAltAndRoute, isLargeIcon }, index) => {
                const isActive =
                  location.pathname === `/${itemAltAndRoute}` ||
                  (location.pathname.startsWith(`/${itemAltAndRoute}/`) &&
                    !location.pathname.includes(
                      `${itemAltAndRoute}/${itemAltAndRoute}`
                    ));

                return (
                  <li
                    onClick={() => toRoute(itemAltAndRoute)}
                    className="item"
                    key={index}
                  >
                    <div className={`item-content ${isActive ? "active" : ""}`}>
                      <img
                        src={icon}
                        alt={itemAltAndRoute}
                        className={`item-icon`}
                      />
                      <span className="item-text">{itemName}</span>
                      <span className="item-tooltip">{itemName}</span>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>

      <div className="footer">
        <div className="footer-items">
          <button className="footer-item profile-button">
            <div className="footer-item-content">
              <img
                src={isMinimized ? userIcon : userIconWhite}
                alt="Profile"
                className="footer-icon"
              />
              <span className="footer-item-text">Profile</span>
              <span className="footer-item-tooltip">Profile</span>
            </div>
          </button>

          <button className="footer-item logout-button">
            <div className="footer-item-content">
              <img
                src={logoutIcon}
                alt="Logout"
                className="footer-icon-logout"
              />
              <span className="footer-item-text">Logout</span>
              <span className="footer-item-tooltip">Logout</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
