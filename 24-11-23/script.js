const cE = (tag) => document.createElement(tag);
const sA = (nameEl, nameAttribute, attribute) =>
  nameEl.setAttribute(nameAttribute, attribute);
const cN = (nameEl, className) => (nameEl.className = className);
const tC = (nameEl, textContent) => (nameEl.textContent = textContent);

const navbarGen = (logoUrl) => {
  const navEl = cE("nav");
  const divImgEl = cE("div");
  const logoEl = cE("img");
  const divCentralBtnEl = cE("div");
  const homeBtnEl = cE("button");
  const aboutBtnEl = cE("button");
  const shopBtnEl = cE("button");
  const pagesBtnEl = cE("button");
  const contactBtnEl = cE("button");
  const divRightBtnEl = cE("div");
  const signUpBtnEl = cE("button");
  const orderNowBTnEl = cE("button");

  cN(navEl, "nav-bar");
  cN(divCentralBtnEl, "central-buttons-nav");
  cN(homeBtnEl, "nav-buttons");
  cN(aboutBtnEl, "nav-buttons");
  cN(shopBtnEl, "nav-buttons");
  cN(pagesBtnEl, "nav-buttons");
  cN(contactBtnEl, "nav-buttons");
  cN(signUpBtnEl, "nav-buttons");
  cN(orderNowBTnEl, "order-button");
  cN(divRightBtnEl, "nav-buttons-right");

  tC(homeBtnEl, "Home");
  tC(aboutBtnEl, "About");
  tC(shopBtnEl, "Shop");
  tC(pagesBtnEl, "Pages");
  tC(contactBtnEl, "Contacts");
  tC(signUpBtnEl, "Sign Up");
  tC(orderNowBTnEl, "Order now");

  sA(logoEl, "src", logoUrl);
  sA(logoEl, "alt", "logo");

  divRightBtnEl.append(signUpBtnEl, orderNowBTnEl);
  divCentralBtnEl.append(
    homeBtnEl,
    aboutBtnEl,
    shopBtnEl,
    pagesBtnEl,
    contactBtnEl
  );
  divImgEl.append(logoEl);

  navEl.append(divImgEl, divCentralBtnEl, divRightBtnEl);

  return navEl;
};

const heroGen = (
  wrapperClassName,
  divClassName,
  btnClassName,
  title,
  text,
  imgUrl,
  btnText,
  imgAlt
) => {
  const heroWrapperEl = cE("div");
  const heroDivTextEl = cE("div");
  const titleHeroEl = cE("h1");
  const textHeroEl = cE("p");
  const btnHeroEl = cE("button");
  const divHeroImgEl = cE("div");
  const heroImgEl = cE("img");

  cN(heroWrapperEl, wrapperClassName);
  cN(heroDivTextEl, divClassName);
  cN(btnHeroEl, btnClassName);

  tC(titleHeroEl, title);
  tC(textHeroEl, text);
  tC(btnHeroEl, btnText);

  sA(heroImgEl, "src", imgUrl);
  sA(heroImgEl, "alt", imgAlt);

  heroDivTextEl.append(titleHeroEl, textHeroEl, btnHeroEl);
  divHeroImgEl.append(heroImgEl);
  heroWrapperEl.append(heroDivTextEl, divHeroImgEl);

  return heroWrapperEl;
};

const centralSectionGen = (title, text, divClassName) => {
  const centralSectionDivEl = cE("div");
  const sectionTitleEl = cE("h2");
  const sectionTextEl = cE("p");

  cN(centralSectionDivEl, divClassName);
  tC(sectionTitleEl, title);
  tC(sectionTextEl, text);

  centralSectionDivEl.append(sectionTitleEl, sectionTextEl);

  return centralSectionDivEl;
};

