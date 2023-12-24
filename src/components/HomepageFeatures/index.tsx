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
    Svg: require('@site/static/img/1371714180.svg').default,
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
    Svg: require('@site/static/img/repairing-wrench-svgrepo-com.svg').default,
    description: (
      <>
      <p>Reparação Automóvel</p>
      <p>Há mais de 20 anos, realizamos manutenção periódica, serviços rápidos sem marcação, diagnósticos e reparos,
        colisões e sinistros, planos de garantia estendida, cuidamos de pneus e alinhamento de direções,
        oferecemos lavagem de viaturas e serviço de entrega e recolha. 
        Confie na nossa experiência para manter o seu veículo em excelente estado. 
        Entre em contacto para descobrir como podemos atender às necessidades da sua viatura.</p>
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
