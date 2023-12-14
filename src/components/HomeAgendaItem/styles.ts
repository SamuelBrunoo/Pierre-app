import styled from 'styled-components/native'

export const El = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.cards};
  padding: ${({ theme }) => theme.paddings.lineCard};
  border-radius: 6px;
  margin: 4px;
`

export const Info = styled.View``

export const EventName = styled.View`
  flex-direction: row;
`

export const EventModality = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blackPiano};
`

export const EventPartner = styled.Text`
  font-size: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.lightGrey};
`

export const EventTime = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.lightGrey};
`

export const StudentName = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.orange};
`

export const Checkbox = styled.View<{ done: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid
    ${p => (!p.done ? p.theme.colors.darkGrey : p.theme.colors.orange)};
  border-radius: 6px;
  color: ${({ done, theme }) =>
    !done ? theme.colors.darkGrey : theme.colors.orange};
  justify-content: center;
  align-items: center;
  fill: ${({ done, theme }) =>
    !done ? theme.colors.darkGrey : theme.colors.orange};
`
