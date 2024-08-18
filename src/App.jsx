import Hero from './components/Hero';
import Demo from './components/demo';

import './App.css';

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient"/>
        </div>
        <div className='app'>
          {/*show content of headings and summarizer demo */}
            <Hero />
            <Demo />
        </div>
    </main>
    
  )
}

export default App