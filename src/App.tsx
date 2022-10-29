import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Information } from "./components/Information";
import { NavBar } from "./components/NavBar";
import { Quote } from "./components/Quote";
import { heading, img, links, paragraphText, text } from "./data";

/* main app */
export default function App(): JSX.Element {
  return (
    <div className="m-0 mx-auto antialiased bg-gray-900 2xl:container">
      <NavBar
        linkFirst={links[0]}
        linkLast={links[2]}
        linkMiddle={links[1]}
        logo={text[3]}
      />
      <Hero bText={text[0]} hText={heading[0]} pText={paragraphText[3]} />
      <Information
        img={img}
        infoHeading={heading[1]}
        paragraph={paragraphText}
      />
      <Quote author={text[2]} quote={text[1]} />
      <Contact button={text[0]} h2={heading[2]} p={paragraphText[4]} />
      <Footer owner={text[4]} />
    </div>
  );
}
