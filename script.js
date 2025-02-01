document.getElementById("submitButton").addEventListener("click", async () => {
  const requestField = document.getElementById("requestField");
  const responseDiv = document.getElementById("response");

  // Clear previous response
  responseDiv.style.display = "none";
  responseDiv.textContent = "";

  const userRequest = requestField.value.trim();
  if (!userRequest) {
    alert("Please enter a request!");
    return;
  }

  // Send request to local backend
  try {
    const response = await fetch("http://192.168.1.166:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request: userRequest })
    });

    const data = await response.json();
    responseDiv.textContent = data.response;
    responseDiv.style.display = "block";
  } catch (error) {
    responseDiv.textContent = "Error connecting to the server.";
    responseDiv.style.display = "block";
  }
});
