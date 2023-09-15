import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        toast.error(`Already added ${blog.course_name} course`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else{
        const nowCreadit = credit + blog.credit_hour ;
        
        if(20 >= nowCreadit){
          setSelectedCard([...selectedCard , blog]);
          setCredit(credit + blog.credit_hour);
          setRemaining(remaining - blog.credit_hour )
        }
        else{
          toast.error(`Your Credit ${remaining} hour remaining `, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
         
        }
        
      }

    }
    console.log(selectedCard)
  return (
    <div className='bg-[#F3F3F3]'>
    
      <h1 className='text-center font-bold text-black text-3xl py-10'>Course Registration</h1>
      <div className='lg:flex gap-5 p-5 md:px-[8%]'>
      <Blogs handleSelectedCard={handleSelectedCard} ></Blogs>
      <SelectedCard selectedCard={selectedCard} credit={credit} remaining={remaining} ></SelectedCard>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
