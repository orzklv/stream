let emoji;

async function data(path) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    let data = await response.json();

    emoji = data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

data("../scripts/data.json");

function select(array) {
  console.log("i made selection");
  return array[Math.floor(Math.random() * array.length)];
}

function random() {
  let selection = select(Object.keys(emoji));
  return select(emoji[selection]);
}

document.getElementById("emoji").textContent = random();
