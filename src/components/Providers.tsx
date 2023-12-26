//react-hot-toast --  to display toaster in react app 
//to use context in react 

'use client'
import { FC,ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children:ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
  return (
    <>
    <Toaster position='top-center' reverseOrder={false}/>
    {children}
    </>
)}

export default Providers