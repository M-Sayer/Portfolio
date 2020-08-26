import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
background: ${({ theme }) => theme.primaryLight}
color: ${({ theme }) => theme.primaryDark}

`