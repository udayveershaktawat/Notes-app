import React from "react";

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form submitted")
  }


  return (
    <div className="h-screen  bg-black text-white">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}

       className="flex items-start flex-col gap-4  p-10 " action="">
        <input type="text" 
        placeholder="Enter Notes Task " 
        className="px-5 py-2 w-1/2 border-2 font-medium rounded outline-none"
        
        />
        <textarea type="text" placeholder="Write Details " 
        className="px-5 h-32 w-1/2 font-medium  py-2 border-2 rounded outline-none"
        
        />
        <button className="bg-white w-1/2 font-medium text-black px-5 py-2 rounded outline-none">Add Note</button>
      </form>
    </div>
  );
};

export default App;
