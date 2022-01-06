const key = document.getElementById("key");
const value = document.getElementById("value");
const submit = document.getElementById("submit");
const tasks = document.getElementById("tasks");

submit.onclick = function () {
    const key_txt = key.value;
    const value_txt = value.value;

    console.log(key_txt);
    console.log(value_txt);

    if (key && value) {
        localStorage.setItem(key_txt, value_txt);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const _key = localStorage.key(i);
    const _value = localStorage.getItem(_key);

    tasks.innerHTML += `${_key} >> ${_value} </br>`;

    const btn_div = document.createElement("div");
    btn_div.classList.add("btn_div");
    tasks.appendChild(btn_div);
}

for (let i = 0; i < localStorage.length; i++) {
    const _key = localStorage.key(i);
    const _value = localStorage.getItem(_key);

    const del_btn = document.createElement("button");
    del_btn.classList.add("delete" + JSON.stringify(i));
    del_btn.innerText = "completed";
    const btn_div = tasks.children[2*i + 1]
    btn_div.appendChild(del_btn)

    del_btn.onclick = function () {
        localStorage.removeItem(_key, _value);
        location.reload();
    }
}
