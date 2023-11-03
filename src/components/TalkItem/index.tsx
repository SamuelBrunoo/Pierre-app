import React from 'react'
import * as S from './styles'
import { LocationIcon } from '../../utils/imports/icons'
import { RevisitFStore } from '../../utils/types/_ministery/revisit'
import { dateParser } from '../../utils/toolbox/parsers'

// TODO -> move to 'types/components'
type Props = {
  talk: RevisitFStore
  // talk: {
  //   person_name: string
  //   lastDate: string | number
  //   location: string
  // }
}

const TalkItem = ({ talk }: Props) => {
  return (
    <S.El
      activeOpacity={0.7}
      style={{
        elevation: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, .7)',
      }}>
      <S.Left>
        <S.PersonName>{talk.person_name}</S.PersonName>
        <S.LastDate>
          {dateParser.getDateString(
            (talk?.last_date as Date | number) ?? 0,
            'bra',
          )}
        </S.LastDate>
      </S.Left>
      <S.Right>
        <S.LocationName>{talk.neighborhood}</S.LocationName>
        <LocationIcon />
      </S.Right>
    </S.El>
  )
}

export default TalkItem
