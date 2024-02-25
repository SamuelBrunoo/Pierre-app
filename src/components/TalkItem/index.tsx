import React from 'react'
import * as S from './styles'
import { LocationIcon } from '../../utils/imports/icons'
import { TRevisitFStore } from '../../utils/@types/_ministery/revisit'
import { dateParser } from '../../utils/toolbox/parsers'

// TODO -> move to 'types/components'
type Props = {
  talk: TRevisitFStore
  onSelect: (rInfo: TRevisitFStore) => void
}

const TalkItem = ({ talk, onSelect }: Props) => {
  return (
    <S.El
      activeOpacity={0.7}
      style={{
        elevation: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, .7)',
      }}
      onPress={() => onSelect(talk)}>
      <S.Left>
        <S.Names>
          <S.PersonName>{talk.person_name}</S.PersonName>
          <S.LocationName>{talk.neighborhood}</S.LocationName>
        </S.Names>
        <S.LastDate>
          {dateParser.getDateString(
            (talk?.last_date as Date | number) ?? 0,
            'bra',
          )}
        </S.LastDate>
      </S.Left>
      <S.Right>
        {!!talk.location.latitude && !!talk.location.longitude &&
          <LocationIcon />
        }
      </S.Right>
    </S.El>
  )
}

export default TalkItem
