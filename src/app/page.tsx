import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'
import LinkButton from '@/components/LinkButton'
import Firstscreen from '@/components/Firstscreen'
import Map from '@/components/Map'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header>
        <LinkButton label="Подключить подписку" outline={true} href="/callback" />
      </Header>
      <Firstscreen />
      <Slider />
      <Gallery />
      <Map />
      <Footer />
    </main>
  )
}
