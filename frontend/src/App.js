import './App.css';

function Header() {
  return (
    <header className="App-header">
      <img src="path_to_logo/logo.png" className="App-logo" alt="Company Logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="#iframe1">League Table</a></li>
          <li><a href="#iframe2">Groups</a></li>
          <li><a href="#iframe3">Group A</a></li>
          <li><a href="#iframe4">Group B</a></li>
          <li><a href="#iframe5">Group C</a></li>
          <li><a href="#iframe6">Knockout</a></li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />

      <body>
        <iframe
          id="iframe1"
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROZfyFerDBhhOYV8GRezFJ0Q4a1bInSSOvpZYZLGQiqTxXDZpCUJQxCX7bRkNOpSddTfX2HVPlyyJL/pubhtml?gid=465633707&amp;single=true&amp;widget=true&amp;headers=false"
          title="Table"
          width="100%"
          height="400"
        ></iframe>
        <iframe
          id="iframe2"
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROZfyFerDBhhOYV8GRezFJ0Q4a1bInSSOvpZYZLGQiqTxXDZpCUJQxCX7bRkNOpSddTfX2HVPlyyJL/pubhtml?gid=447411446&amp;single=true&amp;widget=true&amp;headers=false"
          title="Score board 1"
          width="100%"
          height="200"
        ></iframe>
        <iframe
          id="iframe3"
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROZfyFerDBhhOYV8GRezFJ0Q4a1bInSSOvpZYZLGQiqTxXDZpCUJQxCX7bRkNOpSddTfX2HVPlyyJL/pubhtml?gid=524323757&amp;single=true&amp;widget=true&amp;headers=false"
          title="Score board 2"
          width="100%"
          height="550"
        ></iframe>
        <iframe
          id="iframe4"
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROZfyFerDBhhOYV8GRezFJ0Q4a1bInSSOvpZYZLGQiqTxXDZpCUJQxCX7bRkNOpSddTfX2HVPlyyJL/pubhtml?gid=350534510&amp;single=true&amp;widget=true&amp;headers=false"
          title="Score board 3"
          width="100%"
          height="350"
        ></iframe>
        <iframe
          id="iframe5"
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROZfyFerDBhhOYV8GRezFJ0Q4a1bInSSOvpZYZLGQiqTxXDZpCUJQxCX7bRkNOpSddTfX2HVPlyyJL/pubhtml?gid=1735482426&amp;single=true&amp;widget=true&amp;headers=false"
          title="Score board 4"
          width="100%"
          height="350"
        ></iframe>
        <iframe
          id="iframe6"
          className="iframe"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROZfyFerDBhhOYV8GRezFJ0Q4a1bInSSOvpZYZLGQiqTxXDZpCUJQxCX7bRkNOpSddTfX2HVPlyyJL/pubhtml?gid=446425707&amp;single=true&amp;widget=true&amp;headers=false"
          title="Score board 5"
          width="100%"
          height="450"
        ></iframe>
      </body>
    </div>
  );
}

export default App;
