import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import { useTheme } from "providers/ThemeProvider";
import { Footer } from "./Footer";

// eslint-disable-next-line react/prop-types
export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme.type}>
      <Container>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <Footer />
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s,
              background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  );
}
