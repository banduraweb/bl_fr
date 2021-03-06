import React, {ReactNode, FC} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from "styled-components";
type Props = {
    children?: ReactNode
    title?: string
}

const Layout: FC = ({children, title = 'This is the default title'}: Props) => {

    return (
        <Container>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Header>
                <Nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/post/create-post">
                        <a>Create post</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/about">
                        <a>About</a>
                    </Link>{' '}
                </Nav>
            </Header>
            <Content>
                {children}
            </Content>
        </Container>
    )
};


const Container = styled.div`
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;

`;

const Header = styled.header`
  flex-grow: 1;
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: ${props => props.theme.palette.primary.light};
`;

const Nav = styled.header`
  padding: ${props => props.theme.spacing([2, 3])};
`;

const Content = styled.main`
  display: flex;
  justify-content: center;
  flex-grow: 8;
  background-color: ${props => props.theme.palette.common.white};
  width: 100%;
  padding: ${props => props.theme.spacing([3, 0])};
`;



export default Layout;
