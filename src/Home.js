import React from 'react'

function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    const userEmail = localStorage.getItem("emailData");
    const username = localStorage.getItem("usernameData");
  return ( 
    <div>   
    <div className='flex bg-black text-white w-screen py-6'>
        <h1 className='text-3xl font-bold pl-10 pr-40'>Home page</h1>
        {userEmail && (
        <p className="text-center text-xl pl-10">User Email Address: {userEmail}</p>
      )}
      {username && (
        <h2 className="text-center text-xl pl-20 pr-32">Welcome :  {username}</h2>
      )}
      </div>
      <div className='block'>
      <button onClick={handleClick} className='bg-black border text-white border-white px-8 py-2 rounded-lg float-right mr-20 mt-10'>Log Out</button>
    </div> 
    </div>
  )
}

export default Home