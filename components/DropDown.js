import Link from 'next/link';
const DropDown = () => (
  <div className="navbar">
    <Link href="/">
      <a >PopSeed</a>
    </Link>
    <Link href="/about">
      <a >About</a>
    </Link>
    <div className="dropdown">
      <button className="dropbtn">Explore
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <a href="/searchPage">Find a Space</a>
        <a href="/signup">Sign up</a>
        <a href="/login">Log In</a>
      </div>

    </div>
    <style jsx>{`
      .navbar {
        overflow:hidden;
        background-color: #FF0000;
        font-family:"YWFTUltramagnetic", Arial, Trebuchet, sans-serif;

      }

      .navbar a {
        float: left;
        font-size: 16px;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      .dropdown {
        float: left;
        overflow: hidden;
      }

      .dropdown .dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit; /* Important for vertical align on mobile phones */
        margin: 0; /* Important for vertical align on mobile phones */
      }

      .navbar a:hover, .dropdown:hover .dropbtn {
        background-color: red;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }

      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }

      .dropdown-content a:hover {
        background-color: #ddd;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

    `}</style>
  </div>
);

export default DropDown;
