import Link from 'next/link'

export default function Page() {
    return (
        <div className={'flex w-screen flex-col h-screen flex-1 justify-center items-center content-center bg-red-500'}>
            Register

            <Link href={'/Luca'}>Go to <b>Luca</b></Link>
            <Link href={'/'}>Volver</Link>
        </div>
    )
}