const createRanking = (rank) => (new Array(rank).fill("⭐")).join("")

const createCard = (card) => {
    document.querySelector(".hosts").innerHTML += `
    <article class="card">
        <div class="img"></div>
        <div class="content">
            <div class="desc">
                <p>${card.title}</p>
                <p>${card.desc} 1</p>
            </div>
            <p>${createRanking(card.rank)}</p>
        </div>
    </article>`
}

const createFamous = (cards) => {
    const famous = document.querySelector(".famous")
    const sorted = ([...cards]).sort((a, b) => b.rank - a.rank)
    sorted.slice(0, 3).forEach(c => {
        famous.innerHTML += `
        <article class="card card2">
            <div class="img"></div>
            <div class="content">
                <div class="desc">
                    <p>${c.title}</p>
                    <p>${c.desc}</p>
                </div>
                <p>${createRanking(c.rank)}</p>
            </div>
        </article>`
    })
}

const cardsContent = [
    {
        title: "Card 1",
        desc: "une carte",
        rank: 5,
        url: "",
    },
    {
        title: "Card 2",
        desc: "une carte",
        rank: 4,
        url: "",
    },
    {
        title: "Card 3",
        desc: "une carte",
        rank: 2,
        url: "",
    },
    {
        title: "Card 4",
        desc: "une carte",
        rank: 3,
        url: "",
    },
    {
        title: "Card 5",
        desc: "une carte",
        rank: 5,
        url: "",
    },
    {
        title: "Card 6",
        desc: "une carte",
        rank: 1,
        url: "",
    },
]

window.onload = () => {
    cardsContent.forEach(c => createCard(c))
    createFamous(cardsContent)
}