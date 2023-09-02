import styled from "styled-components/native"


export const Page = styled.ScrollView`
`

export const Container = styled.View`
  row-gap: 10px;
  padding-right: 24px;
  padding-left: 24px;
  justify-content:  flex-start;
  row-gap: 20px;
`

export const Legends = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Legend = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

export const LegendColor = styled.View<{ color: 'orange' | 'purple' }>`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${({ color }) => color === 'orange' ?
    'rgba(255, 138, 31, 1)' : 'rgba(159, 0, 216, 1)'
  };
`

export const LegendLabel = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #FFF;
`

export const Line = styled.View`
  height: 1px;
  background-color: #AFAFAF;
  width: 87%;
  align-self: center;
`

export const Resume = styled.View`
  row-gap: 12px;
`

export const ResumeTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #AFAFAF;
`

export const MonthlyHours = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MHLabel = styled.Text`
  font-size: 16px;
  color: #FFF;
`

export const MHValue = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #AFAFAF;
`

export const MonthlyCalcs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 32px;
`

export const Descriptions = styled.View`
  width: 120px;
  row-gap: 0px;
`

export const Category = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const CatLabel = styled.Text`
  font-size: 16px;
  color: #FFF;
`

export const CatValue = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #AFAFAF;
`

export const Arrengements = styled.View`
  width: 40px;
  row-gap: 0px;
`

export const ArrResume = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ArrLabel = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: #AFAFAF;
`

export const ButtonsArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const Btn = styled.TouchableOpacity`
  color: #FFF;
  align-items: center;
  row-gap: 6px;
`

export const BtnIconArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50px;
  background-color: rgba(32, 32, 32, 1);
`

export const BtnName = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #FFF;
  text-align: center;
`