const cardGen = (imgUrl, alt, title, text, cardClassName) => {
  const cardDivEl = cE("div");
  const cardImgEl = cE("img");
  const cardTitleEl = cE("h3");
  const cardTextEl = cE("p");

  cN(cardDivEl, cardClassName);

  sA(cardImgEl, "src", imgUrl);
  sA(cardImgEl, "alt", alt);

  tC(cardTitleEl, title);
  tC(cardTextEl, text);

  cardDivEl.append(cardImgEl, cardTitleEl, cardTextEl);

  return cardDivEl;
};

const cardWrapperEl = cE("div");
cN(cardWrapperEl, "card-wrapper");

cardWrapperEl.append(
  cardGen(
    "./images/undraw_beach_day_cser.svg",
    "gift",
    "Gift Boxes",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aut delectus at sequi est veritatis quos dolorem.",
    "card"
  ),
  cardGen(
    "./images/undraw_family_vg76.svg",
    "kid",
    "Home with Kids",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aut delectus at sequi est veritatis quos dolorem.",
    "card"
  ),
  cardGen(
    "./images/undraw_blooming_re_2kc4.svg",
    "flower",
    "Plants & Flowers",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aut delectus at sequi est veritatis quos dolorem.",
    "card"
  )
);

const strapGen = () => {
  const strapDivEl = cE("div");
  const strapTextEl = cE("h3");

  cN(strapDivEl, "strap");
  tC(strapTextEl, "We're trusted by clients.");

  strapDivEl.append(strapTextEl);

  return strapDivEl;
};

const blogCardwrapperEl = cE("div");
cN(blogCardwrapperEl, "blog-card-wrapper");

const readMoreBtnGen = () => {
  const buttonEl = cE("button");
  cN(buttonEl, "read-more-button");
  tC(buttonEl, "Read More");
  return buttonEl;
};

const cardBlogUno = cardGen(
  "./images/gifts1.jpeg",
  "gifts1",
  "Everyone should join their gifting party for better experiences",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem impedit architecto earum est, magnam labore perferendis rem quod dolores obcaecati aliquid, voluptas a nulla enim! Odio similique repellat quod nulla temporibus inventore aperiam accusantium.",
  "blog-card"
);

const cardBlogDue = cardGen(
  "./images/gifts2.jpeg",
  "gifts2",
  "Everyone should join their gifting party for better experiences",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem impedit architecto earum est, magnam labore perferendis rem quod dolores obcaecati aliquid, voluptas a nulla enim! Odio similique repellat quod nulla temporibus inventore aperiam accusantium.",
  "blog-card"
);

const cardBlogTre = cardGen(
  "./images/gifts3.jpeg",
  "gifts2",
  "Everyone should join their gifting party for better experiences",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem impedit architecto earum est, magnam labore perferendis rem quod dolores obcaecati aliquid, voluptas a nulla enim! Odio similique repellat quod nulla temporibus inventore aperiam accusantium.",
  "blog-card"
);

cardBlogUno.append(readMoreBtnGen());
cardBlogDue.append(readMoreBtnGen());
cardBlogTre.append(readMoreBtnGen());

blogCardwrapperEl.append(cardBlogUno, cardBlogDue, cardBlogTre);

const contactSectionEl = cE("section");
cN(contactSectionEl, "contact-us");

const contactTextGen = () => {
  const contactTextDiv = cE("div");
  const contactTitle = cE("h4");
  const contactText = cE("p");
  const contactTextDue = cE("p");

  tC(contactTitle, "Contact Us");
  tC(
    contactText,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores cupiditate natus iusto! Nam, vel. Omnis, quia. Similique dicta esse quis?"
  );
  tC(
    contactTextDue,
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellendus dolor quibusdam deleniti eius expedita modi dignissimos sapiente?"
  );

  cN(contactTextDiv, "contact-text");

  contactTextDiv.append(contactTitle, contactText, contactTextDue);

  return contactTextDiv;
};

