import styled from 'styled-components';

import Icon from '../../icons/Icon';
import flex from '../../styles/flex';
import { hover } from '../../styles/mixins';
import { breakpoints, smaller } from '../../styles/responsive';

export const Button = styled.div({
  padding: 10,
  width: '100%',
  maxWidth: 200,
  marginTop: 50,
  borderRadius: 10,
  ...flex.horizontal,
  background: '#404042',
  ...flex.centerVertical,
  ...hover({
    background: '#585859',
  }),
  [smaller(breakpoints.phone)]: {
    marginTop: 20,
  },
})

export const StoreIcon = styled(Icon)({
  width: 26,
  height: 26,
  marginRight: 0,
  marginLeft: 8,
})

export const TextBox = styled.div({
  width: '80%',
  ...flex.horizontal,
  ...flex.centerHorizontal,
  marginLeft: -10,
})

export const CenteredBox = styled.div({})

export const DownloadText = styled.div({
  fontSize: 18,
  color: 'white',
  [smaller(breakpoints.phone)]: {
    fontSize: 12,
  },
})

export const StoreNameText = styled.div({
  fontSize: 24,
  marginTop: -2,
  color: 'white',
  fontWeight: 800,
  [smaller(breakpoints.phone)]: {
    fontSize: 18,
  },
})
