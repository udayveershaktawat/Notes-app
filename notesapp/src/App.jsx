import React from "react";

const App = () => {
  return (
    <div className="h-screen  bg-black text-white">
      <form className="flex items-start flex-col gap-4  p-10 " action="">
        <input type="text" 
        placeholder="Enter Notes Task " 
        className="px-5 py-2 w-1/2 border-2 rounded"
        
        />
        <input type="text" placeholder="Write Details " 
        className="px-5 h-20 w-1/2   py-2 border-2 rounded"
        
        />
        <button className="bg-white w-1/2  text-black px-5 py-2 rounded">Add Note</button>
      </form>
    </div>
  );
};

export default App;
