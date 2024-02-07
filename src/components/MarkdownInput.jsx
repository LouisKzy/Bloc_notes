/* eslint-disable react/prop-types */
import { Box, Button, TextField } from "@mui/material";
import { purple, red } from "@mui/material/colors";
import { styled } from "@mui/system";
import Markdown from "marked-react";
import { useEffect, useState } from "react";
import "./Markdowninput.css";
const lightRed = red[700];
const myRed = red[900];

const wtfHover = purple[700];
const wtfHoverBis = purple[900];

export default function MarkdownInput({ handleSaveNote, editedNote }) {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editedNote) {
      setTitle(editedNote.title);
      setMarkdown(editedNote.markdown);
    } else {
      setTitle("");
      setMarkdown("");
    }
  }, [editedNote]);

  const handleSave = () => {
    handleSaveNote({ title, markdown });
    setMarkdown("");
    setTitle("");
  };

  const handleUpdate = () => {
    handleSaveNote({ title, markdown });
    setMarkdown("");
    setTitle("");
  };

  return (
    <Box sx={{ p: 5, m: 2 }}>
      <Box sx={{ borderBottom: 1 }}>
        <h2>{title}</h2>
        <Markdown>{markdown}</Markdown>
      </Box>
      <TextField
        label="Votre titre"
        id="standard"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{
          m: 3,
          backgroundColor: "lightgrey",
        }}
      />
      <br />
      <TextField
        label="Votre note :')"
        id="standard-multiline"
        onChange={(e) => setMarkdown(e.target.value)}
        sx={{
          m: 3,
          backgroundColor: "lightgrey",
        }}
        multiline
        maxRows={10}
        value={markdown}
      />
      <br />
      {editedNote ? (
        <BootstrapButton
          variant="contained"
          onClick={handleUpdate}
          sx={{ m: 3, input: { color: "white" } }}
          disableRipple
        >
          Enregistrer les modifications
        </BootstrapButton>
      ) : (
        <BootstrapButton
          variant="contained"
          onClick={handleSave}
          sx={{ m: 3, input: { color: "white" } }}
          disableRipple
        >
          Sauvegarder
        </BootstrapButton>
      )}
    </Box>
  );
}

const BootstrapButton = styled(Button)({
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: myRed,
  borderColor: myRed,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: wtfHover,
    borderColor: wtfHoverBis,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: lightRed,
    borderColor: lightRed,
  },
  "&:focus": {
    boxShadow: `0 0 0 0.2rem ${myRed}`,
  },
});
