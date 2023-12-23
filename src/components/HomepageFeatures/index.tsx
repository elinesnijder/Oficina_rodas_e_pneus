import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
  button?: Button; // Make sure the button property is optional
};

interface Button {
  text: string;
  link: string;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Rent-a-Car',
    Svg: require('@site/static/img/Anonymous_aiga_car_rental.svg').default,
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
        button: {
         text: 'Saiba Mais',
         link: '/docs/tutorial-extras/manage-docs-versions', // Specify the link or route you want the button to navigate to
       },
     },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
