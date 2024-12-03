'use client'

import useDollars from '$/hooks/useDollars'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Card from '@/components/Card'

export default function Page() {
    const dollars = useDollars()

    const Press = async () => {

    }

    return (
        <>
            <div className={'flex justify-center items-center content-center'}>
                <div className={'overflow-x-scroll'}>
                    {dollars.map(({ buy, sell, spread, dateRefresh, name }, index) => (
                        <Card buy={buy} sell={sell} name={name} dateRefresh={dateRefresh} key={index} spread={spread} />
                    ))}
                </div>
            </div>
        </> 
    )
}