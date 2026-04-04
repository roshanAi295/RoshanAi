async function processVideo() {
  let file = document.getElementById("videoUpload").files[0];
  let output = document.getElementById("output");

  if (!file) {
    alert("Upload video first!");
    return;
  }

  output.innerText = "⏳ AI is analyzing video...";

  let description = "A person doing something interesting in a village";

  let res = await fetch("/api/script", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: description
    })
  });

  let data = await res.json();

  output.innerText = data.result;
    }
