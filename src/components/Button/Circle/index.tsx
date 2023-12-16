import React, { useEffect } from 'react'
import * as S from './styles'

type Props = {
  title?: string
  action?: (value?: any) => void
  Icon?: React.FC<any>
}

const CircleBtn = ({ title, action, Icon }: Props) => {
  useEffect(() => {
    console.log({ title, action, Icon })
  }, [])

  return (
    <S.Btn onPress={action}>
      {Icon ? (
        <S.IconArea>
          <Icon />
        </S.IconArea>
      ) : null}

      {title ? <S.Title numberOfLines={1}>{title}</S.Title> : null}
    </S.Btn>
  )
}

export default CircleBtn
