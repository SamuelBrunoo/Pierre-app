import React from 'react'
import { HomeRevisitItemProps } from '../../utils/@types/components/HomeRevisitItem'
import * as S from './styles'
import { parseDate } from '../../utils/toolbox/parsers'
import theme from '../../assets/styles/themes'

const HomeRevisitItem = ({ info, openRevisit }: HomeRevisitItemProps) => {
  const handlePress = () => {
    openRevisit(info)
  }

  return (
    <S.El
      activeOpacity={0.7}
      onPress={handlePress}
      style={{ ...theme.shadows.default }}>
      <S.Left>
        <S.PersonName>{info.person_name ?? '-'}</S.PersonName>
        <S.SmallerInfo>{info.neighborhood ?? '-'}</S.SmallerInfo>
      </S.Left>
      <S.Right>
        <S.Date>{parseDate(info.last_date) ?? '-'}</S.Date>
      </S.Right>
    </S.El>
  )
}

export default HomeRevisitItem
