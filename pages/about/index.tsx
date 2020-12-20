import React, {FC} from 'react'
import Layout from "../../components/Layout";
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux'

const About: FC = () => {
    const state = useSelector(state => state);
      console.log(state, 'About');
    return (
      <Layout>
          <Content>
              <h1>The Fortean World Times</h1>
              <section>
                  <article className="breaking">
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/earth-vs-the-flying-saucers.jpg"
                           alt="Photograph of a flying saucer over the US Capitol building"/>
                      <h1>Washington D.C. Attacked By Flying Saucers</h1>
                      <h2>Dateline Washington D.C.</h2>
                      <h3>Frank Bragg reporting</h3>
                      <p>The country was brought to a standstill today when flying saucers – presumably from Mars,
                          although Venusians have also been suspected – appeared over the nation’s capital, intent on
                          destruction. Curiously, they only attacked Pennsylvania Avenue, and have not appeared
                          elsewhere in the country.
                      </p>
                  </article>
                  <article>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/bigfoot_1.jpg"
                           alt="Photograph of a Bigfoot"/>
                      <h1>Bigfoot Found, Shot, Killed</h1>
                      <h2>Dateline Washington State</h2> <h3>Jessica Walsh reporting</h3>
                      <p>The first conclusive proof of the elusive Sasquatch was found today, when one of the ape-men
                          was found and killed by a hunter in the north-eastern corner of the state.
                          <p>The hunter plans to tour the pelt in the fall.</p></p>
                  </article>
                  <article>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/alligator-sewer_1.jpg"
                           alt="Photograph of an alligator emerging from an open manhole cover"/>
                      <h1>Nest of Alligators Found in New York Sewers</h1>
                      <h2>Dateline New York City</h2>
                      <h3>Ted Sturgis reporting</h3>
                      <p>Years of rumours were confirmed yesterday when a nest of alligators were found in the sewers
                          of New York City, just south of Times Square. The largest, which locals have dubbed “Mugsy”,
                          measures over 21 feet long.</p>
                  </article>
              </section>


          </Content>
      </Layout>
  )

};

const Content = styled.div`
  padding: ${props => props.theme.spacing([2, 3])};
`;

export default About;
