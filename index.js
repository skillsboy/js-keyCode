const jsIsTrusted = document.getElementById("js-isTrusted");
const jsCode = document.getElementById("js-code");
const jsKey = document.getElementById("js-key");
const jsKeyCode = document.getElementById("js-keyCode");
const jsWhich = document.getElementById("js-which");

document.onkeydown = function (event) {
    const isTrusted = event.isTrusted;
    const code = event.code;
    let key = event.key;

    // deprecated
    const keyCode = event.keyCode;
    const which = event.which;

    if (code == "Space") key = "(Blank space)";

    jsIsTrusted.textContent = isTrusted;
    jsCode.textContent = code;
    jsKey.textContent = key;
    jsKeyCode.textContent = keyCode;
    jsWhich.textContent = which;
};