import Link from 'next/link'

export default function Page() {
    return (
        <div className={'flex w-screen flex-col h-screen flex-1 justify-center items-center content-center bg-red-500'}>
            Login
            
            <Link href={'/Luca'}>Go to <code lang={'sh'}>Luca</code></Link>
            <Link href={'/'}>Volver</Link>
        </div>
    )
}