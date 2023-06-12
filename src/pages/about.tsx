import React, { useEffect } from "react";

export interface IAboutPageProps {
  mision?: string,
  vision?: string,
  nosotros?: string
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {

  return (
    <div className="container__nosotros">
      <div className="nosotros">
        <h3 className="nosotros__title">Nosotros</h3>
        <p className="nosotros__info">
          {props.nosotros}
        </p>
      </div>
      <div className="mision">
        <h3 className="mision__title">Misión</h3>
        <p className="mision__info">
          {props.mision}
        </p>
      </div>
      <div className="vision">
        <h3 className="vision__title">Visión</h3>
        <p className="vision__info">
          {props.vision}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
