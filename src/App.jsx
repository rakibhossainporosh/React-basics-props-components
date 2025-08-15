import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserCard from './components/UserCard'
import ProductList from './components/ProductList'
import Counter from './components/Counter'
import NameInput from './components/NameInput'
import LoginStatus from './components/LoginStatus'

const App = () => {
  const product=[
    {id: 1, productName: "Laptop", price: 25000},
    {id: 2, productName: "Phone", price: 35000},
    {id: 3, productName: "Computer", price: 55000}
  ]
  return (
    <>
    <Header title="Welcome to my first React Page"/>
    <MainContent/>
    <UserCard name="Porosh" age="25" profession="Student" location="Dhaka"/>
    <ProductList items={product}/>
    <Counter/>
    <NameInput/>
    <LoginStatus/>
    <Footer/>
    </>
  )
}

export default App