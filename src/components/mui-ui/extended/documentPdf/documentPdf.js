/*
 * Copy worker to public directory
 * D:\proj\cxStudio.Frondend\node_modules\pdfjs-dist\build\pdf.worker.js
 * to public/pdf.worker.js
 */

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./_documentPdf.scss";
import * as React from "react";
//#region utils support
import { useTranslation } from "react-i18next";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//#region components
import AnimateButton from "@components/mui-ui/extended/animateButton";
//#endregion

//#endregion
const DocumentPdf = (props) => {
  const { t } = useTranslation();
  const { filePdf } = props;

  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const renderTextPageOfTotal = t("document.page_of")
    .replace("{{page}}", pageNumber || (numPages ? 1 : "--"))
    .replace("{{total}}", numPages || "--");

  return (
    <>
      <Grid item className="react-pdf_NavigateButton">
        <Stack spacing={2} direction="column">
          <Typography>{renderTextPageOfTotal}</Typography>
          <Stack spacing={2} direction="row" justifyContent={`center`}>
            <AnimateButton>
              <Button
                disableElevation
                disabled={pageNumber <= 1}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={previousPage}
              >
                {t("common.previous")}
              </Button>
            </AnimateButton>
            <AnimateButton>
              <Button
                disableElevation
                disabled={pageNumber >= numPages}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={nextPage}
                color="primary"
              >
                {t("common.next")}
              </Button>
            </AnimateButton>
          </Stack>
        </Stack>
      </Grid>
      <Grid item className="react-pdf_Container">
        <Document
          loading={<CircularProgress className="pdf-loading" />}
          noData={t("document.no_pdf_file_specified")}
          error={t("document.fail_to_load_page")}
          file="http://localhost:2009/uploads/Nguyen_Le_Minh_Khoi_cv.pdf"
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page scale={1} pageNumber={pageNumber} />
        </Document>
      </Grid>
    </>
  );
};

export default DocumentPdf;
