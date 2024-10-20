

import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import ChallengesList from './components/ChallengesList'
import TrendingCategoriesBox from './components/TrendingCategoriesBox'
import TopKCodersList from './components/TopKCodersList'

function App() {
 

  return (
    <>
     <Navbar/>
       <SignIn/>
       <SignUp/>
  <ChallengesList/>
    <TrendingCategoriesBox/>
     <TopKCodersList/>
    </>
  )
}

export default App
