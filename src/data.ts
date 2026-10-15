interface InfoCard {
  alt: string;
  height: number;
  imgSrc: string;
  pText: string;
  width: number;
}

interface Content {
  navLogo: string;
  navLinkFirst: string;
  navLinkMiddle: string;
  navLinkLast: string;

  heroHeading: string;
  heroBody: string;
  heroButtonLabel: string;

  infoHeading: string;
  infoCards: readonly InfoCard[];

  quote: string;
  quoteAuthor: string;

  contactHeading: string;
  contactBody: string;
  contactButtonLabel: string;

  footerOwner: string;
}

const content: Content = {
  navLogo: "header logo",
  navLinkFirst: "link 1",
  navLinkMiddle: "link 2",
  navLinkLast: "link 3",

  heroHeading: "react tailwind",
  heroBody:
    "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  heroButtonLabel: "sign up",

  infoHeading: "information heading",
  infoCards: [
    {
      alt: "image1",
      height: 980,
      imgSrc:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      pText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos ea nostrum, quas molestias autem veniam natus deserunt et obcaecati commodi eveniet illum aliquid quo, voluptate est ipsum idperferendis?",
      width: 1470,
    },
    {
      alt: "image2",
      height: 624,
      imgSrc:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      pText:
        "Lorem ipsum dolor sit amet consectetur adipisicing. Culpa, soluta molestiae nihil nam, at ea dolore debitis maxime aliquam adipisci, illum amet pariatur corrupti ipsam delectus repellat quod repudiandae minus?",
      width: 935,
    },
    {
      alt: "image3",
      height: 624,
      imgSrc:
        "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      pText:
        "Lorem ipsum dolor sit amet consectetur. Tempora, nihil quo. Aliquam excepturi quaerat exercitationem reprehenderit, maxime saepe! Nostrum repudiandae, amet culpa iusto recusandae aliquid. Dolor iure saepe nobis fugit.",
      width: 935,
    },
  ],

  quote:
    "Nihil et nobis aperiam natus quod quos quisquam quasi earum possimus amet obcaecati excepturi, ratione reprehenderit! Rem, in!",
  quoteAuthor: "anonymous",

  contactHeading: "join us! lorem ipsum",
  contactBody: "Sign up for more lorem ipsum",
  contactButtonLabel: "sign up",

  footerOwner: "Scott Milliorn",
};

export type { Content, InfoCard };
export { content };
