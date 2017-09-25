import styled from 'styled-components';
import { fonts } from './resources/styles/fonts';
import { colors } from './resources/styles/colors';

export const Theme = styled.div`
  ${fonts.primary};
  color: ${colors.textPrimary};
`