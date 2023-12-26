import { FC } from 'react'
import Button from '@/components/Button'
import { getServerSession } from 'next-auth'
//import { Session } from 'inspector'
import { authOptions } from '@/lib/auth'

interface pageProps {
  
}

const page = async({}) => {
    const session = await  getServerSession(authOptions)
  return <pre>{JSON.stringify(session)}</pre>

}

export default page