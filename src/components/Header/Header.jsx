import { useSelector } from "react-redux";
import { Container } from "../../components/index";

import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.authentication.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "SignUp",
      slug: "/sign-up",
      active: !authStatus,
    },
    {
      name: "LogIn",
      slug: "/log-in",
      active: !authStatus,
    },
  ];

  return (
    <header className="py-5 shadow bg-[#10100F] text-[#C6D8FF]">
      <Container>
        <nav className="flex items-center">
          <ul className="flex text-[#C4C7C2] text-lg font-extrabold">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-[#888C8B] hover:text-[#FEFEFE] rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && <li>Log Out Make</li>}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
