import { useState } from "react"

const Box = () => {

  let prev;
  const[ count, setCount ] = useState(0);

  const quotes = [
    {
      id: 1,
      author: 'Booker T.Washington',
      quote: 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.'
    },
    {
      id: 2,
      author: 'Benjamin Franklin',
      quote: "I didn't fail the test. I just found 100 ways to do it wrong."
    },
    {
      id: 3,
      author: 'Eleanor Roosevelt',
      quote: "Remember no one can make you feel inferior without your consent."
    },
    {
      id: 4,
      author: 'Buddha',
      quote: "The mind is everything. What you think you become."
    },
    {
      id: 5,
      author: 'Florence Nightingale',
      quote: 'I attribute my success to this: I never gave or took any excuse.'
    },
    {
      id: 6,
      author: 'Abraham Lincoln',
      quote: "It’s not the years in your life that count. It’s the life in your years."
    }
  ]

  const handleClick = () => {
    prev = count + 1;
    if (prev > quotes.length - 1){
      prev = 0
    }
    setCount(prev);
  }

  return (
    <div id="quote-box">
      <p id='text'>"{quotes[count].quote}"</p>
      <p id='author'>- {quotes[count].author}</p>
      <a id="tweet-quote" href= {`https://www.twitter.com/intent/tweet?text=${quotes[count].quote}&hashtags=quotes`} target="_blank" rel="noreferrer">Tweet</a>
      <button id='new-quote' onClick={handleClick}>New Quote</button>
    </div>
  )
}

export default Box;