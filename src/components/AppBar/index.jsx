import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import useAuth from "../../services/useAuth";
import AuthMenu from "../AuthMenu";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import Logo from "../Icons/Logo";
import MenuContainer from "../MenuContainer";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import Sidebar from "../Sidebar";

const AppBar = () => {
  const refHero = useRef(null);
  const refAboutUs = useRef(null);
  const refContactUs = useRef(null);
  const { auth, logOut } = useAuth();
  const location = useLocation();
  let isHomePage = location.pathname === "/";
  let isDashboard = null;
  if (!isHomePage) {
    isDashboard = location.pathname.includes("dashboard");
  }
  const showNav = isHomePage || isDashboard;

  console.log("IS DASHBOARD: ", isDashboard);

  useEffect(() => {
    refHero.current = document.getElementById("hero");
    refAboutUs.current = document.getElementById("about-us");
    refContactUs.current = document.getElementById("contact-us");
  }, []);

  const onScrollToSection = (ref) => {
    window.scrollTo(0, ref.current.offsetTop - 123);
  };

  return (
    <Container
      className={`${isHomePage ? "" : styles.container} ${
        isDashboard ? styles.noPadding : ""
      }`}
    >
      <Header className={isDashboard ? styles.dashboardHeader : ""}>
        <a className={styles.logo} href="/">
          <Logo />
        </a>
        {showNav && (
          <>
            {isHomePage && (
              <Navigation
                refHero={refHero}
                refAboutUs={refAboutUs}
                refContactUs={refContactUs}
                onScrollToSection={onScrollToSection}
              />
            )}
            <MenuContainer>
              {auth?.currentUser ? (
                <UserMenu auth={auth} logOut={logOut} />
              ) : (
                <AuthMenu />
              )}
            </MenuContainer>
          </>
        )}
      </Header>
      {isDashboard ? (
        <div className={isDashboard ? styles.dashboardContainer : ""}>
          <Sidebar />
          <Outlet />
        </div>
      ) : (
        <Outlet />
      )}
      {isHomePage && <Footer className={isHomePage ? "" : styles.footer} />}
    </Container>
  );
};

export default AppBar;
