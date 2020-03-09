import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      //do something here where there is a button that will replace the text
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal"><a href="/">Company name</a></h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="/about">
            About
          </a>
        </nav>
      </div>
    );
  }
}
export default Header;
