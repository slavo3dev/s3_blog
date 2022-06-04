import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div>
        <div className="social">
          <a
            href="https://twitter.com/slavo3dev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          {" | "}
          <a
            href="https://github.com/slavo3dev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/slavopopovic/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {" | "}
          <a
            href="https://www.instagram.com/slavo_3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          {" | "}
          <a
            href="https://www.youtube.com/watch?v=Y82tn5yAqmI"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <a
          href="https://www.felpapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By @Slavo_3
        </a>
      </div>
    </footer>
  );
};

//  <div
//       style={{ alignItems: "center", border: "1px solid red" }}
//       className="social"
//     >
//       <Link href="https://twitter.com/slavo3dev">
//         <a target="_blank">
//           <i className="fab fa-twitter"></i>
//         </a>
//       </Link>

//       <Link href="https://github.com/slavo3dev">
//         <i className="fab fa-github"></i>
//       </Link>

//       <Link href="https://www.linkedin.com/in/slavopopovic/">
//         <i className="fab fa-linkedin"></i>
//       </Link>

//       <Link href="https://www.instagram.com/slavo_3">
//         <i className="fab fa-instagram"></i>
//       </Link>

//       <Link href="https://www.youtube.com/watch?v=Y82tn5yAqmI">
//         <i className="fab fa-youtube"></i>
//       </Link>
//     </div>
//     <div></div>
