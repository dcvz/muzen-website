import styled from 'styled-components';

import flex from '../../styles/flex';
import { hover } from '../../styles/mixins';
import { breakpoints, smaller } from '../../styles/responsive';

export const Home = styled.div({
  ...flex.vertical,
  ...flex.centerVertical,
  flex: 1,
  minHeight: '100vh',
  minWidth: '100vw',
  backgroundColor: 'white',
});

export const Content = styled.div({
  width: '90%',
  ...flex.horizontal,
  [smaller(breakpoints.medium)]: {
    ...flex.verticalReverse,
    ...flex.centerHorizontal,
  },
})

export const Screens = styled.img({
  width: 460,
  [smaller(breakpoints.medium)]: {
    width: '90%',
  },
  [smaller(breakpoints.phone)]: {
    marginBottom: 80,
  },
})

export const Metadata = styled.div({
  marginLeft: 60,
  marginTop: 80,
  ...flex.vertical,
  ...flex.centerVertical,
  [smaller(breakpoints.medium)]: {
    width: '90%',
    marginLeft: 0,
    marginBottom: 80,
  },
  [smaller(breakpoints.phone)]: {
    marginTop: 20,
    marginBottom: 40,
  },
})

export const InnerFloat = styled.div({
  marginTop: -200,
  [smaller(breakpoints.medium)]: {
    marginTop: 0,
    ...flex.vertical,
    ...flex.centerHorizontal,
  },
})

export const Title = styled.div({
  fontSize: 70,
  fontWeight: '800',
  color: '#404042',
  cursor: 'default',
  [smaller(breakpoints.medium)]: {
    textAlign: 'center'
  },
  [smaller(breakpoints.phone)]: {
    fontSize: 50,
  },
})

export const Subtitle = styled.div({
  fontSize: 34,
  fontWeight: '300',
  color: '#404042',
  cursor: 'default',
  [smaller(breakpoints.medium)]: {
    textAlign: 'center'
  },
  [smaller(breakpoints.phone)]: {
    fontSize: 20,
  },
})

export const Footer = styled.div({
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  position: 'fixed',
  padding: 10,
  backgroundColor: '#404042',
})

export const Links = styled.div({
  ...flex.horizontal,
  ...flex.centerHorizontal,
  ...flex.centerVertical,
});

export const Link = styled.a({
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  transition: 'all 100ms linear',
  color: 'white',
  marginRight: 20,
  '&:last-of-type': {
    margin: 0
  },
  fontSize: 13,
  ...hover({
    borderBottom: '1px solid white'
  })
});
