import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    
    {/*The Reason I have used navigate is when user clicks on particular doctor card. then user need to navigate to that doctor's id */}
    const navigate = useNavigate();

    {/* I have accessed from Appcontext*/}
    const {doctors} = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'> {/*in this div i have stored two elements which is h1 and p tag.*/}
         <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
         
         <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'> {/*In this section i have used map function and grid for responsiveness and also slice method to display only 10 doctors*/}
            {doctors.slice(0,12).map((item,index)=>( 
                <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-violet-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                 <img className="bg-violet-300" src={item.image} alt="image" />
                 <div className='p-4'>
                 <div className={`flex items-center gap-2 text-sm text-center ${item.available ? ' text-green-500' : 'text-red-500'}`}>
                    <p className={`w-2 h-2 ${item.available ? ' bg-green-500' : 'bg-red-500'} rounded-full`}></p><p>{item.available ? 'Available':'Not Available'}</p>
                 </div>
                 <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                 <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
                </div>
            ))}
         </div> 
         <button onClick={()=>{navigate('/doctors'), scroll(0,0)}} className='bg-violet-300 text-black-600 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  
  )
}

export default TopDoctors