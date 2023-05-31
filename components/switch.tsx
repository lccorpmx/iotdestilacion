import * as React from 'react';
import { useState } from 'react';
import { Power, Biohazard } from 'lucide-react';

export default function SwitchLabels() {

  const [toggleButton, setToggleButton]=useState(false);
  const handleclick = () =>{
    setToggleButton(!toggleButton)
    console.log(toggleButton, "value")
  }

  return (
    <div>
      <div onClick={handleclick} className='bg-black h-9 w-16 rounded-3xl flex items-center'>
        {toggleButton?
        <div className='h-5 w-5  rounded-2xl m-1'> <Power color="green" size={20}/></div>:<div className='rounded-2xl ml-10'><Power color="red" size={20}/></div>}
      </div>
    </div>
  );
}