import React from 'react'
import * as S from './styles'
import { LocationIcon } from '../../utils/imports/icons'


const TalkItem = () => {


  return (
    <S.El
      activeOpacity={.7}
      style={{
        elevation: 5,
        shadowOpacity: 1,
        shadowColor: 'rgba(0, 0, 0, .7)',
      }}
    >
      <S.Left>
        <S.PersonName>Beltrete Maria</S.PersonName>
        <S.LastDate>10/07/2023</S.LastDate>
      </S.Left>
      <S.Right>
        <S.LocationName>Rio Farias</S.LocationName>
        <LocationIcon />
      </S.Right>
    </S.El>
  )

}


export default TalkItem