import { sectionConfigs } from "../constants"

export default function Home() {
  return (
    <section className="is--index">
      <h1 className="margin-bottom-xl">No menu</h1>
      <h2 className="margin-bottom-base">{sectionConfigs.chapter1.title}</h2>
      <ul className="margin-bottom-l">
        <li>
          <a href={`#${sectionConfigs.chapter1.overview.id}`}>
            {sectionConfigs.chapter1.overview.subtitle}
          </a>
        </li>
        <li>
          <a href={`#${sectionConfigs.chapter1.tech.id}`}>
            {sectionConfigs.chapter1.tech.subtitle}
          </a>
        </li>
      </ul>
      <h2 className="margin-bottom-base">{sectionConfigs.chapter2.title}</h2>
      <ul className="margin-bottom-l">
        <li>
          <a href={`#${sectionConfigs.chapter2.pseudo_classes.id}`}>
            {sectionConfigs.chapter2.pseudo_classes.subtitle}
          </a>
        </li>
        <li>
          <a href={`#${sectionConfigs.chapter2.functions.id}`}>
            {sectionConfigs.chapter2.functions.subtitle}
          </a>
        </li>
        <li>
          <a href={`#${sectionConfigs.chapter2.logical_properties.id}`}>
            {sectionConfigs.chapter2.logical_properties.subtitle}
          </a>
        </li>
        <li>
          <a href={`#${sectionConfigs.chapter2.transform.id}`}>
            {sectionConfigs.chapter2.transform.subtitle}
          </a>
        </li>
        <li>
          <a href={`#${sectionConfigs.chapter2.media.id}`}>
            {sectionConfigs.chapter2.media.subtitle}
          </a>
        </li>
        <li>
          <a href={`#${sectionConfigs.chapter2.layers.id}`}>
            {sectionConfigs.chapter2.layers.subtitle}
          </a>
        </li>
        <li>
          <a href={`#${sectionConfigs.chapter2.transition.id}`}>
            {sectionConfigs.chapter2.transition.subtitle}
          </a>
        </li>
      </ul>
    </section>
  )
}
