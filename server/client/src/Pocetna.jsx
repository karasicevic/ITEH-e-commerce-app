import React from 'react';
 
const Pocetna = () => {
  return (
    <div className="container">
         <header className="jumbotron">

        <img src="https://wallpaperaccess.com/full/5332808.jpg" alt="Naslovna slika prodavnice" className="banner-image" />
        <div className="overlay-text">
          <h1>Dobrodošli u našu prodavnicu kompjuterske opreme!</h1>
          <p>
            Najbolji izbor kompjuterske opreme na jednom mestu. Brza isporuka, širok asortiman, povoljne cene.
          </p>
        </div>
      </header>

      <div className="content">
        <section>
          <h2>O nama</h2>
          <p>
            Naša prodavnica je osnovana 2023. godine s ciljem da ponudi najbolje kompjuterske proizvode po konkuretnim cenama. Naš asortiman uključuje najnovije modele računara, laptopova, komponenti, periferija i mnogo toga. Brzo šaljemo i pouzdano podržavamo sve naše proizvode.
          </p>
        </section>

        <section>
          <h2>Zašto odabrati nas?</h2>
          <p>
            Naš tim stručnjaka za kompjutersku opremu je uvek tu da vam pomogne u izboru proizvoda koji najbolje odgovaraju vašim potrebama. Posvećeni smo pružanju izvanredne korisničke podrške i brze isporuke, kako biste uživali u svojim novim proizvodima što je pre moguće.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Pocetna;
