const months = ["January", "February", "March", "April", 'May', "June", "July", 'August', 'September', "October", 'November', "December"]
const weatherText = document.querySelector('.weatherText');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=kanpur&units=metric&appid=bbf4378d7abeb988c9b73ca8a24ec2a6`)
    .then((data) => {
        return data.json();
    }).then((data) => {
        if (data.name !== undefined) {
            let curr = new Date().getDate() + " " + months[new Date().getMonth()] + " 2021";
            let temp = `<span class="temp">${data.main.temp} &#176;C</span>`

            document.querySelector('.city_name').innerHTML = data.name;
            document.querySelector('.curr_date').innerHTML = curr;
            document.querySelector('.curr_temp').innerHTML = temp;
            document.querySelector('.desc').innerHTML = data.weather[0].description;
            document.querySelector('.icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

            document.querySelector('.maxmin_temp').innerHTML = data.main.temp_max + " &#176;C (max) / " + data.main.temp_min + " &#176;C (min) ";
        }
    }).catch((err) => {
        console.log(err.message);
    })

weatherText.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherText.value}&units=metric&appid=bbf4378d7abeb988c9b73ca8a24ec2a6`)
            .then((data) => {
                return data.json();
            }).then((data) => {
                if (data.name !== undefined) {
                    let curr = new Date().getDate() + " " + months[new Date().getMonth()] + " ,2021";
                    let temp = `<span class="temp">${data.main.temp} &#176;C</span>`

                    document.querySelector('.city_name').innerHTML = data.name;
                    document.querySelector('.curr_date').innerHTML = curr;
                    document.querySelector('.curr_temp').innerHTML = temp;
                    document.querySelector('.desc').innerHTML = data.weather[0].description;
                    document.querySelector('.icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";;

                    document.querySelector('.maxmin_temp').innerHTML = data.main.temp_max + " &#176;C (max) / " + data.main.temp_min + " &#176;C (min) ";
                    
                    let newUrl;
                    switch (data.weather[0].main) {
                        case 'Drizzle':
                            newUrl = "https://images.unsplash.com/photo-1529281528138-fbe93b7d25a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpenpsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Clouds':
                            newUrl = "https://images.unsplash.com/photo-1594156596782-656c93e4d504?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Rain':
                            newUrl = "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Snow':
                            newUrl = "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Clear':
                            newUrl = "https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VubnklMjBkYXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        case 'Thunderstom':
                            newUrl = "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
                            break;
                        default:
                            newUrl = "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
                            break;
                    }
                    document.querySelector('.bg-image').style.backgroundImage = `url("${newUrl}")`
                } else {
                    let curr = `<span>No such Place</span>`;
                    document.querySelector('.card-title').innerHTML = curr;
                }
            }).catch((err) => {
                console.log(err.message);
            })
    }
})