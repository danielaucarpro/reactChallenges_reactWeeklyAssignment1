import Challenge1 from "./components/Challenge1";
import Challenge2 from "./components/Challenge2";

function App() {
  let studentList = [
    'Daniel',
    'Jason',
    'Bruno',
    'Alex',
    'Austin',
    'Mimi',
    'Mat',
    'Mikey',
    'Chris',
    'Michael'
  ];

  return (
    <>
      <Challenge1></Challenge1>
      <Challenge2 studentName={studentList}></Challenge2>
    </>
  );
}

export default App;
