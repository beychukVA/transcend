import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

//htmlToPdf
export const generatePdf = async (htmlId, fileList) => {
  const opt = {
    margin: 0,
    filename: `invoice#${Date.now()}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, dpi: 96, letterRendering: true, useCORS: true },
    pagebreak: { mode: ["legacy", "avoid-all", "css"] },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  const pages = [];
  const element = document.getElementById(htmlId);
  pages.push(element);
  fileList.map((file) => pages.push(document.getElementById(file.file.name)));

  pages.map((page) => {
    html2pdf().set(opt).from(page).toPdf().save();
  });

  //---------------------------------------------------------
  // const element = document.getElementById(htmlId);
  // const opt = {
  //   margin: 0,
  //   filename: `invoice#${Date.now()}.pdf`,
  //   image: { type: "jpeg", quality: 0.98 },
  //   html2canvas: { scale: 2, dpi: 96, letterRendering: true, useCORS: true },
  //   pagebreak: { mode: ["legacy", "avoid-all", "css"] },
  //   jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  // };
  // html2pdf().set(opt).from(element).toPdf().save();
  //---------------------------------------------------------
  //   html2pdf()
  //     .set(opt)
  //     .from(element)
  //     .toPdf()
  //     .get("pdf")
  //     .then(function (pdf) {
  //       if (attachment) {
  //         element.innerHTML += attachment;
  //         pdf.addPage();
  //       }
  //     })
  //     .toContainer()
  //     .toCanvas()
  //     .toPdf()
  //     .save();
};
