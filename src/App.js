import './App.css';
import Note from './components/notes'
function App() {
  const noteData = [
    {title: "Title #1", content: "content #1"},
    {title: "Title #2", content: "content #2"},
    {title: "Title #3", content: "content #3"},
    {title: "Title #4", content: "content #4"},
  ]
  const notes = noteData.map((element, index) => <Note key={index} title={element.title} content={element.content}/>)
  return (
    <ul>
      {notes}
</ul>
  );
}

export default App;
