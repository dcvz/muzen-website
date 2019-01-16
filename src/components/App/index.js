import React from 'react';

import * as S from './styles';
import screens from '../../images/screens.png';
import DownloadButton from '../DownloadButton';

function Home() {

  return (
    <S.Home>
      <S.Content>
        <S.Screens src={screens} />
        <S.Metadata>
          <S.InnerFloat>
            <S.Title>Muzen</S.Title>
            <S.Subtitle>listen. share. enjoy.</S.Subtitle>
            <DownloadButton />
          </S.InnerFloat>
        </S.Metadata>
      </S.Content>
      <S.Footer>
        <S.Links>
          <S.Link href="mailto:team@doublesymmetry.com">Contact</S.Link>
          <S.Link href="privacy.html">Privacy</S.Link>
          <S.Link href="disclaimer.html">Disclaimer</S.Link>
        </S.Links>
      </S.Footer>
    </S.Home>
  )
}

export default Home;
