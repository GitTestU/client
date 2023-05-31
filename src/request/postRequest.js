export async function PostSıngUp(data) {
  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
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

export async function PostLogin(data) {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
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
