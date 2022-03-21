import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Information } from "./components/Information";
import { NavBar } from "./components/NavBar";
import { Quote } from "./components/Quote";

export default function App() {
  const img = [
    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  const paragraphText = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos ea nostrum, quas molestias autem veniam natus deserunt et obcaecati commodi eveniet illum aliquid quo, voluptate est ipsum idperferendis?",
    "Lorem ipsum dolor sit amet consectetur adipisicing. Culpa, soluta molestiae nihil nam, at ea dolore debitis maxime aliquam adipisci, illum amet pariatur corrupti ipsam delectus repellat quod repudiandae minus?",
    "Lorem ipsum dolor sit amet consectetur. Tempora, nihil quo. Aliquam excepturi quaerat exercitationem reprehenderit, maxime saepe! Nostrum repudiandae, amet culpa iusto recusandae aliquid. Dolor iure saepe nobis fugit.",
    "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Sign up for more lorem ipsum",
  ];

  const links = ["link 1", "link 2", "link 3"];

  const heading = [
    "react tailwind",
    "information heading",
    "join us! lorem ipsum",
  ];

  const text = [
    "sign up",
    "Nihil et nobis aperiam natus quod quos quisquam quasi earum possimus amet obcaecati excepturi, ratione reprehenderit! Rem, in!",
    "anonymous",
    "header logo",
    "Scott Milliorn",
  ];

  return (
    <div className="m-0 mx-auto antialiased bg-gray-800 2xl:container">
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
