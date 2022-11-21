import Home from "./content/Chapter0/Home"
import Index from "./content/Chapter0/Index"

import BigPicture_Chapter from "./content/Chapter1/BigPicture_chapter"
import BigPicture_Overview from "./content/Chapter1/BigPicture_overview"
import BigPicture_Tech from "./content/Chapter1/BigPicture_tech"

import Features_Chapter from "./content/Chapter2/Features_Chapter"
import Features_Pseudo from "./content/Chapter2/Features_Pseudo"
import Features_Clamp from "./content/Chapter2/Features_Clamp"
import Features_Transforms from "./content/Chapter2/Features_Transforms"
import Features_Logical from "./content/Chapter2/Features_Logical"
import Features_Media from "./content/Chapter2/Features_Media.tjsx"
import Features_Transitions from "./content/Chapter2/Features_Transitions"

import Thanks from "./content/Chapter3/Thanks"

import { sectionConfigs } from "./content/constants"

function App() {
  return (
    <main>
      <Home />
      <Index />

      <BigPicture_Chapter title={sectionConfigs.chapter1.title} chapter={1} />
      <BigPicture_Overview
        title={sectionConfigs.chapter1.title}
        sectionId={sectionConfigs.chapter1.overview.id}
        subtitle={sectionConfigs.chapter1.overview.subtitle}
        chapter={1}
      />
      <BigPicture_Tech
        title={sectionConfigs.chapter1.title}
        sectionId={sectionConfigs.chapter1.tech.id}
        subtitle={sectionConfigs.chapter1.tech.subtitle}
        chapter={1}
      />

      <Features_Chapter title={sectionConfigs.chapter2.title} chapter={2} />
      <Features_Pseudo
        title={sectionConfigs.chapter2.title}
        subtitle={sectionConfigs.chapter2.pseudo_classes.subtitle}
        sectionId={sectionConfigs.chapter2.pseudo_classes.id}
        chapter={2}
      />
      <Features_Clamp
        title={sectionConfigs.chapter2.title}
        subtitle={sectionConfigs.chapter2.clamp.subtitle}
        sectionId={sectionConfigs.chapter2.clamp.id}
        chapter={2}
      />
      <Features_Transforms
        title={sectionConfigs.chapter2.title}
        subtitle={sectionConfigs.chapter2.transform.subtitle}
        sectionId={sectionConfigs.chapter2.transform.id}
        chapter={2}
      />
      <Features_Logical
        title={sectionConfigs.chapter2.title}
        subtitle={sectionConfigs.chapter2.logical_properties.subtitle}
        sectionId={sectionConfigs.chapter2.logical_properties.id}
        chapter={2}
      />
      <Features_Media
        title={sectionConfigs.chapter2.title}
        subtitle={sectionConfigs.chapter2.media.subtitle}
        sectionId={sectionConfigs.chapter2.media.id}
        chapter={2}
      />
      <Features_Transitions
        title={sectionConfigs.chapter2.title}
        subtitle={sectionConfigs.chapter2.transition.subtitle}
        sectionId={sectionConfigs.chapter2.transition.id}
        chapter={2}
      />

      <Thanks />
    </main>
  )
}

export default App
