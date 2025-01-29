import { useEffect, useState } from "react";
import "./AddArtwork.css";
import axios from "axios";
import { Upload } from "lucide-react";
import Button from "../../components/Button/Button";

function AddArtwork() {
  const [artwork, setArtwork] = useState({
    title: "",
    year: "",
    medium: "",
    dimension: "",
    description: "",
  });

  // Gestion de l'upload de fichier
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      // Création de l'aperçu de l'image
      const imageUrl = URL.createObjectURL(selectedFile);
      setPreview(imageUrl);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setArtwork({ ...artwork, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();

    if (file) {
      formData.append("upload", file);
    }
    formData.append("artwork", JSON.stringify(artwork));

    console.info("Submitting:", artwork);
    console.info("File:", file);

    // je vais utiliser axios pour envoyer les données au serveur

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/oeuvre`,
      formData,
    );
    console.info("Response:", response.data);
  };

  return (
    <>
      <h2 className="form-title">Add Artwork</h2>
      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="upload" className="form-label">
            Artwork
          </label>
          <div className="upload-box">
            <input
              name="upload"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileUpload}
              id="upload"
              hidden
            />
            <label htmlFor="upload" className="upload-label">
              <Upload />
              <br />
              Click to upload <br />
              <span className="upload-hint">PNG, JPEG</span>
            </label>
          </div>

          {/* Aperçu de l'image */}
          {preview && (
            <div className="image-preview-container">
              <img
                src={preview}
                alt="Artwork Preview"
                className="image-preview"
              />
            </div>
          )}

          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title of artwork"
            onChange={handleChange}
            className="form-input"
          />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="number"
                name="year"
                id="year"
                max={new Date().getFullYear()}
                onChange={handleChange}
                className="form-input"
                placeholder={`${new Date().getFullYear()}`}
              />
            </div>
            <div className="form-group">
              <label htmlFor="medium" className="form-label">
                Medium
              </label>
              <input
                type="text"
                name="medium"
                id="medium"
                onChange={handleChange}
                className="form-input"
                placeholder="Oil on canvas"
              />
            </div>
          </div>

          <label htmlFor="dimension" className="form-label">
            Dimension
          </label>
          <input
            type="text"
            name="dimension"
            id="dimension"
            onChange={handleChange}
            className="form-input"
            placeholder="30x40 cm"
          />

          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            placeholder="Description..."
            name="description"
            id="description"
            onChange={handleChange}
            className="form-textarea"
          />

          <div className="form-actions">
            <Button type="button" name="Cancel" ownStyle="white" />
            <Button type="submit" name="Submit" />
          </div>
        </form>
      </section>
    </>
  );
}

export default AddArtwork;
