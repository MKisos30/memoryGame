import React, { useEffect, useRef, useState } from 'react'
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

  const clickCard = (id, index) => {
    const cardChoosenByUser = document.getElementById(index)
    console.log(cardChoosenByUser)
    if (userCarDChoose.length === 0 || userCarDChoose.length === 1) {
      cardChoosenByUser.classList.toggle('flip')
      userCarDChoose.push(cardChoosenByUser)
      checkCards(userCarDChoose, index)
    } 
  }
  
  const checkCards = (playerCards) => {
 
    console.log(playerCards[0].getAttribute("data-id"))
    console.log(playerCards[1].getAttribute("data-id"))

    if(playerCards.length===2) {
      if(playerCards[0].getAttribute("data-id") === playerCards[1].getAttribute("data-id")){
        setTimeout(()=>{
          playerCards[0].style.opacity = "0"
          playerCards[1].style.opacity = "0"
        },500)
      } else {
        setTimeout(()=>{
          playerCards[0].classList.toggle("flip")
          playerCards[1].classList.toggle("flip")
        }, 500)
      }
      userCarDChoose=[]
    }
  }



  return (
    <div>
      <h1>Welcome {nameUser}!</h1>
      <div className="allCardsGame">
        {cardForGame.map((card, index) => {
          return (
            <div key={index} className="cardsGame" data-id={card.id} id={index}
              onClick={() => clickCard(card.id, index)}>
              <div className="cardGameBack"></div>
              <div className="cardGameFront">
                <img 
                  src={card.src}
                  alt={card.alt} />
              </div>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default GamePage