const formWrapperGen = () => {
  const formWrapperEl = cE("div");
  const firstLineDiv = cE("div");
  const firstInput = cE("input");
  const secondInput = cE("input");
  const secondLineDiv = cE("div");
  const thirdInput = cE("input");
  const fourthInput = cE("input");
  const textAreaButtonWrapper = cE("div");
  const textAreaEl = cE("textarea");
  const formBtnEl = cE("button");

  cN(formWrapperEl, "form-wrapper");
  cN(firstLineDiv, "first-line-form");
  cN(secondLineDiv, "second-line-form");
  cN(textAreaButtonWrapper, "textarea-button-wrapper");
  cN(formBtnEl, "form-button");

  sA(firstInput, "type", "text");
  sA(firstInput, "placeholder", "First Name");
  sA(secondInput, "type", "text");
  sA(secondInput, "placeholder", "Last Name");
  sA(thirdInput, "type", "text");
  sA(thirdInput, "placeholder", "email");
  sA(fourthInput, "type", "text");
  sA(fourthInput, "placeholder", "Subject");
  sA(textAreaEl, "placeholder", "Your Message...");
  sA(textAreaEl, "rows", "8");

  tC(formBtnEl, "Submit");

  textAreaButtonWrapper.append(textAreaEl, formBtnEl);
  secondLineDiv.append(thirdInput, fourthInput);
  firstLineDiv.append(firstInput, secondInput);

  formWrapperEl.append(firstLineDiv, secondLineDiv, textAreaButtonWrapper);

  return formWrapperEl;
};

contactSectionEl.append(contactTextGen(), formWrapperGen());

const footerWrapperGen = () => {
  const footerWrapperEl = cE("div");
  const footerUnoEl = cE("div");
  const titleFooterUnoEl = cE("h5");
  const textFooterUnoEl = cE("h6");
  const footerDueEl = cE("div");
  const titleFooterDueEl = cE("h5");
  const buttonFooterDueBlogEl = cE("button");
  const buttonFooterDueAboutEl = cE("button");
  const buttonFooterDueDownloadEl = cE("button");
  const buttonFooterDueHiringEl = cE("button");
  const footerTreEl = cE("div");
  const titleFooterTreEl = cE("h5");
  const buttonFooterTreSellEl = cE("button");
  const buttonFooterTreCorpEl = cE("button");
  const buttonFooterTrePressEl = cE("button");
  const footerQuattroEl = cE("div");
  const titleFooterQuattroEl = cE("h5");
  const buttonFooterQuattroContactEl = cE("button");
  const buttonFooterQuattroShipEl = cE("button");
  const buttonFooterQuattroFaqEl = cE("button");
  const footerCinqueEl = cE("div");
  const titleFooterCinqueEl = cE("h5");
  const textFooterCinqueEl = cE("h6");
  const inputFooterCinqueEl = cE("input");

  cN(footerWrapperEl, "footer-wrapper");
  cN(footerUnoEl, "footer-uno");
  cN(footerDueEl, "footer-due");
  cN(footerTreEl, "footer-tre");
  cN(footerQuattroEl, "footer-quattro");
  cN(footerCinqueEl, "footer-cinque");

  tC(titleFooterUnoEl, "Giftly");
  tC(
    textFooterUnoEl,
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dignissimos dolor eaque odio et ea aperiam quod reprehenderit eum id laboriosam eius architecto rem, officia corrupti consequuntur ut dolorem deserunt quae necessitatibus nesciunt. Minima eveniet repellat alias asperiores praesentium quae!"
  );
  tC(titleFooterDueEl, "Company");
  tC(buttonFooterDueBlogEl, "Blog");
  tC(buttonFooterDueAboutEl, "About Us");
  tC(buttonFooterDueDownloadEl, "Download");
  tC(buttonFooterDueHiringEl, "We're hiring");
  tC(titleFooterTreEl, "Partners");
  tC(buttonFooterTreSellEl, "Sell on Gifting");
  tC(buttonFooterTreCorpEl, "Corporate Gifting");
  tC(buttonFooterTrePressEl, "Press");
  tC(titleFooterQuattroEl, "Help");
  tC(buttonFooterQuattroContactEl, "Contact Us");
  tC(buttonFooterQuattroShipEl, "Shipping + Returns");
  tC(buttonFooterQuattroFaqEl, "FAQ");
  tC(titleFooterCinqueEl, "Newsletter");
  tC(textFooterCinqueEl, "Lorem ipsum dolor sit amet consectetur.");

  sA(inputFooterCinqueEl, "type", "text");
  sA(inputFooterCinqueEl, "placeholder", "Your email");

  footerCinqueEl.append(
    titleFooterCinqueEl,
    textFooterCinqueEl,
    inputFooterCinqueEl
  );
  footerQuattroEl.append(
    titleFooterQuattroEl,
    buttonFooterQuattroContactEl,
    buttonFooterQuattroShipEl,
    buttonFooterQuattroFaqEl
  );
  footerTreEl.append(
    titleFooterTreEl,
    buttonFooterTreSellEl,
    buttonFooterTreCorpEl,
    buttonFooterTrePressEl
  );
  footerDueEl.append(
    titleFooterDueEl,
    buttonFooterDueBlogEl,
    buttonFooterDueAboutEl,
    buttonFooterDueDownloadEl,
    buttonFooterDueHiringEl
  );
  footerUnoEl.append(titleFooterUnoEl, textFooterUnoEl);

  footerWrapperEl.append(
    footerUnoEl,
    footerDueEl,
    footerTreEl,
    footerQuattroEl,
    footerCinqueEl
  );

  return footerWrapperEl;
};

