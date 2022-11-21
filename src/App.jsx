import BigPicture_Overview from "./content/Chapter1/BigPicture_overview";
import BigPicture_Tech from "./content/Chapter1/BigPicture_tech";
import Features_PseudoClasses_Has from "./content/Chapter2/Features_PseudoClasses_Has";
import Features_PseudoClasses_Is from "./content/Chapter2/Features_PseudoClasses_Is";
import Home from "./content/Chapter0/Home";
import Features_PseudoClasses_Clamp from "./content/Chapter2/Features_PseudoClasses_Clamp";
import Features_PseudoClasses_Transforms from "./content/Chapter2/Features_PseudoClasses_Transforms";
import Features_PseudoClasses_Logical from "./content/Chapter2/Features_PseudoClasses_Logical";
import Features_PseudoClasses_Media from "./content/Chapter2/Features_PseudoClasses_Media";
import Features_PseudoClasses_Transitions from "./content/Chapter2/Features_PseudoClasses_Transitions";

function App() {
  return (
    <main>
      <Home />
      <BigPicture_Overview />
      <BigPicture_Tech />
      <Features_PseudoClasses_Is />
      <Features_PseudoClasses_Has />
      <Features_PseudoClasses_Clamp />
      <Features_PseudoClasses_Transforms />
      <Features_PseudoClasses_Logical />
      <Features_PseudoClasses_Media />
      <Features_PseudoClasses_Transitions />
    </main>
  );
}

export default App;
