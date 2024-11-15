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
    inputField.value = button.dataset.sender;
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

  /* clear compose grid for reply */
  function clearComposeGridReply() {
    const titleInput = document.getElementById("title");
    titleInput.value = "RE: " + titleInput.value;
    const contentInput = document.getElementById("content");
    contentInput.value = "";
  }
  /* delete email */
  function deleteEmail() {
    const titleInput = document.getElementById("title");
    titleInput.value = "";
    const contactsInput = document.getElementById("contacts");
    contactsInput.value = "";
    const contentInput = document.getElementById("content");
    contentInput.value = "";
  }
  /*forward email*/
  function clearComposeGridForward() {
    const titleInput = document.getElementById("title");
    titleInput.value = "FWD: " + titleInput.value;
    const contactsInput = document.getElementById("contacts");
    contactsInput.value = "";
  }
  /* Send Email */
  function sendEmail() {
    const titleInput = document.getElementById("title");
    titleInput.value = "";
    const contactsInput = document.getElementById("contacts");
    contactsInput.value = "";
    const contentInput = document.getElementById("content");
    contentInput.value = "";
  }