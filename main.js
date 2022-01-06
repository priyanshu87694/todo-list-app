const submit = document.getElementById("submit");
const tasks = document.getElementById("tasks");

submit.onclick = function () {
    const key = document.getElementById("key").value;
    const value = document.getElementById("value").value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    } else {
        alert("Empty field/s not allowed");
    }
}

for (let i = 0; i < localStorage.length; i++) {
    const _key = localStorage.key(i);
    const _value = localStorage.getItem(_key);

    tasks.innerHTML += `${_key} >> ${_value} </br>`;

    const btn_div = document.createElement("div");
    btn_div.classList.add("btn_div");

    tasks.appendChild(btn_div);
}

for (let i = 0; i < localStorage.length; i++) {
    const del_btn = document.createElement("button");
    del_btn.classList.add("delete" + JSON.stringify(i));
    del_btn.innerText = "completed";
    tasks.children[2 * i + 1].appendChild(del_btn);

    del_btn.onclick = function () {
        const _key = localStorage.key(i);
        localStorage.removeItem(_key);
        location.reload();
    }
}
