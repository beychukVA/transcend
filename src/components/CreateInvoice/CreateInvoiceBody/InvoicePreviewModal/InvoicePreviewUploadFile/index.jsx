import styles from "./style.module.scss";
import Button from "../../../../UI/Button";
import { useEffect, useRef, useState } from "react";
import Close from "../../../../Icons/Close";
import Upload from "../../../../Icons/Upload";
import FileA4 from "../../../../Icons/FileA4";
import Bucket from "../../../../Icons/Bucket";
import { generatePdf } from "../../../../../utils/generatePdf";

const InvoicePreviewUploadFile = ({ closeModal, handleFileList }) => {
  const [fileList, setFileList] = useState([]);
  const form = useRef();

  console.log("FILE LIST: ", fileList);

  useEffect(() => {
    handleFileList(fileList);
  }, [fileList, handleFileList]);

  const updateFileList = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      setFileList((prev) => {
        return [...prev, { file: file, base64Data: reader.result }];
      });
    };
  };

  const onSelectFile = (e) => {
    const newFile = e.target.files[0];

    if (newFile <= 50000) {
      alert("Your file bigger than 5Mb");
    }

    if (newFile) {
      updateFileList(newFile);
    }
  };

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    const newFile = e.dataTransfer.files[0];

    if (newFile <= 50000) {
      alert("Your file bigger than 5Mb");
    }

    if (newFile) {
      updateFileList(newFile);
    }
  };

  const fileRemove = (removeFile) => {
    setFileList((prev) => {
      return [...prev].filter(
        (file) => file.file.name !== removeFile.file.name
      );
    });
    handleFileList(fileList);
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <form ref={form} onSubmit={submit} className={styles.invoiceFormContainer}>
      <div className={styles.invoiceUploadWrapper}>
        <div className={styles.invoiceTitle}>
          <span className={styles.title}>Invoice Preview</span>

          <div onClick={closeModal} className={styles.btnClose}>
            <Close />
          </div>
        </div>

        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <label className={styles.uploadArea} htmlFor="uploadFile">
            <div className={styles.uploadIconContainer}>
              <Upload />
            </div>
            <span className={styles.uploadInfoText}>
              <u>Select additional documents to add to the PDF</u>
            </span>
            <span className={styles.invoiceInfoFile}>Max size - 5Mb</span>
          </label>
          <input
            id={"uploadFile"}
            className={styles.uploadFileInput}
            type="file"
            accept=".pdf"
            onChange={onSelectFile}
            onClick={(event) => (event.target.value = null)}
          />
        </div>

        {fileList &&
          fileList.map((file) => (
            <div className={styles.invoiceChooseFileContainer}>
              <div className={styles.invoiceNameFile}>
                <div className={styles.invoiceFileIconContainer}>
                  <FileA4 />
                </div>
                <span>{file.file.name}</span>
              </div>
              <div
                onClick={() => fileRemove(file)}
                className={styles.invoiceBucketIconContainer}
              >
                <Bucket color={"#AF1F26"} />
              </div>
            </div>
          ))}
      </div>

      <div className={styles.btnGroup}>
        <div>
          <Button
            text={"Edit Invoice"}
            onClick={closeModal}
            className={styles.btnEdit}
          />
        </div>

        <div>
          <Button
            text={"Generate Invoice"}
            onClick={() => generatePdf("htmlToPdf", fileList)}
            className={styles.btnGenerate}
          />
        </div>
      </div>
    </form>
  );
};

export default InvoicePreviewUploadFile;
