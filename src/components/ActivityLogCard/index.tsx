import React from 'react'
import { ActivityLogCardProps } from '../../utils/@types/components/ActivityLogCard'
import * as S from './styles'
import theme from '../../assets/styles/themes'
import GLOBALS from '../../utils/defaults/GLOBALS'
import { getHourString } from '../../utils/toolbox/parsers/date'

const ActivityLogCard = ({ info }: ActivityLogCardProps) => {
  const handlePress = () => {
    // open context menu
  }

  return (
    <S.El
      activeOpacity={0.7}
      onPress={handlePress}
      style={{ ...theme.shadows.default }}>
      <S.Left>
        <S.PersonName>
          {GLOBALS.MODALITIES.find(m => m.id === info.type)?.name ?? '-'}
          {` ${info.partner ? `com ${info.partner}` : ''}`}
        </S.PersonName>
        <S.SmallerInfo>{`${getHourString(info.hourStart)} - ${getHourString(
          info.hourEnd,
        )}`}</S.SmallerInfo>
      </S.Left>
    </S.El>
  )
}

export default ActivityLogCard
