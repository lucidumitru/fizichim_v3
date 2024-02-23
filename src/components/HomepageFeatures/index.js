import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';




const FeatureList = [
  {
    title: 'Compatibilitate 100% cu programa',
    Svg: require('@site/static/img/clipboard-list-svgrepo-com_ProgramaColor.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Structurarea logică a lecţiilor',
    Svg: require('@site/static/img/atoms-medical-svgrepo-com_StructurareLogica_Color.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Noţiuni fixate prin experimente',
    Svg: require('@site/static/img/newtons-cradle-energy-svgrepo-com_ExperimenteFizica.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h2 style={{fontSize: 20}}>Fizichim vă oferă:</h2>
        <h3> {title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
