import { useState } from 'react'
import './App.css'
import SelectedCard from './Components/SelectedCard/SelectedCard'
import Blogs from './Components/blogs/blogs'

function App() {
  const [selectedCard , setSelectedCard] = useState([]);
  const [credit , setCredit] =useState(0);
  const [remaining, setRemaining] = useState(20);
    const handleSelectedCard = (blog) => {
      const have = selectedCard.find(item => item.id === blog.id);
      if(have){
        alert("alread add");
      }
      else{
        const nowCreadit = credit + blog.credit_hour ;
        
        if(20 >= nowCreadit){
          setSelectedCard([...selectedCard , blog]);
          setCredit(credit + blog.credit_hour);
          setRemaining(remaining - blog.credit_hour )
        }
        else{
          alert("Creadit Finished")
        }
        
      }

    }
    console.log(selectedCard)
  return (
    <div className='bg-[#F3F3F3]'>
    
      <h1 className='text-center font-bold text-black text-3xl py-10'>Course Registration</h1>
      <div className='flex gap-8 mx-auto w-[80%]'>
      <Blogs handleSelectedCard={handleSelectedCard} ></Blogs>
      <SelectedCard selectedCard={selectedCard} credit={credit} remaining={remaining} ></SelectedCard>
      </div>
    
    </div>
  )
}

export default App
