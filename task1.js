
  // 1. adding notificaction
function addNotificationAction() {
    var notificationAction = {
          type: "notification",
          params: {
            title: "Test notification",
            message:"This is a Test notification"
          }
        }
        myData.actions.push(notificationAction);
      }

// 2.  Set action property of the first action to null and remove the link property
function setActionToNull(){
  myData.actions[0].params.action = null;
}

  function removeLinkProperty() {
    delete myData.actions[0].params.link;
  }

  function firstTask() {
    addNotificationAction();
    setActionToNull();
    removeLinkProperty();
  }
// render JSON data
function renderJson() {
   var jsonString= JSON.stringify(myData, null, 10);
  document.getElementById("myData").innerHTML = jsonString;
};
