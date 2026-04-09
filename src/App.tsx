import Hero from './sections/Hero'
import StartingPoint from './sections/StartingPoint'
import ConvergenceSignals from './sections/ConvergenceSignals'
import ConceptEvolution from './sections/ConceptEvolution'
import ConstraintsAsAssets from './sections/ConstraintsAsAssets'
import ArchiveDiscovery from './sections/ArchiveDiscovery'
import RemixFramework from './sections/RemixFramework'
import WashingtonsJourney from './sections/WashingtonsJourney'
import ThursdayCrew from './sections/ThursdayCrew'
import Bridge from './sections/Bridge'
import Proposal from './sections/Proposal'
import Footer from './sections/Footer'
import { ExportControls } from './components/ExportControls'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <Hero />
        <StartingPoint />
        <ConvergenceSignals />
        <ConceptEvolution />
        <ConstraintsAsAssets />
        <ArchiveDiscovery />
        <RemixFramework />
        <WashingtonsJourney />
        <ThursdayCrew />
        <Bridge />
        <Proposal />
        <Footer />
      </main>
      <ExportControls />
    </>
  )
}

export default App
