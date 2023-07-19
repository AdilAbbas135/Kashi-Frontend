import React, { useState } from "react";
import { TextField } from "@mui/material";
const AdminPanel = () => {
  const [plants, setPlants] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = {
      id: plants.length + 1,
      name,
      description,
      price,
      image,
    };

    setPlants([...plants, newPlant]);
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const deletePlant = (id) => {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);
  };

  const editPlant = (id) => {
    const plantToEdit = plants.find((plant) => plant.id === id);
    if (plantToEdit) {
      setName(plantToEdit.name);
      setDescription(plantToEdit.description);
      setPrice(plantToEdit.price);
      setImage(plantToEdit.image);
      deletePlant(id);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Plant Store Admin Panel</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <h2 className="text-lg font-bold mb-2">Add New Plant</h2>
        <div className="flex flex-col space-y-4">
          <TextField
            label="Name Of Plant"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2"
            required
          />

          <TextField
            label="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2"
            required
          />

          <TextField
            label="Set Price"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2"
            required
          />

          <TextField
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && <img src={image} alt="Plant" className="max-h-40" />}
        </div>
        <button
          type="submit"
          className="mt-5 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Add Plant
        </button>
      </form>

      <div>
        <h2 className="text-lg font-bold mb-2">Plant List</h2>
        {plants.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {plants.map((plant) => (
              <li key={plant.id} className="border p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{plant.name}</h3>
                <p className="mb-2">{plant.description}</p>
                <p className="mb-2">Price: ${plant.price}</p>
                <img src={plant.image} alt="Plant" className="max-h-40" />
                <div>
                  <button
                    className="mt-5 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded mr-2"
                    onClick={() => deletePlant(plant.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                    onClick={() => editPlant(plant.id)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No plants found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
