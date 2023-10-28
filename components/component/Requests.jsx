"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Requests = () => {
  return (
    <>
   <Button>
    <Link href="/Home/Contact/Requests">
     {"My requests"}
     </Link>
    </Button>
  </>
  )
}

export default Requests