const apiKey = "9436a0e1076cfa7edc718c7e54a3bdf1";

const apiUrl = `http://www.freeforexapi.com/api/live&appid=${apiKey}`;

async function logData() {
  const response = await fetch(
    "http://www.freeforexapi.com/api/live&appid=${apiKey}"
  );
  const result = await response.json();
  console.log(result);
}

logData();
