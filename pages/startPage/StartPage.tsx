import React, {FC} from 'react'
import Layout from '../../components/Layout'
import styled from "styled-components";


const StartPage: FC = () => {


    return (
        <Layout>
            <Wrapper>
                <AsideLeft>
                    <h1>Cos’è Lorem Ipsum?
                        Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.

                        Perchè lo utilizziamo?
                        È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).


                        Da dove viene?
                        Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta da un passaggio della sezione 1.10.32.

                        Il brano standard del Lorem Ipsum usato sin dal sedicesimo secolo è riprodotto qui di seguito per coloro che fossero interessati. Anche le sezioni 1.10.32 e 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone sono riprodotte nella loro forma originale, accompagnate dalla traduzione inglese del 1914 di H. Rackham.</h1>
                </AsideLeft>
                <AsideCenter>
                    <iframe
                        src={`https://showbiz.24tv.ua/63-richniy-dolf-lundgren-odruzhivsya-kohanoyu-novini-shou-biznesu_n1490240`}
                        // frameBorder={0}
                        title="wp-exam"
                        // className={styles.iFrame}
                        width="320px"
                        height="300px"
                        // ref={gridIframe}
                        // onLoad={() => handleLoad()}
                    />
                </AsideCenter>
            </Wrapper>
        </Layout>
    )
};

export default StartPage;


const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

const AsideLeft = styled.div`
//background-color: blue;
  flex-grow: 2;
  max-width: 30%;
 height: calc(100vh + 60px);
 overflow: auto;
`;

const AsideCenter = styled.div`
  flex-grow: 10;
  //background-color: yellow;
    height: calc(100vh + 60px);
   overflow: auto;
`;

// const AsideRight = styled.div`
// //background-color: red;
//   flex-grow: 2;
//     height: calc(100vh + 60px);
//    overflow: auto;
// `;


