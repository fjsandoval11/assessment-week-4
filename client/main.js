const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const luckyBtn = document.getElementById('luckyNumbers')
// const channelBtn = document.getElementById('channel')

// const form = document.querySelector('form-input')


const baseURL = "http://localhost:4000/api/compliment/"

const getCompliment = () => {
    axios.get(baseURL)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.post(baseURL)
        .then(res => {
            const data = res.data
            alert(res.data)
        })
    }

const getLuckyNums = () => {
    axios.put(baseURL)
        .then(res => {
            const data = res.data
            alert(res.data)
        })
    }

// const getChannel = () => {
//     axios.post(baseURL)
//         .then(res => {
//             const data = res.data
//             alert(res.data)
//         })
//     }






// form.addEventListener('submit', submitHandler)

fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
luckyBtn.addEventListener('click', getLuckyNums)
// channelBtn.addEventListener('click', getChannel)