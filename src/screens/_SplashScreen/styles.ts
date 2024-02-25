import styled from "styled-components/native"


export const Page = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.background.default};
`

export const Container = styled.View`
  justify-content:  center;
  align-items:  center;
`

export const DotsContainer = styled.View`
  align-items: center;
  gap: 12px;
`

export const Dot = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.orange};
`