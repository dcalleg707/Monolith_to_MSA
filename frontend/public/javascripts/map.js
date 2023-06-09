window.onload = function (event) {
    if (document.querySelector("#main_map")) {
        const map = L.map('main_map').setView([51.505, -0.09], 3);

        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        document.querySelectorAll("input[type='hidden']").forEach(item => {
            L.marker([item.attributes.lat.value, item.attributes.lon.value]).addTo(map);
        })
    }


    let user
    axios.get("http://localhost:8080/auth/check"
        , {
            withCredentials: true
        })
        .then((data) => {
            document.querySelector(".login-button").innerHTML = "<p class='nav-link'> Hola " + data.data.fullName + "</p>"
            return data.data.fullName
        })
        .then((data) => {
            user = data
            generateRents()
        })
        .catch(err => console.log(err))

    function generateRents() {
        var cards = document.querySelectorAll(".js-rentButton");
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            if (!user) {
                card.style.display = "none"
            }
            else {
                card.style.display = "inline-block"
                card.onclick = function () {
                    console.log(user)
                    axios.post("http://localhost:8080/api/rent", {
                        id: this.getAttribute("bicycle"),
                        owner: user
                    }).then(() => {
                        location.reload();
                    })
                };
            }
        }
    }
    generateRents()
}
