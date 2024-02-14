function FILEJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // xhtpp STARTS HERE
            const object = JSON.parse(xhttp.responseText);
            for (const obj of object) {
                for(const firstname of obj["name"]["first-name"]) {
                    console.log(firstname);
                }
                console.log(obj["name"]["last-name"]);
                console.log(obj["age"]);
            }
            // xhttp ENDS HERE
        }
    };
    xhttp.open("GET", "file.json", true);
    xhttp.send();
}
console.log(localStorage.getItem("name"));

console.log(localStorage.getItem("name"));

console.log(localStorage.getItem("name"));
