import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineUploadFile } from "react-icons/md";
import "../../assets/scss/Dropzone/Dropzone.scss";

function MyDropzone({ multiple }) {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles((file) => [...file, ...acceptedFiles]);

  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple,
  });
  console.log(selectedFiles, "jhjh");
  return (
    <>
      <div {...getRootProps()} className="mt-3 dropzone">
        <MdOutlineUploadFile size={70} className="mx-auto d-block mt-5" />
        {!isDragActive ? (
          <p className="fs-6 fw-bolder text-center mt-2 text-dark">
            Select a Image file to upload
          </p>
        ) : (
          <p>Drop the files here ...</p>
        )}
      </div>
      {selectedFiles &&
        Array.isArray(selectedFiles) &&
        selectedFiles.length > 0 && (
          <div className="w-100 d-flex justify-content-center m">
            <div className="selected-file w-75 d-flex justify-content-between">
              {selectedFiles.length &&
                selectedFiles.map((file) => (
                  <div key={file.name}>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={URL.createObjectURL(file)}
                    ></img>
                    <p className="text-secondary text-muted h6">{file.name}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      <div>
        <input {...getInputProps()} />
        {!isDragActive && (
          <button className="btn btn-light btn-outline-secondary mx-auto d-block ">
            Choose File
          </button>
        )}
      </div>
    </>
  );
}

export default MyDropzone;
