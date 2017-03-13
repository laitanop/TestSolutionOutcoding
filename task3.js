
// Make an AJAX request
function ajaxRequest() {
  axios.get('https://api.ipify.org?format=json')
    .then(function (response) {
      console.log("this is my ip: " + response.data.ip);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function thirdTask() {
  ajaxRequest();
}
