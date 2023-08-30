import React from 'react';
import Maps from './Maps';

const Kontakt = () => {
  return (
    
    <section>
    <div className="contact-page-container">
    
    <div><h1 className="compText">//Kontakt informacije</h1>
   
    </div>
    </div>
    <div className="contact-info">
   
    <p className="margin-left">Adresa: Tosin Bunar 147, Novi Beograd, Srbija</p>
    <p className="margin-left">Telefon: +381 12 345 6789</p>
    <p className="margin-left">Email: studenjak@ecommerce.com</p>
    </div>
    <div>
    <h2 className="compText smallCom "> Poseti nas!</h2>
    <Maps />
    </div>
  </section>
    
    
  );
};

export default Kontakt;
