import React, {FC} from 'react'
import Layout from '../../components/Layout'
import styled from "styled-components";


const StartPage: FC = () => {


    return (
        <Layout>
            <Wrapper>
                <AsideLeft>

                </AsideLeft>
                <AsideCenter>
                    <iframe
                        src={`https://www.pravda.com.ua/news/2020/12/18/7277507/`}
                        // frameBorder={0}
                        title="wp-exam"
                        // className={styles.iFrame}
                        width="100%"
                        height="100%"
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


