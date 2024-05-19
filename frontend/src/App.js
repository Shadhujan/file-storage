import logo from './logo.svg';
import './App.css';
import React from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';
import FileDownload from './components/FileDownload';

function App() {
  return (
    <div>
      <FileUpload />
      <FileList />
      <FileDownload />
    </div>
  );
}

export default App;

