import React from "react";

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <div className="container">
      <div className="nosotros">
        <h3 className="nosotros__title">Nosotros</h3>
        <p className="nosotros__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi voluptatibus quam laudantium tenetur a aliquam iure unde maiores voluptatem ea doloremque eius ex consequatur quia obcaecati, molestiae fuga sit.
        </p>
      </div>
      <div className="mision">
        <h3 className="mision__title">Misión</h3>
        <p className="mision__info">
          Ser una empresa innovadora y con gran sentido de responsabilidad
          social que busca el máximo beneficio y satisfacción de nuestros
          clientes a través de la calidad de nuestros productos y servicios de
          solución, manteniendo las mejores condiciones para el envió de
          nuestros productos, asimismo ofrecer la mejor experiencia para
          nuestros trabajadores generando un ambiente profesional y laboral en
          el mundo de competencia empresarial.
        </p>
      </div>
      <div className="vision">
        <h3 className="vision__title">Visión</h3>
        <p className="vision__info">
          Ser un aliado estratégico para nuestros clientes basado en soluciones
          y servicios innovadores sobre la base de nuestra responsabilidad,
          calidad, productividad y compromiso con nuestros usuarios.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
