type INewUser = {
  username: String;
  password: String;
};

export async function createUserAccount() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function signInAccount() {
  try {
    let headers = new Headers();

    const response = await fetch("http://localhost:8080/actor/getAll", {
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      credentials: "include", // Include credentials such as cookies
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}