document.body.append(
  navbarGen("./images/logoipsum-332.svg"),
  heroGen(
    "hero-wrapper",
    "text-hero",
    "getstarted-button",
    "Thoughtful Gifting Made Easy",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quasi earum laudantium cumque!",
    "./images/undraw_gifts_0ceh.svg",
    "GET STARTED",
    "img"
  ),
  centralSectionGen(
    "Thoughtful Gifting Made Easy",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta qui. Deserunt, expedita.",
    "central-section"
  ),
  cardWrapperEl,
  heroGen(
    "corporate-section",
    "corporate-section-text",
    "corporate-section-button",
    "Corporate Gifting",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel fugit ipsam delectus. Saepe pariatur ipsa rem deleniti porro quis eius qui illo adipisci eveniet, dignissimos nisi, aperiam consectetur! Officia quae accusamus dolorum magni in! Nostrum molestias animi doloribus quod, deserunt est consequuntur ab? Natus sed magni qui nisi, labore quod illum animi quasi porro dolorum ab earum eveniet laudantium nemo voluptate?",
    "./images/undraw_undraw_shopping_bags_2ude_-1-_mnw3.svg",
    "READ MORE",
    "bags"
  ),
  strapGen(),
  heroGen(
    "personal-section",
    "personal-section-text",
    "personal-section-button",
    "Personal gifting",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perferendis blanditiis voluptatum molestias totam quidem placeat iste repellendus mollitia possimus adipisci, consequuntur vel minus illum. Est omnis in corrupti adipisci ad cum harum repudiandae facilis magni rerum voluptatum tempora voluptatibus dolores sed dolore eaque, quibusdam minima assumenda laborum? Molestias animi a magnam quas voluptas officia. Natus sed magni qui nisi, labore quod illum animi quasi porro dolorum ab earum eveniet laudantium nemo voluptate?",
    "./images/undraw_buddies_2ae5.svg",
    "LEARN MORE",
    "BUDDIES"
  ),
  centralSectionGen(
    "Our blog",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quis cumque tempore exercitationem.",
    "blog"
  ),
  blogCardwrapperEl,
  contactSectionEl,
  footerWrapperGen()
);
