const showInput = () => {
  const name = document.getElementById("name").value;
  const message = document.getElementById("msg").value;
  const result = name.bold() + "<br>" + message;
  document.getElementById('para').innerHTML = result;
}