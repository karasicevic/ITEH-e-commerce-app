import React, { useEffect, useState } from 'react';
  

  const Kontakt = () => {
      const googleMapsApiKey = 'AIzaSyDfTiV9-SkJ9du_PG7yz6OJ6KKBL6Wpu5k';  
      const address = 'Studentski Grad 147, Novi Beograd';
      const [coordinates, setCoordinates] = useState({ lat: 44.82309, lng: 20.40116 });
    
      useEffect(() => {
        const fetchCoordinates = async () => {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
              address
            )}&key=${googleMapsApiKey}`
          );
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            setCoordinates(data.results[0].geometry.location);
          }
        };
        fetchCoordinates();
      }, [address, googleMapsApiKey]);
    
      useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
        script.defer = true;
        script.async = true;
    
        window.initMap = () => {
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 15,
          });
    
          const marker = new window.google.maps.Marker({
            position: coordinates,
            map: map,
            title: 'Naša lokacija',
          });
        };
    
        document.head.appendChild(script);
    
        return () => {
          document.head.removeChild(script);
          delete window.initMap;
        };
      }, [coordinates, googleMapsApiKey]);

    return (
      <div className="contact-page-container">
       <div className="contact-info">
        <h2>Kontakt informacije</h2>
        <p>Adresa: Tosin Bunar 147, Novi Beograd, Srbija</p>
        <p>Telefon: +381 12 345 6789</p>
        <p>Email: info@ecommerce.com</p>
       </div>
       < div className="map-container" id="map"></div>
      </div>
    );
  };

  export default Kontakt;