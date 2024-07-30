import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'

export default function Callback() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header background='var(--color-black)' />
      <CallbackForm />
      <Footer />
    </main>
  )
}
