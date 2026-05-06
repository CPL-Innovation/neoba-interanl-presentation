import './user-testing.css'
import SlideTitle from './sections/SlideTitle'
import SlideWhatWeTested from './sections/SlideWhatWeTested'
import SlideWhoParticipated from './sections/SlideWhoParticipated'
import SlideFinding1 from './sections/SlideFinding1'
import SlideFinding2 from './sections/SlideFinding2'
import SlideFinding3 from './sections/SlideFinding3'
import SlideFinding4 from './sections/SlideFinding4'
import SlideFinding5 from './sections/SlideFinding5'
import SlideWhatItMeans from './sections/SlideWhatItMeans'
import SlideWhatsNext from './sections/SlideWhatsNext'
import SlideCaveats from './sections/SlideCaveats'
import SlideThanks from './sections/SlideThanks'

export default function UserTesting() {
  return (
    <div className="ut-deck">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <SlideTitle />
        <SlideWhatWeTested />
        <SlideWhoParticipated />
        <SlideFinding1 />
        <SlideFinding2 />
        <SlideFinding3 />
        <SlideFinding4 />
        <SlideFinding5 />
        <SlideWhatItMeans />
        <SlideCaveats />
        <SlideWhatsNext />
        <SlideThanks />
      </main>
    </div>
  )
}
