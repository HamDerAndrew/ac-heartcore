import { useEffect, useState } from 'react';
import './App.css';
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";

function App() {
  const [heroSubheading, setHeroSubeading] = useState("");
  const [heroHeader, setHeroHeader] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [footerLinks, setFooterLinks] = useState([])
  const [assassinList, setAssassinList] = useState([]);

  useEffect(() => {
    getData();
    //Pass empty array to ensure this effect only runs once according to docs: https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  }, [])


  const url = "https://cdn.umbraco.io/content";
  const umbracoHeaders = {
    "Accept-Language": "en-US",
    "umb-project-alias": "dev-ac-heartcore"
  }

  const getData = async () => {
    await fetch(url, {
      headers: umbracoHeaders
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      const heroHead = data._embedded.content[0].welcomeHero;
      const heroSubHead = data._embedded.content[0].welcomeSubheadingHero;
      const image = data?._embedded?.content[0]?.landingHeroImage?._url;
      const footerLinks = data?._embedded?.content[0]?.landingFooterLinks;
      const assassins = data?._embedded?.content[0]?.listOfAssassins;

      setHeroHeader(heroHead);
      setHeroSubeading(heroSubHead);
      setHeroImage(image);
      setAssassinList(assassins);
      setFooterLinks(footerLinks);

      console.log(data._embedded.content[0]);
      console.log(assassinList)
    })
    .catch(error => {
      console.log(error)
    })
  }



  return (
    <div className="App bg-yellow-200 from-yellow-600 to-yellow-300 bg-gradient-to-b bg-gradient-to-top w-full">
      {/* Navigation */}
      <div className=" max-w-full mx-auto bg-red-500">
        <nav className="max-w-screen-xl mx-auto flex justify-end">
          <a href="#" className="mr-5 px-2 py-2">Home</a>
          <a href="#" className="py-2">News</a>
        </nav>
      </div>
      <div id="page" className="max-w-screen-xl mx-auto">
        <header className="App-header h-screen">
          <h1>{heroHeader}</h1>
          {!heroImage && <p>Whoops. No hero image is selected :)</p>}
          <img src={`${heroImage}`} />
          <h2>{heroSubheading}</h2>
        </header>

        <section className="container mx-auto py-11">
          <div className="flex max-w-full justify-between">
            {
              assassinList.map((assassin, index) => {
                return <Card 
                  key={index}
                  assassinImage={assassin?.assassinImage?._url}
                  cardHeader={assassin?.assassinName}
                  cardDescription={assassin?.assassinDescription}
                  />
              })
            }
          </div>
        </section>

        {/* What service do we offer */}
        <section className="container mx-auto py-11">
          <h2 className="text-4xl">About the Assassins Bureau service</h2>
          <div className="flex max-w-full justify-between">

            {/* Service row 1 */}
            <div className="service-container w-1/3 py-7">
              <h3 className="text-3xl">
                <span className="testing-icon"><i className="fas fa-user-secret"></i></span> Discretion 
              </h3>
              <p className="mr-4">We know how important it is to stay annonymus when using our services. As such, we require minimum involvement from you</p>
            </div>

            <div className="service-container w-1/3 mx-5 py-7">
              <h3 className="text-3xl">
                <span className="testing-icon"><i className="fas fa-sitemap"></i></span> Need-To-Know only 
              </h3>
              <p className="mr-4">To adhere to your annonymity, our agents only know what is absolutely neccessary and information is split up between individual agents</p>
            </div>

            <div className="service-container w-1/3 py-7">
              <h3 className="text-3xl">
                <span className="testing-icon"><i className="fas fa-shield-alt"></i></span> Combat Efficient 
              </h3>
              <p className="mr-4">In our line of work you need to be prepared for confrontations, which is why all of our agents are top trained in martial arts</p>
            </div>
          </div>

        {/* Service row 2 */}
          <div className="flex max-w-full justify-between">
          <div className="service-container w-1/3 py-7">
            <h3 className="text-3xl">
              <span className="testing-icon"><i className="fas fa-terminal"></i></span> Expert Hackers 
            </h3>
            <p className="mr-4">We understand that some operations require accessing or hacking networks, which is why every one of our agents are trained in hacking</p>
          </div>

          <div className="service-container w-1/3 py-7 mx-5">
            <h3 className="text-3xl">
              <span className="testing-icon"><i className="fas fa-archive"></i></span> No File Archive 
            </h3>
            <p className="mr-4">Nothing is archived - everything is erased. We care about your discretion and therefore we do not store any information on your contract with us. It's deleted after completion</p>
          </div>

          <div className="service-container w-1/3 py-7">
            <h3 className="text-3xl">
              <span className="testing-icon"><i className="fas fa-window-close"></i></span> Cancel Anytime
            </h3>
            <p className="mr-4">We understand that circumstances can change and therefore you can cancel the contract anytime you like</p>
          </div>

          </div>
        </section>

        {/* Hire an assassin now */}
        <section className="container mx-auto py-11">
          <h2 className="text-4xl">Hire an assassin now!</h2>
        </section>
      </div>

      <Footer 
        linkOne={footerLinks[0]?.firstLink}
        linkTwo={footerLinks[0]?.secondLink}
        linkThree={footerLinks[0]?.thirdLink}
      />
    </div>
  );
}

export default App;
