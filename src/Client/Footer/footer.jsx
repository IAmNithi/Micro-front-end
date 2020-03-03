import React from "react";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="container">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md text-center">
            <small className="d-block mb-3 text-muted">&copy; 2017-2019</small>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}
export default Footer;