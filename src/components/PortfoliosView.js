import React from "react";
import TrackVisibility from "react-on-screen";
import Portfolio from './Portfolio';

function PortfoliosView({portfolio}) {
  return (
    <div className="row mt-30-reverse">
      {portfolio.map(port => (
        <TrackVisibility
          once
          offset={200}
          className="col-lg-4 col-md-6 col-12 mt-30"
          key={port.id}
        >
          <Portfolio content={port} />
        </TrackVisibility>
      ))}
    </div>
  );
}

export default PortfoliosView;
