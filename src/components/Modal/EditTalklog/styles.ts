import styled from 'styled-components/native'


export const Bg = styled.View`
  justify-content: center;
  background-color: ${({ theme }) => theme.background.modal};
  padding-right: 24px;
  padding-left: 24px;
  flex: 1;
`

export const Box = styled.View`
  background-color: ${({ theme }) => theme.background.default};
  border-radius: 8px;
  padding: 30px 24px;
  row-gap: 60px;
`

/* Component */
export const Title = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.orange};
`

export const Main = styled.View`
  justify-content: space-between;
  row-gap: 40px;
`

export const BtnsArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`