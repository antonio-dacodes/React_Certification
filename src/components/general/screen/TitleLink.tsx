import { Box, Typography } from "@mui/material";

interface TitleProps {
  title: string | undefined;
  description: string | undefined;
}

export const TitleLink: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <Box
      sx={{
        height: "150px",
        padding: "0 120px",
      }}
    >
      <Typography
        sx={{
          color: "#FFFF",
          fontFamily: "Poppins",
          fontSize: "45px",
          fontStyle: "normal",
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#FFFF",
          fontFamily: "Poppins",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: 400,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
