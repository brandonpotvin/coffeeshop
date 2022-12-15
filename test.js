//send user email to clipboard work with redcap user management

function copyToClipboard(clip) {
    var copyText = clip;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied " + clip + " to clipboard");
    });
  }

// var email_address = document.querySelector("#user_info_1-tr > td > div > div > center > table > tbody > tr:nth-child(3) > td:nth-child(2) > p > b > span.piping_receiver.piperec-4200-user_email").textContent

// alert(email_address)

copyToClipboard('Hello There')
