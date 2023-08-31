import { useState } from 'react';
import axios from 'axios';
import './AddProductForm.css';
import ProductList from './ProductList';
const AddProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category_id', category);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/products', formData);
      console.log(response.data);
      alert("USPESNO DODATO")
    //TODO
      
    } catch (error) {
      console.error(error);
    }
  };
  function handleInput(e){  
    
   
    setCategory(e.target.value);  
    console.log(category);
   
}
  return (
    <div className="addProduct">
      <h1 className="headline_text">Dodaj Novi Proizvod</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Naziv proizvoda:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

      <label htmlFor="description">Opis proizvoda:</label>
      <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>

      <label htmlFor="price">Cena proizvoda:</label>
      <input type="number" id="price" value={price} onChange={(event) => setPrice(event.target.value)} />

      <label htmlFor="category_id">Kategorija proizvoda:</label>
      <select id="category_id"  onInput={(event) => handleInput(event)}>
        <option value={1}>Izaberi kategoriju</option>
        <option value={1}>Računari i oprema</option>
        <option value={2}>Gejming oprema</option>
        <option value={3}>Multimedija</option>
        <option value={4}>Telefoni</option>
        <option value={5}>Električni trotineti</option>
        <option value={6}>Mrežna oprema</option>
      </select>

      <label htmlFor="image">Slika proizvoda:</label>
      <input type="text" id="image" value={image} onChange={(event) => setImage(event.target.value)} />

      <button type="submit">Dodaj proizvod</button>
    </form>
    </div>
  );
};

export default AddProductForm;