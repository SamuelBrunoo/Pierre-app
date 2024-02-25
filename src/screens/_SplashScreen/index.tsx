import React, { useEffect, useState } from 'react'
import * as S from './styles'

const SplashScreen = () => {
  

  return (
    <S.Page
      nestedScrollEnabled={true}
      contentContainerStyle={{
        justifyContent: 'flex-start',
        rowGap: 30,
        paddingBottom: 60,
      }}>
      <S.Container>
        <S.DotsContainer>
          <S.Dot />
          <S.Dot />
          <S.Dot />
        </S.DotsContainer>
      </S.Container>
    </S.Page>
  )
}

export default SplashScreen
