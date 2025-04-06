const button = document.querySelector('#btn') 
const map_place = document.querySelector('#map')
const section = document.querySelector('.search_and_heading')


const KEY = 'at_uoj7V9ESPl63DyjAvatjPJmr0yV6Z'

const map = L.map('map').setView([51.505, -0.09], 13);
const marker = L.marker([51.5, -0.09]).addTo(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

button.addEventListener('click', () =>{
    const ip = document.querySelector('#search')
    console.log(ip)
})



    const getAdress = async() =>{


        try{
            const response = await axios.get(
                `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_uoj7V9ESPl63DyjAvatjPJmr0yV6Z&ipAddress=8.8.8.8`
            )
            const {location:{lat, lng, country, city, timezone}, isp} = response.data

           console.log(lng, lat, isp, country, city)
            if(!ip){
                ip_result.innerContent = ''
                location_result.innerContent = ''
                timezone_result.innerContent = ''
                isp_result.innerContent = ''
                return;
        }else{
                ip_result.innerText = `${ip}`
                location_result.innerText = `${country, city}`
                timezone_result.innerText = `${timezone}`
                isp_result.innerContent = `${isp}`

                map.setView([lng, lat], 20)
        }
        }catch{
    
        }
    } 



        //     const ip_result = document.querySelectorAll('#ip_adress')
    //     const location_result = document.querySelectorAll('#location')
    //     const timezone_result = document.querySelectorAll('#timezone')
    //     const isp_result = document.querySelectorAll('#isp')

    
