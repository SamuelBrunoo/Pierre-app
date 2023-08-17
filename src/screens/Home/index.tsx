import React from 'react'
import * as S from './styles'


const HomeScreen = () => {


  return (
    <S.Page
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        backgroundColor: 'rgba(35, 35, 35, 1)',
        padding: 24,
        flex: 1,
        justifyContent: 'center'
      }}>
      <S.Content>
        <S.PageHead>
          <S.Welcome>
            <S.Hi>Boa tarde,</S.Hi>
            <S.UserName>Keila</S.UserName>
          </S.Welcome>
        </S.PageHead>
      </S.Content>
    </S.Page>
  )

}


export default HomeScreen