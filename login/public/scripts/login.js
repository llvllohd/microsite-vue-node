login = () => {
  const username = document.getElementById('username').value,
    password = document.getElementById('password').value,
    section = document.getElementById('section');
  const mswData = localStorage.getItem('msw');
  const { redirectUrl, token } = JSON.parse(mswData);
  section.innerHTML = `<pre> ${redirectUrl} \n ${token}`;
  // section.innerHTML = token;
};
