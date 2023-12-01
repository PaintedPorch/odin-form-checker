export function summonThumb() {
    const body = document.querySelector("body");
    body.innerHTML = "";

    let thanks = document.createElement('p');
    thanks.classList.add("thanks");
    thanks.textContent = "Thank You!";

    body.appendChild(thanks);

    return false;
}