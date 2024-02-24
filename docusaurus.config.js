// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {





  plugins: [

/*
    '@aldridged/docusaurus-plugin-lunr',
//     [require.resolve('@cmfcmf/docusaurus-search-local'),{
//         // Options here
//         language: "ro" // language of your documentation, see next section
//     }]
*/
    [require.resolve('docusaurus-lunr-search'),
      {
        languages: ['ro', 'ro'], // language codes,
        indexBaseUrl: true
      },
    ],

    ['@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/fizica/clasa6/capitolul1-introducere-in-studiul-fizicii/I-1-ce-este-fizica', // string
            from: ['/docs/fizica/clasa6/fizica-clasa6-capitolul1/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul2-concepte-de-baza-in-fizica/II-1-marimi-fizice-fenomene-fizice', // string
            from: ['/docs/fizica/clasa6/fizica-clasa6-capitolul2/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul3-fenomene-mecanice/III-1-miscare-si-repaus', // string
            from: ['/docs/fizica/clasa6/fizica-clasa6-capitolul3/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-1-stare-termica-temperatura-echilibru-termic', // string
            from: ['/docs/fizica/clasa6/fizica-clasa6-capitolul4/'], // string | string[]
          },

          {
             to: '/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-2-dilatarea-contractarea', // string
             from: ['/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-2-efecte-ale-schimbarii-termice'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-3-transformari-de-stare-de-agregare', // string
            from: ['/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-3-transformari-de-stari-de-agregare'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-4-sinteza-recapitulativa-fenomene-termice', // string
            from: ['/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-3-sinteza-recapitulativa-fenomene-termice'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-5-probleme-recapitulative-rezolvate-fenomene-termice', // string
            from: ['/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-4-probleme-recapitulative-rezolvate-fenomene-termice'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-6-exercitii-recapitulative-fenomene-termice', // string
            from: ['/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-5-exercitii-recapitulative-fenomene-termice'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-7-test-de-autoevaluare-fenomene-termice', // string
            from: ['/docs/fizica/clasa6/capitolul4-fenomene-termice/IV-6-test-de-autoevaluare-fenomene-termice'], // string | string[]
          },


          {
            to: '/docs/fizica/clasa6/capitolul5-fenomene-electrice-si-magnetice/V-1-caracterizare-magneti', // string
            from: ['/docs/fizica/clasa6/fizica-clasa6-capitolul5/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/capitolul6-fenomene-optice/VI-1-introducere-in-optica', // string
            from: ['/docs/fizica/clasa6/fizica-clasa6-capitolul6/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa6/culegere-de-probleme/capitolul2-concepte-de-baza-in-fizica', // string
            from: ['/docs/fizica/clasa6/fizica-clasa6-culegere-probleme/'], // string | string[]
          },

          {
            to: '/docs/fizica/clasa7/capitolul1-concepte-in-fizica/I-1-fenomene-fizice-si-marimi-fizice', // string
            from: ['/docs/fizica/clasa7/fizica-clasa7-capitolul1/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa7/capitolul2-interactiuni-mecanice/II-1-interactiunea-si-efectele-interactiunii', // string
            from: ['/docs/fizica/clasa7/fizica-clasa7-capitolul2/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa7/capitolul3-lucrul-mecanic-energia-mecanica/III-1-lucrul-mecanic', // string
            from: ['/docs/fizica/clasa7/fizica-clasa7-capitolul3/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa7/capitolul4-echilibrul-corpurilor/IV-1-echilibrul-de-translatie', // string
            from: ['/docs/fizica/clasa7/fizica-clasa7-capitolul4/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa7/capitolul5-statica-fluidelor/V-1-presiunea', // string
            from: ['/docs/fizica/clasa7/fizica-clasa7-capitolul5/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa7/capitolul6-unde-mecanice-sunetul/VI-1-oscilatii-mecanice', // string
            from: ['/docs/fizica/clasa7/fizica-clasa7-capitolul6/'], // string | string[]
          },

          {
            to: '/docs/fizica/clasa7/capitolul6-unde-mecanice-sunetul/VI-1-oscilatii-mecanice', // string
            from: ['/docs/fizica/clasa7/capitolul6-unde-mecanice-sunetul/'], // string | string[]
          },

          {
            to: '/docs/fizica/clasa7/culegere-de-probleme/capitolul1-concepte-in-fizica', // string
            from: ['/docs/fizica/clasa7/fizica-clasa7-culegere-probleme/'], // string | string[]
          },

          {
            to: '/docs/fizica/clasa8/capitolul1-fenomene-termice/I-0-recapitulare-marimi-fizice-clasa7', // string
            from: ['/docs/fizica/clasa8/fizica-clasa8-capitolul1/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa8/capitolul2-fenomene-electrice-si-magnetice/II-1-electrostatica-electrizarea-si-sarcina-electrica', // string
            from: ['/docs/fizica/clasa8/fizica-clasa8-capitolul2/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa8/capitolul3-fenomene-optice/III-1-surse-de-lumina-corpuri-luminate', // string
            from: ['/docs/fizica/clasa8/fizica-clasa8-capitolul3/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa8/capitolul4-energia-si-viata/IV-1-forme-de-energie', // string
            from: ['/docs/fizica/clasa8/fizica-clasa8-capitolul4/'], // string | string[]
          },
          {
            to: '/docs/fizica/clasa8/culegere-de-probleme/capitolul1-fenomene-termice', // string
            from: ['/docs/fizica/clasa8/fizica-clasa8-culegere-probleme/'], // string | string[]
          },


          {
            to: '/docs/fizica/experimente-distractive/experimente-distractive-fizica', // string
            from: ['/docs/fizica/experimente-distractive-fizica/'], // string | string[]
          },
          {
            to: '/docs/fizica/bibliografie/bibliografie-fizica', // string
            from: ['/docs/fizica/bibliografie_fizica/'], // string | string[]
          },


          {
            to: '/docs/chimie/clasa7/capitolul1-chimia-stiinta-a-naturii/I-1-ce-este-chimia', // string
            from: ['/docs/chimie/clasa7/chimie-clasa7-capitolul1/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa7/capitolul2-substante-amestecuri-de-substante/II-1-substante-pure-si-amestecuri-de-substante', // string
            from: ['/docs/chimie/clasa7/chimie-clasa7-capitolul2/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa7/capitolul2-substante-amestecuri-de-substante/II-2-metode-de-separare-a-amestecurilor/II-2-1-metode-de-separare-a-amestecurilor-omogene', // string
            from: ['/docs/chimie/clasa7/capitolul2-substante-amestecuri-de-substante/II-2-metode-de-separare-a-amestecurilor/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa7/capitolul3-atomul/III-1-structura-atomului', // string
            from: ['/docs/chimie/clasa7/chimie-clasa7-capitolul3/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa7/capitolul4-tabelul-periodic-al-elementelor/IV-1-structura-tabelului-periodic-al-elementelor', // string
            from: ['/docs/chimie/clasa7/chimie-clasa7-capitolul4/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa7/capitolul5-ioni-si-molecule/V-1-formarea-ionilor', // string
            from: ['/docs/chimie/clasa7/chimie-clasa7-capitolul5/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa7/capitolul6-substante-chimice/VI-1-stabilirea-formulei-chimice', // string
            from: ['/docs/chimie/clasa7/chimie-clasa7-capitolul6/'], // string | string[]
          },
         {
            to: '/docs/chimie/clasa7/capitolul7-calcule-pe-baza-formulei-chimice/VII-1-masa-molara-mol', // string
            from: ['/docs/chimie/clasa7/chimie-clasa7-capitolul7/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa7/culegere-de-probleme/capitolul1-chimia-stiinta-a-naturii', // string
            from: ['/docs/chimie/clasa7/chimie-clasa7-culegere-probleme/'], // string | string[]
          },


          {
            to: '/docs/chimie/clasa8/capitolul1-recapitularea-chimiei-de-clasa-7/I-1-notiuni-chimice-importante', // string
            from: ['/docs/chimie/clasa8/chimie-clasa8-capitolul1/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa8/capitolul2-transformari-chimice-ale-substantelor/II-1-reactii-chimice-ecuatii-chimice', // string
            from: ['/docs/chimie/clasa8/chimie-clasa8-capitolul2/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa8/capitolul3-reactia-de-combinare/III-1-reactia-de-combinare', // string
            from: ['/docs/chimie/clasa8/chimie-clasa8-capitolul3/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa8/capitolul4-reactia-de-descompunere/IV-1-reactia-de-descompunere', // string
            from: ['/docs/chimie/clasa8/chimie-clasa8-capitolul4/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa8/capitolul5-reactia-de-substitutie/V-1-reactia-de-substitutie-simpla-inlocuire-seria-activitatii-chimice-a-metalelor', // string
            from: ['/docs/chimie/clasa8/chimie-clasa8-capitolul5/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa8/capitolul6-reactia-de-schimb/VI-1-reactia-de-schimb-dubla-inlocuire', // string
            from: ['/docs/chimie/clasa8/chimie-clasa8-capitolul6/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa8/capitolul7-importanta-chimiei-in-viata-noastra/VII-1-combustibilii', // string
            from: ['/docs/chimie/clasa8/chimie-clasa8-capitolul7/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa8/culegere-de-probleme/capitolul1-recapitularea-chimiei-de-clasa-7', // string
            from: ['/docs/chimie/clasa8/chimie-clasa8-culegere-probleme/'], // string | string[]
          },



          {
            to: '/docs/chimie/experimente-distractive/experimente-distractive-chimie', // string
            from: ['/docs/chimie/experimente-distractive-chimie/'], // string | string[]
          },
          {
            to: '/docs/chimie/bibliografie/bibliografie-chimie', // string
            from: ['/docs/chimie/bibliografie_chimie/'], // string | string[]
          },

          {
            to: '/docs/biologie/fizicainlumeavie/I-miscarea-si-parghiile/I-1-parghia-un-mecanism-simplu', // string
            from: ['/docs/biologie/fizicainlumeavie/miscarea-si-parghiile/'], // string | string[]
          },
          {
            to: '/docs/biologie/fizicainlumeavie/II-respiratia-si-presiunea/II-1-respiratia-si-presiunea', // string
            from: ['/docs/biologie/fizicainlumeavie/respiratia-si-presiunea/'], // string | string[]
          },
          {
            to: '/docs/biologie/fizicainlumeavie/III-acustica-si-mecanismul-auzului/III-1-acustica-si-mecanismul-auzului', // string
            from: ['/docs/biologie/fizicainlumeavie/acustica-si-mecanismul-auzului/'], // string | string[]
          },
          {
            to: '/docs/biologie/fizicainlumeavie/IV-ochiul-si-defectele-de-vedere/IV-1-ochiul-uman', // string
            from: ['/docs/biologie/fizicainlumeavie/ochiul-si-defectele-de-vedere'], // string | string[]
          },
          {
            to: '/docs/biologie/chimiainlumeavie/I-aerul-sursa-vitala/I-1-atmosfera', // string
            from: ['/docs/biologie/chimiainlumeavie/aerul-sursa-vitala/'], // string | string[]
          },
          {
            to: '/docs/biologie/chimiainlumeavie/II-apa-sursa-vitala/II-1-compozitia-si-structura-apei', // string
            from: ['/docs/biologie/chimiainlumeavie/apa-sursa-vitala/'], // string | string[]
          },
          {
            to: '/docs/biologie/chimiainlumeavie/III-sanatatea-corpului-omenesc/III-1-proteinele', // string
            from: ['/docs/biologie/chimiainlumeavie/sanatatea-corpului-omenesc/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa9/capitolul1-recapitularea-chimiei-de-gimnaziu/I-9-compusi-chimici-anorganici/I-9-0-clasificare-substante-anorganice', // string
            from: ['/docs/chimie/clasa9/capitolul1-recapitularea-chimiei-de-gimnaziu/I-9-compusi-chimici-anorganici/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa9/capitolul1-recapitularea-chimiei-de-gimnaziu/I-11-transformari-chimice-ale-substantelor/I-11-1-reactii-chimice-ecuatii-chimice', // string
            from: ['/docs/chimie/clasa9/capitolul1-recapitularea-chimiei-de-gimnaziu/I-11-transformari-chimice-ale-substantelor/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa9/capitolul1-recapitularea-chimiei-de-gimnaziu/I-12-stoechiometria/I-12-1-calcule-stoechiometrice-simple', // string
            from: ['/docs/chimie/clasa9/capitolul1-recapitularea-chimiei-de-gimnaziu/I-12-stoechiometria/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa9/capitolul7-echilibrul-chimic/VII-3-principiul-lui-le-chatelier-factorii-care-influenteaza-echilibrul-chimic/VII-3-1-principiul-lui-le-chatelier', // string
            from: ['/docs/chimie/clasa9/capitolul7-echilibrul-chimic/VII-3-principiul-lui-le-chatelier-factorii-care-influenteaza-echilibrul-chimic/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa10/capitolul2-hidrocarburi/II-1-alcani/II-1-0-clasificarea-hidrocarburilor', // string
            from: ['/docs/chimie/clasa10/capitolul2-hidrocarburi/II-1-alcani/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa10/capitolul2-hidrocarburi/II-2-alchene/II-2-1-denumirea-alchenelor', // string
            from: ['/docs/chimie/clasa10/capitolul2-hidrocarburi/II-2-alchene/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa10/capitolul2-hidrocarburi/II-3-alchine/II-3-1-denumirea-alchinelor', // string
            from: ['/docs/chimie/clasa10/capitolul2-hidrocarburi/II-3-alchine/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa10/capitolul2-hidrocarburi/II-4-alcadiene/II-4-1-denumirea-alcadienelor', // string
            from: ['/docs/chimie/clasa10/capitolul2-hidrocarburi/II-4-alcadiene/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa10/capitolul2-hidrocarburi/II-5-arene/II-5-1-structura-benzenului', // string
            from: ['/docs/chimie/clasa10/capitolul2-hidrocarburi/II-5-arene/'], // string | string[]
          },
          {
            to: '/docs/chimie/clasa10/capitolul2-hidrocarburi/II-6-petrolul-si-carbunii/II-6-1-petrolul', // string
            from: ['/docs/chimie/clasa10/capitolul2-hidrocarburi/II-6-petrolul-si-carbunii/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-1-clasificarea-reactiilor-chimice', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-1-clasificarea-reactiilor-chimice/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-2-reactii-de-substitutie', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-2-reactii-de-substitutie/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-3-reactii-de-aditie', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-3-reactii-de-aditie/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-4-reactii-de-eliminare', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-4-reactii-de-eliminare/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-5-reactii-de-transpozitie', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-5-reactii-de-transpozitie/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-6-randamentul-reactiilor-chimice-conversia-totala/II-6-1-randamentul-reactiilor-chimice', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-6-randamentul-reactiilor-chimice-conversia-totala/II-6-1-randamentul-reactiilor-chimice/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-6-randamentul-reactiilor-chimice-conversia-totala/II-6-2-conversia-utila-conversia-totala', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-6-randamentul-reactiilor-chimice-conversia-totala/II-6-2-conversia-utila-conversia-totala/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-7-reactii-de-halogenare/II-7-1-reactia-de-halogenare-prin-reactii-de-substitutie', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-7-reactii-de-halogenare/II-7-1-reactia-de-halogenare-prin-reactii-de-substitutie/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-7-reactii-de-halogenare/II-7-2-reactia-de-halogenare-prin-reactii-de-aditie', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-7-reactii-de-halogenare/II-7-2-reactia-de-halogenare-prin-reactii-de-aditie/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-8-reactii-de-nitrare', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-8-reactii-de-nitrare/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-9-reactii-de-sulfonare', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-9-reactii-de-sulfonare/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-10-reactii-de-alchilare/II-10-1-reactia-de-alchilare-friedel-crafts-a-arenelor-la-nucleu', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-10-reactii-de-alchilare/II-10-1-reactia-de-alchilare-friedel-crafts-a-arenelor-la-nucleu/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-10-reactii-de-alchilare/II-10-2-reactia-de-alchilare-hofman-a-aminelor', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-10-reactii-de-alchilare/II-10-2-reactia-de-alchilare-hofman-a-aminelor/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-10-reactii-de-alchilare/II-10-3-reactia-de-alchilare-cu-oxid-de-etena', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-10-reactii-de-alchilare/II-10-3-reactia-de-alchilare-cu-oxid-de-etena/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-11-reactii-de-hidroliza/II-11-1-reactii-de-hidroliza-a-compusilor-halogenati', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-11-reactii-de-hidroliza/II-11-1-reactii-de-hidroliza-a-compusilor-halogenati/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-11-reactii-de-hidroliza/II-11-2-reactii-de-hidroliza-bazica-a-grasimilor', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-11-reactii-de-hidroliza/II-11-2-reactii-de-hidroliza-bazica-a-grasimilor/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-12-reactia-de-diazotare', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-12-reactia-de-diazotare/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-13-reactii-de-polimerizare/II-13-1-reactia-de-polimerizare-mase-plastice', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-13-reactii-de-polimerizare/II-13-1-reactia-de-polimerizare-mase-plastice/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-13-reactii-de-polimerizare/II-13-2-reactia-de-copolimerizare-cauciucuri-sintetice', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-13-reactii-de-polimerizare/II-13-2-reactia-de-copolimerizare-cauciucuri-sintetice/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-14-reactii-de-condensare/II-14-1-reactia-de-condensare-a-compusilor-carbonilici-intre-ei', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-14-reactii-de-condensare/II-14-1-reactia-de-condensare-a-compusilor-carbonilici-intre-ei/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-14-reactii-de-condensare/II-14-2-reactia-de-condensare-a-compusilor-carbonilici-cu-substante-aromatice', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-14-reactii-de-condensare/II-14-2-reactia-de-condensare-a-compusilor-carbonilici-cu-substante-aromatice/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-15-reactii-de-hidrogenare-reducere/II-15-1-reactia-de-hidrogenare-prin-aditie', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-15-reactii-de-hidrogenare-reducere/II-15-1-reactia-de-hidrogenare-prin-aditie/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-15-reactii-de-hidrogenare-reducere/II-15-2-reactia-de-hidrogenare-prin-reducere', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-15-reactii-de-hidrogenare-reducere/II-15-2-reactia-de-hidrogenare-prin-reducere/'], // string | string[]
          },

          {
            to: '/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimice/II-16-reactia-de-oxidare', // string
            from: ['/docs/chimie/clasa11/capitolul2-tipuri-de-reactii-chimcie/II-16-reactia-de-oxidare/'], // string | string[]
          },

        ],
      },
   ]

  ],


  title: 'Fizichim',
  tagline: 'Invăţăm prin experimente',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lucidumitru.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fizichim_v3/',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lucidumitru', // Usually your GitHub org/user name.
  projectName: 'fizichim_v3', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
    localeConfigs: {
      ro: {
        label: 'Română',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },

    },
  },


/*  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  }, */

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },

        sitemap: {
          /*          cacheTime: 600 * 1000, // 600 sec - cache purge period */
          changefreq: 'weekly',
          priority: 0.5,
        },


      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

/*         announcementBar:
         {
          id: 'support_us',
          content:
            'Ai întrebări pentru noi? Trimite-ne un mesaj pe pagina de facebook <a target="https://www.facebook.com/fizichim" rel="noopener noreferrer" href="https://www.facebook.com/fizichim"><strong>Fizichim</strong></a>',
          backgroundColor: '#fafbfc',
          textColor: '#091E42',
          textColor: '#C00000',
          isCloseable: false,
        },
*/




      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fizichim',
        logo: {
          alt: 'My Site Logo',
/*          src: 'img/logo.svg', */
            src: 'img/LogoFizichim_200x200.svg',
            width: 32,
            height: 32,


        },
        items: [

          {
            type: 'localeDropdown',
            position: 'right',
          },

/*          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */

            {to: '/docs/fizica/clasa6/capitolul1-introducere-in-studiul-fizicii/I-1-ce-este-fizica', label: 'Fizică', position: 'left'},

            {to: '/docs/chimie/clasa7/capitolul1-chimia-stiinta-a-naturii/I-1-ce-este-chimia', label: 'Chimie', position: 'left'},

            {to: '/docs/biologie/fizicainlumeavie/I-miscarea-si-parghiile/I-1-parghia-un-mecanism-simplu', label: 'Opțional', position: 'left'},


        ],
      },
      footer: {
        style: 'dark',
        links: [
/*          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          }, */


          {
            title: 'Invăţare uşoară',
            items: [
              {
                label: 'Fizică',
                to: '/docs/fizica/clasa6/capitolul1-introducere-in-studiul-fizicii/I-1-ce-este-fizica',
              },
              {
                label: 'Chimie',
                href: '/docs/chimie/clasa7/capitolul1-chimia-stiinta-a-naturii/I-1-ce-este-chimia',
              },
            ],
          },

          {
              title: 'Comunitate',
              items: [{
                label: 'Facebook',
                href: 'https://www.facebook.com/fizichim',
              },
                {
                  label: 'Youtube',
                  href: 'https://www.youtube.com/fizichim',
                },
              ],
          },

          {
              title: 'Donații',
              items: [{
                label: 'Dă click aici pentru a dona prin Revolut',
                to: 'https://revolut.me/iuliadumitru',
//                            label: 'Blog',
//                            to: 'blog',
              },
              ],
          },


        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dumitru Elena-Daniela: Fizichim vers3. Donații poți face în contul: RO79 BREL 0005 5015 6588 0100`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),






};

export default config;
