import BigPicture_Overview from "./content/Chapter1/BigPicture_overview";
import BigPicture_Tech from "./content/Chapter1/BigPicture_tech";
import Features_Has from "./content/Chapter2/Features_Has";
import Features_Is from "./content/Chapter2/Features_Is";
import Home from "./content/Chapter0/Home";
import Features_Clamp from "./content/Chapter2/Features_Clamp";
import Features_Transforms from "./content/Chapter2/Features_Transforms";
import Features_Logical from "./content/Chapter2/Features_Logical";
import Features_Media from "./content/Chapter2/Features_Media";
import Features_Transitions from "./content/Chapter2/Features_Transitions";
import Links from "./content/Chapter3/Links";
import Thanks from "./content/Chapter3/Thanks";
import BigPictur_eOverview from "./content/Chapter1/BigPicture_overview";
import BigPicture_Chapter from "./content/Chapter1/BigPicture_chapter";
import Features_Chapter from "./content/Chapter2/Features_Chapter";

function App() {
  return (
    <main>
      <Home />

      <BigPicture_Chapter />
      <BigPicture_Overview />
      <BigPicture_Tech />

      <Features_Chapter />
      <Features_Is />
      <Features_Has />
      <Features_Clamp />
      <Features_Transforms />
      <Features_Logical />
      <Features_Media />
      <Features_Transitions />

      <Links />
      <Thanks />
    </main>
  );
}

export default App;
