import React from 'react';
 
const Pocetna = () => {
  return (
    <div className="container">
       <div className="content">
        <section className="aboutUs">
          <h2>O nama</h2>
          <p class="justify-align">
          Dobrodošli u našu prodavnicu tehnike, gde se svet tehnologije stapa sa vašim potrebama. Mi smo vaša destinacija za najnovije uređaje, inovativne gadgete i visokokvalitetnu elektroniku. Naš cilj je da vam omogućimo pristup tehnološkim rešenjima koja će vas inspirisati i unaprediti vaš svakodnevni život. Bez obzira da li tražite najnovije pametne telefone, moderna računarska rešenja ili savremenu kućnu zabavu, naša prodavnica nudi širok asortiman proizvoda renomiranih brendova. Svojom stručnošću i posvećenošću, želimo da vam omogućimo da iskusite budućnost tehnologije već danas. Dobrodošli u svet mogućnosti.
           </p>
        </section>

        <section class="compText">
          <h2> /* Pomoću nas do željenih uređaja!</h2>
          <h1>Zaplovi u svet tehnike!</h1>
          <h2>Visok kvalitet - pristupačna cena! */</h2>   
        </section>
      </div>
         <header className="jumbotron">

        <img src="https://wallpapers.com/images/hd/holographic-mobile-device-technology-0tu8y8misgam4ydb.jpg" alt="Naslovna" className="banner-image" />
        <div className="overlay-text">
          <h1>//STUDENJAK </h1>
          <h2 > // online prodavnica tehničke opreme! </h2>
        </div>
      </header>

      <div className="content-bottom">
        <section className="smallCom aboutUs justify-align">
          <h2 >Od nas za Vas</h2>
          <p>
          Nudimo vam širok spektar proizvoda iz različitih tehnoloških kategorija kako bismo zadovoljili vaše potrebe i strasti. Naša prodavnica je dom raznovrsnosti, gde možete pronaći rešenja za sve svoje tehničke želje. </p>
        </section>
        <section>
          <h1 className="left-align compText reg" >/* Registruj se i pronađi baš ono što ti je potrebno! */</h1>
           </section>
      </div>
    </div>
  );
};

export default Pocetna;
