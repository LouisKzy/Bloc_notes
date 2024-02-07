import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import MarkdownInput from "./components/MarkdownInput";
import NoteDisplay from "./components/NoteDisplay";

function App() {
  const [notes, setNotes] = useState([]);
  const [editedNoteIndex, setEditedNoteIndex] = useState(null);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const handleSaveNote = (newNote) => {
    if (editedNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editedNoteIndex] = newNote;
      setNotes(updatedNotes);
      setEditedNoteIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  };

  const handleEditNote = (index) => {
    setEditedNoteIndex(index);
  };

  const handleNewNote = () => {
    setEditedNoteIndex(null); // Reset edited note index to create a new note
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={handleNewNote}
              sx={{ mx: 7, marginTop: 3 }}
            >
              Nouvelle Note
            </Button>
            {notes.map((note, index) => (
              <NoteDisplay
                key={index}
                index={index}
                note={note}
                onClick={() => handleEditNote(index)}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ borderLeft: 1 }}>
          <MarkdownInput
            handleSaveNote={handleSaveNote}
            editedNote={
              editedNoteIndex !== null ? notes[editedNoteIndex] : null
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
