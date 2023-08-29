import { Dimensions } from "react-native"
import styled from "styled-components/native"


export const Page = styled.ScrollView`
  padding-top: 20px;
`

export const Container = styled.View`
  row-gap: 10px;
  padding-right: 24px;
  padding-left: 24px;
  justify-content:  flex-start;
  row-gap: 20px;
`

export const Annual = styled.View`
  row-gap: 14px;
`

export const ReportTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #AFAFAF;
`

export const AnnualReport = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 6px;
`

export const AnnualReportItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${() => Math.floor(Dimensions.get('screen').width * .375)}px;
`

export const ARILabel = styled.Text`
  font-size: 16px;
  color: #FFF;
`

export const ARIValue = styled.Text`
  font-size: 16px;
  color: #AFAFAF;
`

export const MonthsSelect = styled.ScrollView`
  margin: 40px 0 20px;
  padding: 12px 24px;
  max-height: 50px;
  background-color: rgba(30, 30, 30, 1);
`

export const MonthsContainer = styled.View`
  flex-direction: row;
  column-gap: 32px;
`

export const MonthItem = styled.TouchableOpacity<{ active: boolean; }>`
  justify-content: center;
  opacity: ${({ active }) => active ? 1 : .5};
`

export const HoursLabels = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const MonthName = styled.Text`
  color: #FFF;
`

export const HoursLeft = styled.Text`
  color: #AFAFAF;
  font-size: 12px;
`

export const Monthly = styled.View`
  row-gap: 14px;
`

export const MonthlyReport = styled.View`
  row-gap: 6px;
`

export const MonthlyReportItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const MRILabel = styled.Text`
  font-size: 16px;
  color: #FFF;
`

export const MRIValue = styled.Text`
  font-size: 16px;
  color: #AFAFAF;
`