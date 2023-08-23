import React from 'react'
import { HomeRevisitItemProps } from '../../utils/types/components/HomeRevisitItem'
import * as S from './styles'
import { ExpandIcon } from '../../utils/imports/icons'



const HomeRevisitItem = ({ info }: HomeRevisitItemProps) => {


  return (
    <S.El activeOpacity={.7}>
      <S.Left>
        <S.PersonName>{info.personName ?? '-'}</S.PersonName>
        <S.SmallerInfo>{info.location}</S.SmallerInfo>
      </S.Left>
      <S.Right>
        <S.SmallerInfo>{info.lastVisitDate}</S.SmallerInfo>
        <ExpandIcon />
      </S.Right>
    </S.El>
  )

}



export default HomeRevisitItem