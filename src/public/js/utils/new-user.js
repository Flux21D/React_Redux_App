const removeNewUser = () => {
  let auth = localStorage.getItem("auth");

  if (auth) {
    auth = JSON.parse(auth);

    auth.isNew = false;

    localStorage.setItem("auth", JSON.stringify(auth));
  }
};

export default removeNewUser;
