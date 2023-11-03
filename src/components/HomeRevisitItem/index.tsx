import React from 'react'
import { HomeRevisitItemProps } from '../../utils/types/components/HomeRevisitItem'
import * as S from './styles'
import { ExpandIcon } from '../../utils/imports/icons'
import { parseDate } from '../../utils/toolbox/parsers'

const HomeRevisitItem = ({ info }: HomeRevisitItemProps) => {
  
  return (
    <S.El activeOpacity={0.7}>
      <S.Left>
        <S.PersonName>{info.person_name ?? '-'}</S.PersonName>
        <S.SmallerInfo>{info.neighborhood ?? '-'}</S.SmallerInfo>
      </S.Left>
      <S.Right>
        <S.SmallerInfo>{parseDate(info.last_date) ?? '-'}</S.SmallerInfo>
        <ExpandIcon />
      </S.Right>
    </S.El>
  )
}

export default HomeRevisitItem
