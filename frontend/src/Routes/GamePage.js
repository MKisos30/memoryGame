import React, { useEffect, useState } from 'react'
import { gameCards } from '../Data/cards';

const GamePage = ({nameUser}) => {
  const [cardForGame, setCardForGame] = useState([])

  function newArrCard() {
    const cards = [];

    //const countOfcopies = 2

    for (let i = 0; i < 2; i++){
      for (let j = 0; j < gameCards.length; j++) {
        cards.push(gameCards[j])
      }
    } 

    cards.sort(() => Math.round(Math.random() * 100 ) - 50 )
    setCardForGame(cards)
  }

  useEffect(() => {
    newArrCard(gameCards)
  }, [])

  let userCarDChoose = []

  const clickCard = (id) => {
    if (userCarDChoose.length === 0 || userCarDChoose.length === 1) {
            //להפוך את הכרטיסים
      userCarDChoose.push(id)
      checkCards(userCarDChoose)
    } 
  }
  
  const checkCards = (playerCards) => {
    console.log(playerCards)
    if(playerCards.length===2) {
      if ( playerCards[0] === playerCards[1]) {
        alert('It is same')
      } else {
        alert('It is diffrent')
      }
      userCarDChoose = []
    } 
    // else {
    //   console.log('it is false, need to rotate back')
    // } 
  }

  return (
    <div>
      <h1>Welcome {nameUser}!</h1>
      <div>
        {cardForGame.map((card, index) => {
          return (
            <img onClick={() => clickCard(card.id)} className="cardImg" key={index} src={card.src} id={card.id} alt={card.alt} />
          )
        })}
      </div>
    </div>
  )
}

export default GamePage