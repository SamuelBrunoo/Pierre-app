import styled from 'styled-components/native'


export const Bg = styled.View`
  background-color: ${({ theme }) => theme.background.modal};
  padding: 30px 24px 60px;
  flex: 1;
`

/* MapView */
export const Box = styled.View`
  background-color: ${({ theme }) => theme.background.default};
  flex: 1;
  border-radius: 8px;
  padding: 30px 24px;
  row-gap: 60px;
`

/* Component */
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;
`

export const Main = styled.View`
  margin-top: 20px;
  justify-content: space-between;
  flex: 1;
  row-gap: 40px;
`

export const BtnsArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`