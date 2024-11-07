
async function fetchData() {
  try {
    const response = await fetch('your-api-endpoint');

    if (!response.ok) {
      const message = `An error has occurred: ${response.status} ${response.statusText}`;
      throw new Error(message); // Throw an error to be caught
    }

    const data = await response.json(); // or response.text(), etc.
    // ... process data ...
    return data;

  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error appropriately (e.g., display an error message to the user)
    return null; // or throw the error again if you want to propagate it
  }
}
