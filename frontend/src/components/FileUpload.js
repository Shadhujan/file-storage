// FileUpload.js
import React from 'react';
import axios from 'axios';

function FileUpload() {
  const handleUpload = (event) => {
    event.preventDefault();
    const file = event.target.elements.file.files[0];
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3000/upload', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;
