import React from 'react';

import * as S from './styles';
import appleIcon from '../../icons/apple.svg';

function DownloadButton() {
  return (
    <S.Button>
      <S.StoreIcon icon={appleIcon} />
      <S.TextBox>
          <S.CenteredBox>
            <S.DownloadText>Coming soon</S.DownloadText>
            <S.StoreNameText>App Store</S.StoreNameText>
        </S.CenteredBox>
      </S.TextBox>
    </S.Button>
  )
}

export default DownloadButton;
