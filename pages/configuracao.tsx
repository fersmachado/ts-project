import type { NextPage } from 'next'
import Header from '../src/atomic/molecules/Header'


const Home: NextPage = () => {
  return (
    <div>
      <Header menuActive="Configuracao" />
    </div>
  )
}

export default Home;