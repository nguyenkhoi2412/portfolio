import "./_home.scss";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { SHOW_SPIN } from "@components/mui-ui/backdropSpin/backdropSpin.reducer";
import { SHOW_PROGRESSBAR } from "@components/mui-ui/progressBar/progressBar.reducer";

const Home = () => {
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(SHOW_SPIN({
    }));
    dispatch(SHOW_PROGRESSBAR());
  };

  return (
    <div className="App">
      Home us!!!
      <Button className="btn" variant="contained" onClick={handleOnclick}>
        Contained
      </Button>
    </div>
  );
};

export default Home;
