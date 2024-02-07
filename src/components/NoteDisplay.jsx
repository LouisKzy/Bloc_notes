/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Markdown from "marked-react";

export default function NoteDisplay({ index, note, onClick }) {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{ border: 1, p: 2, m: 2, borderRadius: 5, cursor: "pointer" }}
    >
      <h2>{note.title}</h2>
      <Markdown sx={{ color: "white" }}>{note.markdown}</Markdown>
    </Box>
  );
}
