//buttons for compliment, fortune, luckyNums, channel features
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const luckyBtn = document.getElementById('luckyNumbers')
const channelBtn = document.getElementById('channel')

// button + form for favorite movie feature
const inputField = document.querySelector('#text-field')
const form = document.querySelector('form')
const list = document.getElementById('movie-list')
const getMoviesBtn = document.getElementById('getMovies')



const baseURL = "http://localhost:4000"

const getCompliment = () => {
    axios.get(`${baseURL}/api/compliment/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`${baseURL}/api/fortune`)
        .then(res => {
            const data = res.data
            alert(data)
        })
    }

const getLuckyNums = () => {
    axios.get(`${baseURL}/api/luckyNums`)
        .then(res => {
            const data = res.data
            alert(data)
        })
    }

const getChannel = () => {
    axios.get(`${baseURL}/api/channel`)
        .then(res => {
            const data = res.data
            alert(data)
        })
    }

    const getMovies = () => {
        list.innerHTML = ''
        axios.get(`${baseURL}/api/movies`)
        .then(res => {
            const movieArr = res.data
            movieArr.forEach(movie => {
                let {movieTitle} = movie
                let listItem = document.createElement('li')
                listItem.textContent = movieTitle
                list.appendChild(listItem)
            })
        })
    }


const addMovieName = (evt) => {
    evt.preventDefault()
    list.innerHTML = ''
    console.log(inputField.value)
    let body = {
        movieTitle: inputField.value
    }
    axios.post(`${baseURL}/api/movies`, body)
    .then(res => {
        const movieArr = res.data
        movieArr.forEach(movie => {
            let {movieTitle} = movie
            let listItem = document.createElement('li')
            listItem.textContent = movieTitle
            list.appendChild(listItem)
        })
    })
    .catch(err => console.log(err))
    inputField.value = ''
}






getMoviesBtn.addEventListener('click', getMovies)
form.addEventListener('submit',addMovieName)
fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
luckyBtn.addEventListener('click', getLuckyNums)
channelBtn.addEventListener('click', getChannel)