// material-ui
import { styled } from "@mui/material/styles";

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  minHeight: "100vh",
  width: "100%",
  backgroundImage: "url(https://source.unsplash.com/random)",
  backgroundRepeat: "no-repeat",
  backgroundColor: (t) =>
    theme.palette.mode === "light"
      ? theme.palette.grey[50]
      : theme.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

export default AuthWrapper;
