import React, { useState, useCallback } from "react";
import "./header.css";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Modal from "react-responsive-modal";
import { useDropzone } from "react-dropzone";
import axios from "axios";

export const Header = ({ user }) => {
  const [openImageModal, setOpenImageModal] = useState(false);
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    let data = new FormData();
    data.append("data", acceptedFiles[0]);
    fetch("https://api.graph.cool/file/v1/ck58mgjbq1yao0166giunsxhu", {
      method: "POST",
      body: data
    })
      .then(response => {
        return response.json();
      })
      .then(file => {

        

      });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-md navbar-light">
        <div className="navbar-header" data-logobg="skin6">
          <div>
            <MdDashboard color="#a64bf4" size={40} />
            <span>Dashboard</span>
          </div>
          <div className="user-container">
            <div onClick={() => setOpenImageModal(!openImageModal)}>
              <img
                alt={user.name}
                src="https://www.adminmart.com/src/assets/images/users/profile-pic.jpg"
              />
            </div>
            <p>Olá, {user.name}</p>
            <IoIosArrowDown
              color="#a64bf4"
              size={20}
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </nav>
      <Modal open={openImageModal} onClose={() => setOpenImageModal(false)}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </Modal>
    </header>
  );
};
