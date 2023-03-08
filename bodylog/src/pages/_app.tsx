import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <StyledLayout>
        <Component {...pageProps} />
      </StyledLayout>
    </>
  );
}

const StyledLayout = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
