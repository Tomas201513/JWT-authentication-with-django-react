import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { ColorModeContext, tokens } from "./theme";

const Searchbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      backgroundColor={colors.primary[400]}
      sx={{
        borderRadius: "3px",
        m: "10",
      }}
    >
      <IconButton type="button" sx={{ p: 0.5 }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 0, flex: 1, fontSize: "" }}
        placeholder="Search..."
      />
    </Box>
  );
};

export default Searchbar;
