export async function getCars(data) {
    const response = await fetch("http://localhost:3000/car/getcar", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    console.log(res);
    return res;
  }


  export async function getUsers() {
    const response = await fetch("http://localhost:3000/getUser", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(), // body data type must match "Content-Type" header
    });
    const res = await response.json();
    console.log(res);
    return res;
  }

  
