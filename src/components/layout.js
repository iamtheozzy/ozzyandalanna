/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./reset.css"
import "./layout.css"

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <nav className="navbar navbar-light bg-light">
//           <span className="navbar-brand mb-0 h1">Navbar</span>
//         </nav>
//         <div className="mainDiv">
//           <main>{children}</main>
//         </div>
//       </>
//     )}
//   />
// )

const Layout = ({ children }) => (

  <main>{children}</main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

