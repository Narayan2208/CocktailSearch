import React from 'react'
import CocktailList from '../component/CocktailList'
import Searchinput from '../component/Searchinput'

const Home = () => {
  // backgroundImage="url(https://img.freepik.com/free-vector/summer-freshness-background_8365-169.jpg?w=740&t=st=1684261224~exp=1684261824~hmac=fc6c444c59fc98ba1bdab1373b222e2412a9efdadc6282ed8739fa68d7792ff3)"
  return (
    <div>
    <Searchinput/>
      <CocktailList/>
    </div>
  )
}

export default Home