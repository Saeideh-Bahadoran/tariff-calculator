const input = document.getElementById("inputConsumption");
const calcBtn = document.getElementById("CalculateBtn");
const theDivAnnualCosts = document.getElementById("annualCosts");

calcBtn.addEventListener("click", async () => {
  // const inputValue= input.value
  const newRequest = {
    consumption: input.value,
  };
  try {
    const response = await fetch("http://localhost:5005/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(newRequest),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Response:", responseData);
    theDivAnnualCosts.innerHTML = "Annual costs is : "+ responseData.annualCosts;
  } catch (error) {
    console.error("There was an error with the fetch operation:", error);
  }
});
