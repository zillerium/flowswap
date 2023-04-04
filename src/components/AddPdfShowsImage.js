import React, { useRef, useContext } from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ContractContext } from './ContractContext';

function AddPdf() {
  const { assetImageUrl } = useContext(ContractContext);
  const screenshotRef = useRef(null);

  const generatePDF = () => {
    html2canvas(screenshotRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('my-image.pdf');
    });
  };

  return (
    <div ref={screenshotRef}>
      <img src={assetImageUrl} alt="My Image" />
      <Button variant="primary" onClick={generatePDF}>
        Save as PDF
      </Button>
    </div>
  );
}

export default AddPdf;
