import Footer from '@/components/navigation/auth/Footer'
import Header from '@/components/navigation/auth/Header'

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}