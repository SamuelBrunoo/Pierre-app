import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 16px;
  row-gap: 4px;
`

export const AreaLabel = styled.Text<{ error: boolean }>`
  font-size: 12px;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.orange};
  margin-left: 10px;
`

export const MapWrapper = styled.TouchableOpacity<{ error: boolean }>`
  background-color: ${({ theme }) => theme.background.cards};
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.82;
  border-radius: 4px;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.red : 'transparent'};
  border-width: 1px;
`

export const AdressLabel = styled.Text<{ error: boolean }>`
  font-size: 12px;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.lightGrey};
`
