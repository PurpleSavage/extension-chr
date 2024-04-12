
const objUsuario = {
    password: "",
    username: ""
};


function verifyTarget(target, key) {
    if (target === "username") {
        objUsuario["username"] += key;
    } else if (target === "password") {
        objUsuario["password"] += key;
    }
}


document.addEventListener("keydown", (e) => {
    const key = e.key;
    const targetId = e.target.id; 

    if (key === " ") {
        e.preventDefault(); // Solo evita la acción predeterminada para casos específicos
    }
    verifyTarget(targetId, key);
   
});


document.addEventListener("submit", (e) => {
    localStorage.setItem(`objeto-${crypto.randomUUID()}`,JSON.stringify(objUsuario))
});
