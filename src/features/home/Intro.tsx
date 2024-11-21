import React from "react";

interface IProps {
  setInfo : (i : boolean) => void;
}

export const Intro : React.FC<IProps> = ({setInfo}) => {

  const pad: React.CSSProperties = {
    padding: "10px",
    margin: "10px",
  };
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-3">Tell us everything!</h1>
        <p className="lead">
          Welcome to this website ! 
        </p>
        {/* <hr className="my-4" /> */}
        <p>
        This is a barebones front end made with react that uses quite outdated libraries...
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-8">
              <p>
                <button onClick={() => setInfo(true)} type="button" className="btn btn-outline-success" style={pad}>
                  More Info
                </button>
                <button type="button" className="btn btn-outline-info" style={pad}>
                  First Section
                </button>
                <button type="button" className="btn btn-outline-danger" style={pad}>
                  Second Section
                </button>
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
