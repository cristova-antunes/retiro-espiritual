import PageSlide from "../../components/PageSlide"
import typescript_logo from "../../assets/logos/ts.svg"
import firebase_logo from "../../assets/logos/firebase.svg"
import supabase_logo from "../../assets/logos/supabase.svg"

export default function BigPicture_Tech2({
  title,
  subtitle,
  chapter,
  sectionId,
}) {
  return (
    <PageSlide
      title={title}
      subtitle={subtitle}
      chapter={chapter}
      sectionId={sectionId}
    >
      <div className="margin-bottom-xxl section-stacks">
        <div>
          <h4 className="margin-bottom-m">Typescript</h4>
          <div className="margin-bottom-xxl">
            <img src={typescript_logo} alt="logo vite" height={250} />
          </div>
        </div>
        <div>
          <h4 className="margin-bottom-m">Serverless</h4>
          <div className="section-stacks">
            <img src={firebase_logo} alt="logo firebase" height={150} />
            <img src={supabase_logo} alt="logo supabase" height={150} />
          </div>
        </div>
      </div>

      <h4 className="margin-bottom-m">Outros tópicos</h4>
      <ul>
        <li className="margin-bottom-s">Preocupações: Accessibility</li>
        <li className="margin-bottom-s">
          What drives the most: Component-driven development{" "}
        </li>
        <li className="margin-bottom-s">
          PWA a ganharem força como solução transversal
        </li>
        <li className="margin-bottom-s">Headless CMS</li>
      </ul>
    </PageSlide>
  )
}
