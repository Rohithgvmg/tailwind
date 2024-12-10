import { useState } from 'react'
import  {Button}  from './components/Button'
import {Input} from './components/Input'
function App() {

  return (
    <>
     <div className="bg-purple-400 h-screen w-screen text-3xl flex justify-center items-center">
      <div>
     <Input type="text" placeholder="Username"/>
     <br></br>
      <Button disabled={true}>Sign up</Button>
      </div>
     </div>
     
    </>
  )
}

export default App
