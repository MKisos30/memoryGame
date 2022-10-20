import React, { useEffect, useRef, useState } from 'react'
import { gameCards } from '../Data/cards';

const GamePage = () => {
  const [cardForGame, setCardForGame] = useState([])
  const [score, setScore] = useState(0)
  const [nameUser, setNameUser] = useState(localStorage.getItem('name'))

  useEffect(() => {
    (()=>{
      const body= document.body;
      console.log(body)
      body.style =
        "    background:linear-gradient(0deg, rgb(250, 149, 112)  0%, rgb(63, 152, 96) 100%) no-repeat fixed;";
    })()
  }, []);


  function newArrCard() {
    const cards = [];

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
        // setTimeout(()=>{
        //   playerCards[0].style.opacity = "0"
        //   playerCards[1].style.opacity = "0"
        // },500)
        setScore(score + 1)
      } else {
        setTimeout(()=>{
          playerCards[0].classList.toggle("flip")
          playerCards[1].classList.toggle("flip")
        }, 500)
      }
      
      userCarDChoose=[]
    }
  }
  
  useEffect(()=>{
    
    if(score>0) {
      if(cardForGame.length/2===score) {
        setTimeout(()=>{
            const cardsGame = document.querySelector(".allCardsGame")
            const winGame = document.querySelector(".winGame")

            cardsGame.classList.add("displayNoneCardsGame")
            winGame.classList.add("displayWinBlock")
            
        },500)
      }
    }
  },[score])

  const handlePlayAgain = () => {
    window.location.reload()
  }  


  return (
    <div className="pageGame">
      <div className="gamePageHeader">
        <h1>Welcome {nameUser}!</h1>
        <div>score: {score}</div>
      </div>
      <div className='allCardsGame'>
        {cardForGame.map((card, index) => {
          return (
            <div
              key={index}
              data-id={card.id} id={index}
              onClick={() => clickCard(card.id, index)}
              className="cardsGame">
              <div className='cardGameBack'></div>
              <div className='cardGameFront'>
                <img
                  src={card.src}
                  alt={card.alt} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="winGame">
        <h2>You win!</h2>
        <button onClick={handlePlayAgain}>Play again</button>
      </div>
    </div>
  )
}

export default GamePage