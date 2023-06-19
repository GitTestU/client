// Create User Post request
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

//Create Admin Post request
export async function PostSingUpAdmin(data) {
  const response = await fetch(
    "http://localhost:3000/carrentals/postcarrentals",
    {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }
  );
  const res = await response.json();
  console.log(res);
  return res;
}

// Post Login user
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
//Post Login Admin 
export async function PostLoginAdmin(data) {
  const response = await fetch("http://localhost:3000/auth/loginAdmin", {
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

export async function PostCar(data) {
  const response = await fetch("http://localhost:3000/user", {
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

export async function imageUpload(data) {
  const response = await fetch("http://localhost:3000/upload", {
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