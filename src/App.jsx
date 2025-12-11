import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ClassesPage from './pages/ClassesPage'
import CalendarPage from './pages/CalendarPage'
import AIChatPage from './pages/AIChatPage'  // Your existing AI Chat page
import AboutPage from './pages/AboutPage'
import './App.css'




function App() {
 const [currentPage, setCurrentPage] = useState('home')




 const handlePageChange = (pageName) => {
   setCurrentPage(pageName)
 }




 // Decide which page component to show
 let pageContent
 if (currentPage === 'home') {
   pageContent = <HomePage />
 } else if (currentPage === 'classes') {
   pageContent = <ClassesPage />
 } else if (currentPage === 'calendar') {
   pageContent = <CalendarPage />
 } else if (currentPage === 'aichat') {
   pageContent = <AIChatPage />
 } else if (currentPage === 'about') {
   pageContent = <AboutPage />
 }




 return (
   <div className="App">
     <Header />




     <Navigation
       currentPage={currentPage}
       onPageChange={handlePageChange}
     />




     {pageContent}




     <Footer
       schoolName="Jefferson Academy Secondary"
       email="Keaton.Lemanski@jajags.com"
     />
   </div>
 )
}




export default App
