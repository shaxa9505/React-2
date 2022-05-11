import React from 'react';
import Book from './Book';
import Loading from './Loading';

function App(props) {
  // const state = {
  //   name: "Shohrux",
  //   lastName: "Meliboyeev"
  // }

  // function sam (user) {
  //   return `${user.name}  ${user.lastName}`
  // }

  // const name = true
  
  return props.loading ? <Loading/> : (
    <div>
      {/* <h1>Salom {sam(state)}</h1>
      <p>{name ? "Shohrux" : "Yusuf"}</p> */}
      <Book  year={2020} price={50}/>
      <Book name={"React for beginners"} year={2021} price={60}/>
      <Book name={"Vue for beginners"} year={2022} price={70}>
        Bu kitob sotildi
      </Book>
    </div>
  )
}

export default App;