
function Homepage() {

  const sendMessage = () => {
    let message = "hullloooo";
    console.log(message);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to Tom&apos;s Train App</h1>
        <img
          style={{
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "20px",
          }}
          src="train.jpg"
          alt="train"
        />

        <input type="text" placeholder="Message..." />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </>
  );
}

export default Homepage;
