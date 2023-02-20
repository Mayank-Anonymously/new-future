import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../common/Logo";
import HeaderNavContent from "../header/HeaderNavContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-two alternate
      `}
    >
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <div className="d-flex align-items-center btn-box2 ">
              <Link
                href="#"
                className="theme-btn btn-style-five text-white"
                style={{
                  background: "linear-gradient(257deg, #ec9f05, #ff4e00)",
                }}
              >
                Call now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
