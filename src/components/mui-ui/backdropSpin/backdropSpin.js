import "./_backdropSpin.scss";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { backdropSpinState } from "./backdropSpin.reducer";

const IncBackdrop = () => {
  //   const [open, setOpen] = React.useState(true);
  const dataState = useSelector(backdropSpinState);
  const [dataSource, setDataSource] = React.useState();

  React.useEffect(() => {
    setDataSource(dataState);
  }, [dataState]);

  const handleClose = () => {
    // setOpen(false);
  };

  return (
    <>
      {dataSource?.open ? (
        <Backdrop
          open={dataSource.open}
          onClick={handleClose}
          className="white"
        >
          {dataSource.spin ? <CircularProgress color="inherit" /> : <></>}
        </Backdrop>
      ) : (
        <></>
      )}
    </>
  );
};

export default IncBackdrop;
