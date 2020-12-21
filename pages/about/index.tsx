import React, {FC} from 'react'
import Layout from "../../components/Layout";
import styled from "styled-components";

const About: FC = () => {

    return (
      <Layout>
          <Content>
              <h1>Something about...</h1>
          </Content>
      </Layout>
  )

};

const Content = styled.div`
  padding: ${props => props.theme.spacing([2, 3])};
`;

export default About;
