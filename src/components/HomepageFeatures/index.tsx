import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Rent-a-Car',
    Svg: require('@site/static/img/Car Renting.svg').default,
    description: (
      <>
        <p>Aluguer Automóvel</p>
        <p> Oferecemos aluguer de viaturas para clientes individuais e empresariais, 
        com uma frota diversificada para atender a todas as necessidades. 
        Para empresas, proporcionamos soluções completas de mobilidade, 
        incluindo contratos flexíveis de até um ano e viaturas comerciais. 
        Comprometemo-nos a garantir uma experiência de aluguer personalizada 
        e eficiente para satisfazer as exigências de cada cliente.</p>
      </>
    ),
  },
  {
    title: 'Seguro',
    Svg: require('@site/static/img/car-repair-car-svgrepo-com.svg').default,
    description: (
      <>
      <p>Automóvel</p>
      <p>Proteja o seu veículo com o seguro automóvel da nossa oficina! 
        Oferecemos cobertura abrangente para garantir a segurança do seu carro. 
        Desde danos acidentais a eventos imprevistos, o nosso seguro automóvel proporciona tranquilidade em cada viagem. 
        Conte com a nossa expertise para cuidar do seu património. 
        Entre em contato para conhecer as opções personalizadas que temos para si. 
        Viaje com confiança, viaje seguro!</p>
      </>
    ),
  },
  {
    title: 'Serviços',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <p>Reparação Automóvel</p>
      <p>Proteja o seu veículo com o seguro automóvel da nossa oficina! 
        Oferecemos cobertura abrangente para garantir a segurança do seu carro. 
        Desde danos acidentais a eventos imprevistos, o nosso seguro automóvel proporciona tranquilidade em cada viagem. 
        Conte com a nossa expertise para cuidar do seu património. 
        Entre em contato para conhecer as opções personalizadas que temos para si. 
        Viaje com confiança, viaje seguro!</p>
        </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
