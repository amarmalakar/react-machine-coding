import Button from "./button";

function App() {
  return (
    <main className="px-4 pt-16 text-center">
      <h1 className="text-4xl font-bold underline">Hello world!</h1>
      <Button
        label="PING"
        onClick={() => {
          alert("PONG");
        }}
      />
    </main>
  );
}

export default App;
