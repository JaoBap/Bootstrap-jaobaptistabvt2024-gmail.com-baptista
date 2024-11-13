/* Change compose grid title */
function changeTitle(button) {
    const inputField = document.getElementById("title");
    inputField.value = button.textContent;
  }

  /* Add recipients in compose grid to self */
  function changeRecipientsReciever() {
    const inputField = document.getElementById("contacts");
    inputField.value += "example@me.com";
  }

  /* Add sender before reciever */
  function changeRecipientsSender(button) {
    const inputField = document.getElementById("contacts");
    inputField.value = button.dataset.sender + " to ";
  }

  /* Change content to of email */
  function changeContent(button) {
    const inputField = document.getElementById("content");
    inputField.value = button.value;
  }

  /* Clear compose grid inputs */
  function clearComposeGrid() {
    const titleInput = document.getElementById("title");
    titleInput.value = "";
    const contactsInput = document.getElementById("contacts");
    contactsInput.value = "";
    const contentInput = document.getElementById("content");
    contentInput.value = "";
  }