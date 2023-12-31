import "./css/meyerReset.css";
import "./css/styles.css";
import {checkZIP, checkEmailPattern, checkEmailEmpty, checkPassword, matchPasswords} from "./formCode.js";
import {summonThumb} from "./summonThumb.js";

checkEmailPattern();
checkEmailEmpty();
checkZIP();
checkPassword();
matchPasswords();


// onloads should be in index.js, not the source file
window.onload = () => {
    document.getElementById("country").onchange = checkZIP;
    document.getElementById("zip").oninput = checkZIP;
    document.getElementById("password").oninput = checkPassword;
    document.getElementById("passwordCheck").oninput = matchPasswords;
    document.getElementById("form").onsubmit = summonThumb;
};