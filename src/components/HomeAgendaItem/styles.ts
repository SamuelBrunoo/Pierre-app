import styled from "styled-components/native"


export const El = styled.TouchableOpacity`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`

export const Info = styled.View``

export const EventName = styled.Text<{ done: boolean; }>`
  font-size:15px;
  font-weight:500;
  color:${({ done }) => done ? 'rgba(17,151,14,1)' : '#FFF'};
`

export const EventTime = styled.Text`
  font-size:12px;
  font-weight:300;
`

export const StudentName = styled.Text`
  font-size:12px;
  font-weight:500;
  color:#AFAFAF;
`

export const Checkbox = styled.View<{ done: boolean; }>`
  width:24px;
  height:24px;
  border:1px solid ${({ done }) => done ? 'rgba(17,151,14,1)' : '#6A6A6A'};
  border-radius: 6px;
  color:${({ done }) => done ? 'rgba(17,151,14,1)' : 'rgba(17,151,14,0)'};
  justify-content: center;
  align-items: center;
  fill:${({ done }) => done ? 'rgba(17,151,14,1)' : 'rgba(17,151,14,0)'};
`