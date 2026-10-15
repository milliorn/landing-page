import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Information } from "./components/Information";
import { NavBar } from "./components/NavBar";
import { Quote } from "./components/Quote";
import { content } from "./data";

export default function App() {
  return (
    <main className="m-0 mx-auto antialiased bg-gray-900 2xl:container">
      <NavBar
        linkFirst={content.navLinkFirst}
        linkLast={content.navLinkLast}
        linkMiddle={content.navLinkMiddle}
        logo={content.navLogo}
      />
      <Hero
        bText={content.heroButtonLabel}
        hText={content.heroHeading}
        pText={content.heroBody}
      />
      <Information
        cards={content.infoCards}
        infoHeading={content.infoHeading}
      />
      <Quote author={content.quoteAuthor} quote={content.quote} />
      <Contact
        button={content.contactButtonLabel}
        h2={content.contactHeading}
        p={content.contactBody}
      />
      <Footer owner={content.footerOwner} />
    </main>
  );
}
