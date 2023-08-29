import styled from 'styled-components/native'



export const El = styled.View`
  border-radius: 4px;
  background-color: rgba(30, 30, 30, 1);
  padding: 14px 16px;
  row-gap: 10px;
`

export const WeekDays = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const WD = styled.View`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`

export const WDName = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #FFF;
  text-align: center;
`

export const Rows = styled.View`
  row-gap: 5px;
`

export const Week = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Day = styled.TouchableOpacity<{ default: boolean; active: boolean; }>`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({ active }) => active ? '#3A3A3A' : 'transparent'};
  justify-content: center;
  opacity: ${p => p.default ? 1 : .4};
`

export const DayNumber = styled.Text`
  color: #FFF;
  text-align: center;
  font-weight: 300;
`
