export function checkEmailPattern() {
    const email = document.getElementById("email");

    email.addEventListener("input", () => {
        if (email.validity.typeMismatch) {
            email.setCustomValidity("Expecting email with form: char1....charN@emailprovider.extension");
        } 
        else {
            email.setCustomValidity("");
        }
    });
}

export function checkEmailEmpty() {
    const email = document.getElementById("email");

    email.addEventListener("input", () => {
        if (email.validity.valueMissing) {
            email.setCustomValidity("Field cannot be empty.");
        }
    });
}

export function checkZIP() {
    // For each country, defines the pattern that the ZIP has to follow
    const constraints = {
        default: [
            "^\\d{0}$",
            "Default ZIPs should be empty."
        ],
        angola: [
            "",
            "Angola checks are not a thing, hence why you can't get an error."
        ],
        algeria: [
            "^\\d{4}$",
            "Algeria ZIPs must follow the format: 'NNNN'"
        ],
        austria: [
            "^\\d{4}$",
            "Austria ZIPs must follow the format: 'NNNN'"
        ],
        australia: [
            "^\\d{4}$",
            "Australia ZIPs must follow the format: 'NNNN'"
        ],
        armenia: [
            "^\\d{4}$",
            "Armenia ZIPs must follow the format: 'NNNN'"
        ],
        argentina: [
            "^\\d{4}|[A-Za-z]\\d{4}[a-zA-Z]{3}$",
            "Argentina ZIPs must follow the format: '1974-1998 NNNN; From 1999 ANNNNAAA'"
        ]
    };
  
    // Read the country id
    const country = document.getElementById("country").value;
  
    // Get the NPA field
    const ZIPField = document.getElementById("zip");
  
    // Build the constraint checker
    const constraint = new RegExp(constraints[country][0], "");
  
    // Check it!
    if (constraint.test(ZIPField.value)) {
      // The ZIP follows the constraint, we use the ConstraintAPI to tell it
      ZIPField.setCustomValidity("");
    } else {
      // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
      // give a message about the format required for this country
      ZIPField.setCustomValidity(constraints[country][1]);
    }
}

export function checkPassword() {
    const password = document.getElementById("password");
    const constraint = new RegExp("^(?=.*\\d).{8,}$", "");

    password.addEventListener("input", () => {
        if (constraint.test(password.value)) {
            password.setCustomValidity("");
        } else {
            password.setCustomValidity("Expecting minimum of 8 characters and 1 number.");
        }
    });
}

export function matchPasswords() { // check if pw matches pwcheck
    const password = document.getElementById("password");
    const passwordCheck = document.getElementById("passwordCheck");

    passwordCheck.addEventListener("input", () => {
    if (password.value === passwordCheck.value) {
        passwordCheck.setCustomValidity("");
    } else {
        passwordCheck.setCustomValidity("Passwords do not match.");
    }
    });
}