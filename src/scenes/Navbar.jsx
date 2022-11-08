import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage = true }) => {
  const pageLowerCase = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === pageLowerCase
          ? isTopOfPage
            ? "text-yellow"
            : "text-deep-blue"
          : ""
      }
      hover:text-yellow transition duration-500`}
      href={`#${pageLowerCase}`}
      onClick={() => setSelectedPage(pageLowerCase)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navBackground = isTopOfPage ? "" : "bg-yellow ";

  return (
    <nav className={`${navBackground}z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">TRR</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            {/* <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            /> */}
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-yellow p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed top-0 left-0 w-full h-full bg-deep-blue">
            {/* CLOSE ICON */}
            {/* <div className="flex items-center justify-between mx-auto w-5/6"> */}
            <div className="flex w-full py-6">
              <div className="flex justify-end mx-auto w-5/6">
                <button
                  className="flex justify-center items-center h-[40px] w-[40px] rounded-full bg-yellow"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <img alt="close-icon" src="../assets/close-icon.svg" />
                </button>
              </div>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 items-center pt-5 text-xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
