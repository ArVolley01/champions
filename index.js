
const classSelector = document.getElementById('class-select')

const request = async () => {
    let req = await fetch(`https://www.dnd5eapi.co/api/classes/`)
    let res = await req.json()
    // console.log(res)
    res.results.forEach(char => {
        const option = document.createElement('option')
        option.setAttribute('value', char.name)
        option.innerText = char.name
        classSelector.append(option)
    });
}

classSelector.addEventListener('change', (e) => {
    document.getElementById('selected-class').innerText = e.target.value;
})

request();