import { Route } from 'wouter';

import Header from './components/Header';


// --------------> Pages
import Home from './pages/Home';
import Anime from './pages/Anime'
import Manga from './pages/Manga'
import Character from './pages/Character';


function App() {

  return (
    <div className="bg-violet-50 min-h-screen w-full flex flex-col min-w-full">
      <Header />
      <Route path='/' component={Home} />
      <Route path='/anime' component={Anime} />
      <Route path='/manga' component={Manga} />
      <Route path='/character' component={Character} />
    </div>
  )
}

export default App
