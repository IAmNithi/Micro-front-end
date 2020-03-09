import React from "react";

class AboutMe extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
