import React from "react";
import { FaCaretSquareUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";

const Layout = ({ children, className = "" }) => {
    return (
        <div
            className={`z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
            md:p-12 sm:p-8 ${className}`}
        >
            <ScrollToTop
                showUnder={160}
                style={{ bottom: "2rem", right: "2rem" }}
            >
                <span title="Ir arriba">
                    <FaCaretSquareUp className="text-4xl" 
                />
                </span>
            </ScrollToTop>
            {children}
        </div>
    );
};

export default Layout;
