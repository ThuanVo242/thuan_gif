// Import module nodeJs to read and write files
const fs = require('fs');

// Write function to add new note
const addNote = (title, body) => {
    const notes = loadNotes();

    // Check if note already exists
    const duplicateNote = notes.filter(note => note.title === title);
    
    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('Note added');
    } else {
        console.log('Note title already exists');
    }
};

// Write function to remove note by title
const removeNote = (title) => {
    const notes = loadNotes();

    // Function find title
    const findTitle = (note) => note.title === title;

    // Find index note have node.title === title
    const indexNote = notes.findIndex(findTitle);
    
    if (indexNote > -1) {
        // Delete note
        notes.splice(indexNote, 1);
        
        saveNotes(notes);
        console.log('Note removed');
    } else {
        console.log('Note not found');
    }
};

// Write function to list notes by body similar
const listNotes = (body) => {
    const notes = loadNotes();
    const dataBuffers = notes.filter(note => note.body === body);
    dataBuffers.forEach(data => console.log(`Title: ${data.title}, Body: ${data.body}`))
};

// Write function to read notes
const readNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(`Title: ${note.title}, Body: ${note.body}`))
};

// Write function save notes to file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

// Write function to load notes from file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }
   
};

// Export module
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};