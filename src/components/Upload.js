import React, { useState } from "react";

function Upload({ addToHistory }) {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setPreviewUrl(URL.createObjectURL(file));
    setCategory("");
  };

  const handleSubmit = async () => {
    if (!image) return alert("Please upload an image.");
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/classify", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setCategory(data.category);
      addToHistory({
        imageUrl: previewUrl,
        category: data.category,
        status: "Open",
        time: new Date().toLocaleString()
      });
    } catch (err) {
      alert("Error: Could not classify image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {previewUrl && <img src={previewUrl} alt="Preview" className="preview" />}
      <button onClick={handleSubmit}>Classify</button>

      {loading && <div className="loader">⏳ Processing...</div>}
      {category && (
        <div className="result-card">
          <h3>Predicted Category: <span className="highlight">{category}</span></h3>
        </div>
      )}
    </div>
  );
}

export default Upload;
