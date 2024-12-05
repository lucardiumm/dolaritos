'use client'

import useDollars from '$/hooks/useDollars'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useDollar from '$/hooks/useDollar'

export default function Page({ params }: {
    params: {
        name: string;
    }
}) {
    const dollars = useDollar(params.name)

    const Press = async () => {
        
    }

    return (
        <>
            <div className={'flex justify-center items-center content-center'}>
                
            </div>
        </> 
    )
}