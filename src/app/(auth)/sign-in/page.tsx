'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import {useDebounceValue} from 'usehooks-ts'
const page=()=>{
  const [username,setUsername]=useState('')
  const [usefrnameMessage, setUsernameMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const debouncedUsername=useDebounceValue(username,300)
}

export default page