function App() {
  function handleClick() {
    console.log("Button is clicked");
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="flex h-96 p-9 w-96 bg-customRed justify-center rounded-2xl flex-col items-center">
          <h1 className="text-3xl text-softCream text-center mb-9">
            Login Page
          </h1>
          <input
            type="text"
            className="h-8 w-26 p-3 mt-7 rounded-lg"
            placeholder="Username"
          />
          <input
            type="password"
            className="h-8 w-26 p-3 mt-7 rounded-lg"
            placeholder="password"
          />
        <button
            className="flex text-2xl bg-softCream flex w-32 m-7 rounded-lg justify-center font-semibold"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
