
const form = document.getElementById('searchForm')
form.addEventListener('submit', async function(e) {
    e.preventDefault()
    const searchTrem = form.elements.query.value 
    const config = { params: { q: searchTrem }}
    const res = await axios.get(` https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    form.elements.query.value = ''
})

const makeImages = (shows) => {
    for (let result of shows) {
       if (result.show.image) {
        const img = document.createElement('img')
        img.src = result.show.image.medium
        document.body.append(img)
       }
    }
}