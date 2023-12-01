import "./css/meyerReset.css";
import "./css/styles.css";
import {checkZIP, checkEmailPattern, checkEmailEmpty, checkPassword, matchPasswords} from "./formCode.js";

checkEmailPattern();
checkEmailEmpty();
checkZIP();
checkPassword();
matchPasswords();

window.onload = () => {
    document.getElementById("country").onchange = checkZIP;
    document.getElementById("zip").oninput = checkZIP;
    document.getElementById("password").oninput = checkPassword;
    document.getElementById("passwordCheck").oninput = matchPasswords;
};