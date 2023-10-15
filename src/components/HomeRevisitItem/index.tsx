import React from 'react'
import { HomeRevisitItemProps } from '../../utils/types/components/HomeRevisitItem'
import * as S from './styles'
import { ExpandIcon } from '../../utils/imports/icons'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { padValue } from '../../utils/toolbox/parsers/padValue'
import { utcToLocalTime } from '../../utils/toolbox/parsers/UTCtoLocalTime'

const HomeRevisitItem = ({ info }: HomeRevisitItemProps) => {
  const parseDate = (date: FirebaseFirestoreTypes.Timestamp) => {
    const d = utcToLocalTime(new Date(date.seconds * 1000))
    const str =
      `${padValue(d.getDate())}/` +
      `${padValue(d.getMonth() + 1)}/` +
      `${d.getFullYear()}`

    return str
  }

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
