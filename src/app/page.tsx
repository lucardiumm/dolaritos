'use client'

import useDollars from '$/hooks/useDollars'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Card from '@/components/Card'

export default function Page() {
    const dollars = useDollars()

    return (
        <>
            <div className={'flex bg-[#111B21] justify-center items-center content-center w-screen h-screen'}>
                <div className={'flex justify-center items-center content-center flex-wrap flex-row w-3/5 bg-red-400 gap-7'}>
                    {dollars.map(({ buy, sell, casa, spread, dateRefresh, name }, index) => (
                        <Card buy={buy} sell={sell} name={name} dateRefresh={dateRefresh} key={index} casa={casa} spread={spread} />
                    ))}
                </div>
            </div>
        </> 
    )
}