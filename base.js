 
//   async function setUpArrays(){
//     let url = "https://api.aviationstack.com/v1/flights?access_key=e4aef054101ea4a81119444431b60b03";
//     console.log(URL);
//     let response = await fetch(URL);
//     let responseJson = await response.json();
//     console.log(responseJson);
//     var array;
    
//     let length = responseJson[0].data.length;
//     for(let i = 0; i < length; i++){
//         for(let j = 0; 4; j++){
//             if(j == 0){
//                 array[i][j] = responseJson[0].data[i].flight_date;
//             }
//             else if(j == 1){
//                 array[i][j] = responseJson[0].data[i].departure.airport;
//             }
//             else if(j == 2){
//                 array[i][j] = responseJson[0].data[i].arrival.airport;
//             }
//             else{
//                 array[i][j] = responseJson[0].data[i].airline.name;
//             }
//         }
//     }

//     let questionOneDiv = document.querySelector("#question1");
//     questionOneDiv.innerHTML += "What airport(s) would you like to depart from?\n";
//     const departDiv = document.createElement("div");
//     departDiv.classList.add("property");
//     let questionTwoDiv = document.querySelector("#question2");
//     questionTwoDiv.innerHTML += "What airport(s) would you like to arrive in?\n";
//     const arriveDiv = document.createElement("div");
//     arriveDiv.classList.add("property");
//     let questionThreeDiv = document.querySelector("#question3");
//     questionThreeDiv.innerHTML += "What date(s) would you like to fly?\n";
//     const dateDiv = document.createElement("div");
//     dateDiv.classList.add("property");
//     let questionFourDiv = document.querySelector("#question4");
//     questionFourDiv.innerHTML += "What airline(s) would you like to fly with?";
//     const airlineDiv = document.createElement("div");
//     airlineDiv.classList.add("property");
    

    
    

//     for(let k = 0; k < length; k++){
//         let place1 = responseJson[0].data[k].departure.airport;
//         let place2 = responseJson[0].data[k].arrival.airport;
//         let date = responseJson[0].data[k].flight_date;
//         let airline = responseJson[0].data[k].airline.name;
//         let display1 = "<button onClick = dispOne("+place1+")>" + place1 + "</button>";
//         let display2 = "<button onClick = dispTwo("+place2+")>" + place2 + "</button>";
//         let display3 = "<button onClick = dispThree("+date+")>" + date + "</button>";
//         let display4 = "<button onClick = dispFour("+airline+")>" + airline + "</button>";
//         departDiv.innerHTML += display1;
//         arriveDiv.innerHTML += display2;
//         dateDiv.innerHTML += display3;
//         airlineDiv.innerHTMl += display4;
//     }

// }

const twodArray = [
    [
        "2024-10-20",
        "9673",
        "China Express Air",
        "Juzhou",
        "Shenzhen"
    ],
    [
        "2024-10-20",
        "8463",
        "China Airlines",
        "Kumamoto",
        "Haneda Airport"
    ],
    [
        "2024-10-20",
        "1316",
        "Air India Express",
        "Indira Gandhi International",
        "Sanganeer"
    ],
    [
        "2024-10-20",
        "6193",
        "British Airways",
        "Doha International",
        "Noibai International"
    ],
    [
        "2024-10-20",
        null,
        "empty",
        "Albury",
        "Essendon"
    ],
    [
        "2024-10-20",
        "5287",
        "China Eastern Airlines",
        "Guangzhou Baiyun International",
        "Shanghai"
    ],
    [
        "2024-10-20",
        "129",
        "Silk Way West",
        "Heydar Aliyev International (Bina International)",
        "Seoul (Incheon)"
    ],
    [
        "2024-10-20",
        "7845",
        "Hainan Airlines",
        "Shanghai Pudong International",
        "Xianyang"
    ],
    [
        "2024-10-20",
        "4395",
        "Singapore Airlines",
        "Auckland International",
        "Hawkes Bay"
    ],
    [
        "2024-10-20",
        "808",
        "FlexFlight",
        "Nauru International",
        "Nadi International"
    ],
    [
        "2024-10-20",
        "282",
        "Air New Zealand",
        "Singapore Changi",
        "Auckland International"
    ],
    [
        "2024-10-20",
        "4282",
        "Singapore Airlines",
        "Singapore Changi",
        "Auckland International"
    ],
    [
        "2024-10-20",
        "7166",
        "Lufthansa",
        "Singapore Changi",
        "Auckland International"
    ],
    [
        "2024-10-20",
        "3238",
        "EVA Air",
        "Auckland International",
        "Queenstown"
    ],
    [
        "2024-10-20",
        "5552",
        "S7 Airlines",
        "Tolmachevo",
        "Dushanbe"
    ],
    [
        "2024-10-20",
        "740",
        "Aircalin",
        "Singapore Changi",
        "Tontouta"
    ],
    [
        "2024-10-20",
        "4022",
        "Air France",
        "Singapore Changi",
        "Tontouta"
    ],
    [
        "2024-10-20",
        "3719",
        "Sichuan Airlines",
        "Kuala Lumpur International Airport (klia)",
        null
    ],
    [
        "2024-10-20",
        "9039",
        "China Postal Airlines",
        "Changsha",
        "Chongqing Jiangbei International"
    ],
    [
        "2024-10-20",
        "9815",
        "Central Airlines",
        "Kansai International",
        "Zhengzhou"
    ],
    [
        "2024-10-20",
        "76",
        "Silk Way West",
        "Heydar Aliyev International (Bina International)",
        "Zhengzhou"
    ],
    [
        "2024-10-20",
        "7523",
        "Qantas",
        "Christchurch International",
        "Auckland International"
    ],
    [
        "2024-10-20",
        "1207",
        "9 Air Co",
        "Suvarnabhumi International",
        "Guiyang"
    ],
    [
        "2024-10-20",
        "106",
        "ANA",
        "Los Angeles International",
        "Haneda Airport"
    ],
    [
        "2024-10-20",
        "843",
        "ANA",
        "Singapore Changi",
        "Haneda Airport"
    ],
    [
        "2024-10-20",
        "351",
        "Hong Kong Air Cargo",
        "Ninoy Aquino International",
        "Hong Kong International"
    ],
    [
        "2024-10-20",
        "623",
        "Hong Kong Express",
        "Hong Kong International",
        "Haneda Airport"
    ],
    [
        "2024-10-20",
        "1561",
        "AirAsia",
        "Kota-Kinabalu International Airport",
        "Beijing Daxing International Airport"
    ],
    [
        "2024-10-20",
        "2911",
        "Jiangsu Jingdong Cargo Airlines",
        "Suvarnabhumi International",
        "Chongqing Jiangbei International"
    ],
    [
        "2024-10-20",
        "849",
        "ANA",
        "Suvarnabhumi International",
        "Haneda Airport"
    ],
    [
        "2024-10-20",
        "35",
        "Jet Linx Aviation",
        "Singapore Changi",
        "Haneda Airport"
    ],
    [
        "2024-10-20",
        "313",
        "Emirates",
        "Dubai",
        "Haneda Airport"
    ],
    [
        "2024-10-20",
        "9051",
        "China Postal Airlines",
        "Nanjing Lukou International Airport",
        "Haikou"
    ],
    [
        "2024-10-20",
        "9033",
        "China Postal Airlines",
        "Nanjing Lukou International Airport",
        "Xianyang"
    ],
    [
        "2024-10-20",
        "3345",
        "SriLankan Airlines",
        "Suvarnabhumi International",
        "Kansai International"
    ],
    [
        "2024-10-20",
        "2488",
        "Shandong Airlines",
        "Xianyang",
        "Kansai International"
    ],
    [
        "2024-10-20",
        "4170",
        "Bangkok Airways",
        "Suvarnabhumi International",
        "Kansai International"
    ],
    [
        "2024-10-20",
        "7341",
        "AlphaSky",
        "Suvarnabhumi International",
        "Kansai International"
    ],
    [
        "2024-10-20",
        "5378",
        "Hawaiian Airlines",
        "Suvarnabhumi International",
        "Kansai International"
    ],
    [
        "2024-10-20",
        "2474",
        "Shandong Airlines",
        "Chongqing Jiangbei International",
        "Kansai International"
    ],
    [
        "2024-10-20",
        "727",
        "JAL",
        "Suvarnabhumi International",
        "Kansai International"
    ],
    [
        "2024-10-20",
        "9017",
        "China Postal Airlines",
        "Nanjing Lukou International Airport",
        "Kunming"
    ],
    [
        "2024-10-20",
        "6813",
        "SF Airlines",
        "Beijing Capital International",
        "Shenzhen"
    ],
    [
        "2024-10-20",
        "421",
        "China Southern Airlines",
        "Vancouver International",
        "Qingdao"
    ],
    [
        "2024-10-20",
        "156",
        "Cathay Pacific",
        "Hong Kong International",
        "Brisbane International"
    ],
    [
        "2024-10-20",
        "3467",
        "Qatar Airways",
        "Hong Kong International",
        "Brisbane International"
    ],
    [
        "2024-10-20",
        "5632",
        "Miat - Mongolian Airlines",
        "Hong Kong International",
        "Brisbane International"
    ],
    [
        "2024-10-20",
        "7906",
        "Jet Linx Aviation",
        "Hong Kong International",
        "Brisbane International"
    ],
    [
        "2024-10-20",
        "4146",
        "British Airways",
        "Hong Kong International",
        "Brisbane International"
    ],
    [
        "2024-10-20",
        "5850",
        "Finnair",
        "Hong Kong International",
        "Brisbane International"
    ],
    [
        "2024-10-20",
        "176",
        "United Airlines",
        "Guam International",
        "Truk"
    ],
    [
        "2024-10-20",
        "1111",
        "9 Air Co",
        "Fenghuang International (Phoenix International)",
        "Guangzhou Baiyun International"
    ],
    [
        "2024-10-20",
        "1009",
        "9 Air Co",
        "Shanghai Pudong International",
        "Guangzhou Baiyun International"
    ],
    [
        "2024-10-20",
        "347",
        "China Southern Airlines",
        "Charles De Gaulle",
        "Guangzhou Baiyun International"
    ],
    [
        "2024-10-20",
        "9027",
        "China Postal Airlines",
        "Nanjing Lukou International Airport",
        "Weifang"
    ],
    [
        "2024-10-20",
        "4012",
        "Longhao Airlines",
        "Zhengzhou",
        "Weihai"
    ],
    [
        "2024-10-20",
        "3817",
        "Tianjin Air Cargo",
        "Singapore Changi",
        "Nanning"
    ],
    [
        "2024-10-20",
        "3829",
        "Tianjin Air Cargo",
        "Ninoy Aquino International",
        "Nanning"
    ],
    [
        "2024-10-20",
        "3819",
        "Tianjin Air Cargo",
        "Tan Son Nhat International",
        "Nanning"
    ],
    [
        "2024-10-20",
        "3831",
        "Tianjin Air Cargo",
        "Ninoy Aquino International",
        "Nanning"
    ],
    [
        "2024-10-20",
        "3837",
        "Tianjin Air Cargo",
        "Mingaladon",
        "Nanning"
    ],
    [
        "2024-10-20",
        "9825",
        "Central Airlines",
        "Suvarnabhumi International",
        "Nanning"
    ],
    [
        "2024-10-20",
        "9039",
        "YTO Cargo Airlines",
        "Indira Gandhi International",
        "Nanning"
    ],
    [
        "2024-10-20",
        "9141",
        "YTO Cargo Airlines",
        "Madras International (Meenambakkam)",
        "Nanning"
    ],
    [
        "2024-10-20",
        "9057",
        "China Postal Airlines",
        "Nanjing Lukou International Airport",
        "Chongqing Jiangbei International"
    ],
    [
        "2024-10-20",
        "9015",
        "YTO Cargo Airlines",
        "Noibai International",
        "Lishe International Airport"
    ],
    [
        "2024-10-20",
        "7267",
        "SF Airlines",
        "Guangzhou Baiyun International",
        "Lishe International Airport"
    ],
    [
        "2024-10-20",
        "4115",
        "Longhao Airlines",
        "Kansai International",
        "Lishe International Airport"
    ],
    [
        "2024-10-20",
        "4494",
        "Etihad Airways",
        "Auckland International",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "4427",
        "Etihad Airways",
        "Melbourne - Tullamarine Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "4311",
        "Singapore Airlines",
        "Melbourne - Tullamarine Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "4830",
        "Thai Airways International",
        "Melbourne - Tullamarine Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "8769",
        "Turkish Airlines",
        "Melbourne - Tullamarine Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "6795",
        "United Airlines",
        "Melbourne - Tullamarine Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "211",
        "Air New Zealand",
        "Melbourne - Tullamarine Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "5050",
        "Finnair",
        "Sydney Kingsford Smith Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "7424",
        "British Airways",
        "Sydney Kingsford Smith Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "5046",
        "Emirates",
        "Sydney Kingsford Smith Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "5016",
        "AlphaSky",
        "Sydney Kingsford Smith Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "7292",
        "American Airlines",
        "Sydney Kingsford Smith Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "138",
        "Qantas",
        "Sydney Kingsford Smith Airport",
        "Christchurch International"
    ],
    [
        "2024-10-20",
        "7974",
        "Suparna Airlines",
        "Shanghai Pudong International",
        "Tianjin Binhai International"
    ],
    [
        "2024-10-20",
        "3829",
        "Tianjin Air Cargo",
        "Kansai International",
        "Tianjin Binhai International"
    ],
    [
        "2024-10-20",
        "7919",
        "Suparna Airlines",
        "Hangzhou",
        "Tianjin Binhai International"
    ],
    [
        "2024-10-20",
        "7406",
        "Suparna Airlines",
        "Shanghai Pudong International",
        "Tianjin Binhai International"
    ],
    [
        "2024-10-20",
        "9101",
        "China Postal Airlines",
        "Nanjing Lukou International Airport",
        "Tianjin Binhai International"
    ],
    [
        "2024-10-20",
        null,
        "Central Airlines",
        "Charles De Gaulle",
        "Tianjin Binhai International"
    ],
    [
        "2024-10-20",
        "4106",
        null,
        "Tan Son Nhat International",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "4082",
        "FlexFlight",
        "Tan Son Nhat International",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "5001",
        null,
        "Tan Son Nhat International",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "9502",
        "SWISS",
        "Hong Kong International",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "3488",
        "Qatar Airways",
        "Hong Kong International",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "5612",
        "Miat - Mongolian Airlines",
        "Hong Kong International",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "4140",
        "British Airways",
        "Hong Kong International",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "5844",
        "Finnair",
        "Hong Kong International",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "5518",
        "Virgin Australia",
        "Singapore Changi",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "8218",
        "Vistara",
        "Singapore Changi",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "9311",
        "Turkish Airlines",
        "Singapore Changi",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "8068",
        "SAS",
        "Singapore Changi",
        "Melbourne - Tullamarine Airport"
    ],
    [
        "2024-10-20",
        "5485",
        "ANA",
        "Singapore Changi",
        "Melbourne - Tullamarine Airport"
    ]
]

var api_key = "06f91d722db50b514651123072946071";
const parsedArray  = twodArray;
async function initQ(){
    console.log("initQ");
    const url = "https://api.aviationstack.com/v1/flights?access_key=06f91d722db50b514651123072946071";
    const options = {
        method: "GET",
    };

    /*
    const response = await fetch(url, options);
    const apiResponse = await response.json();
    console.log(apiResponse.data[1]);

    let length = apiResponse.data.length;

    var parsedArray = new Array(length);

    for(let i = 0; i<length; i++){
        var subArray = new Array(4);
        subArray[0] = apiResponse.data[i].flight_date;
        subArray[1] = apiResponse.data[i].flight.number;
        subArray[2] = apiResponse.data[i].airline.name;
        subArray[3] = apiResponse.data[i].arrival.airport;
        subArray[4] = apiResponse.data[i].departure.airport;
        parsedArray[i] = subArray;
    }
    console.log(parsedArray);
    */
    
    //parsedArray  = twodArray;
    const uniqueParsedArray = [];
    for (let col = 0; col < parsedArray[0].length; col++) {
        const uniqueValues = new Set();
        for (const row of parsedArray) {
            if(row[col] !== null){
            const value = row[col].replaceAll(" ", "");//removes all spaces within value
            uniqueValues.add(value.trim());
            }
    }
    uniqueParsedArray.push(Array.from(uniqueValues));
}

    console.log(uniqueParsedArray);
    console.log("fufb");

    // Get the div where the checkboxes will be inserted
    const departureContainer = document.getElementById('depature-selections');
    const arrivalContainer = document.getElementById('arrivals-selections');
    const airlineContainer = document.getElementById('airline-selections');
    const dateContainer = document.getElementById('date-selections');

    arrivalContainer.setAttribute("style","display: none");
    airlineContainer.setAttribute("style","display: none");
    dateContainer.setAttribute("style","display: none");

    const checkboxMax = 100;
    
    
    // Generate checkboxes for departures
    for(let i = 0; i<uniqueParsedArray[4].length & i<checkboxMax; i++){
        content = uniqueParsedArray[4][i];
        // Create a label for the checkbox
        const label = document.createElement('label');
        label.innerHTML += `
            <input type="checkbox" name="options" onclick=dispOne("${content}") value="${i}">${content}`;
        departureContainer.appendChild(label);
        departureContainer.appendChild(document.createElement('br')); // Line break for spacing
    };
    const nextButtonDepart = document.createElement('button')
    nextButtonDepart.textContent = "Next";
    nextButtonDepart.addEventListener('click', () => {//event listener to make departures disappear
        // Code to execute when the button is clicked
        departureContainer.setAttribute("style","display: none");
        arrivalContainer.setAttribute("style","display: block");
      });
      departureContainer.appendChild(document.createElement('br')); // Line break for spacing
    departureContainer.appendChild(nextButtonDepart);








     // Generate checkboxes for arrivals
     for(let i = 0; i<uniqueParsedArray[3].length & i<checkboxMax; i++){
        content = uniqueParsedArray[3][i];
        // Create a label for the checkbox
        const label = document.createElement('label');
        label.innerHTML += `
            <input type="checkbox" name="options" onclick=dispTwo("${content}") value="${i}">${content}`;
            arrivalContainer.appendChild(label);
        arrivalContainer.appendChild(document.createElement('br')); // Line break for spacing
    };
    const nextButtonArrival = document.createElement('button')
    nextButtonArrival.textContent = "Next";
    nextButtonArrival.addEventListener('click', () => {//event listener to make departures disappear
        // Code to execute when the button is clicked
        arrivalContainer.setAttribute("style","display: none");
        airlineContainer.setAttribute("style","display: block");
      });
      arrivalContainer.appendChild(document.createElement('br')); // Line break for spacing
    arrivalContainer.appendChild(nextButtonArrival);







     // Generate checkboxes for airline
     for(let i = 0; i<uniqueParsedArray[2].length & i<checkboxMax; i++){
        content = uniqueParsedArray[2][i];
        // Create a label for the checkbox
        const label = document.createElement('label');
        label.innerHTML += `
            <input type="checkbox" name="options" onclick=dispFour("${content}") value="${i}">${content}`;
            airlineContainer.appendChild(label);
        airlineContainer.appendChild(document.createElement('br')); // Line break for spacing
    };
    const nextButtonAirline = document.createElement('button')
    nextButtonAirline.textContent = "Next";
    nextButtonAirline.addEventListener('click', () => {//event listener to make departures disappear
        // Code to execute when the button is clicked
        airlineContainer.setAttribute("style","display: none");
        dateContainer.setAttribute("style","display: block");
      });
      airlineContainer.appendChild(document.createElement('br')); // Line break for spacing
      airlineContainer.appendChild(nextButtonAirline);









     // Generate checkboxes for dates
     for(let i = 0; i<uniqueParsedArray[0].length & i<checkboxMax; i++){
        content = uniqueParsedArray[0][i];
        // Create a label for the checkbox
        const label = document.createElement('label');
        label.innerHTML += `
            <input type="checkbox" name="options" onclick=dispThree("${content}") value="${i}">${content}`;
            dateContainer.appendChild(label);
            dateContainer.appendChild(document.createElement('br')); // Line break for spacing
    };
    const nextButtonDate = document.createElement('button')
    nextButtonDate.textContent = "Next";
    nextButtonDate.addEventListener('click', () => {//event listener to make departures disappear
        // Code to execute when the button is clicked
        dateContainer.setAttribute("style","display: none");
        
      });
      dateContainer.appendChild(document.createElement('br')); // Line break for spacing
    dateContainer.appendChild(nextButtonDate);

    

    console.log(parsedArray);
}

function selectionClick(index){
    console.log(index + " was clicked")
}


const departs = [];
const arrivals = [];
const dates = [];
const airlines = [];

function dispOne(place){
    console.log("place");
    departs.push(place);
}

function dispTwo(place){
    arrivals.push(place);
}

function dispThree(date){
    dates.push(date);
}

function dispFour(airline){
    airlines.push(airline);
}

function generateFlights(){
    let pref;
    const departPreferences = [];
    const arrivalPreferences = [];
    const datePreferences = [];
    const airlinePreferences = [];
    // if(departs.length > 1){
    //     let string = "You have selected the following departure locations: ";
    //     for(let i = 0; i < departs.length - 1; i++){
    //         string += departs[i] + ", ";
    //     }
    //     string += "and " + departs[departs.length - 1] + ". Please rank them from 1 to " + departs.length + " with 1 being the worst preference and " + departs.length + " having the highest preference";
    //     alert("Please specify the preferences between the departure airports that you selected.\n" + string);
    //     const departPreferences = [];
    //     for(let j = 0; j < departs.length; j++){
    //         pref = prompt("Enter the preference for " + departs[j]);
    //         departPreferences.push(pref);
    //     }
    // }
    // else if(departs.length == 1){
    //     pref = 1;
    //     departPreferences.push(pref);
    // }

    // if(arrivals.length > 1){
    //     let string = "You have selected the following arrival locations: ";
    //     for(let i = 0; i < arrivals.length - 1; i++){
    //         string += arrivals[i] + ", ";
    //     }
    //     string += "and " + arrivals[arrivals.length - 1] + ". Please rank them from 1 to " + arrivals.length + " with 1 being the worst preference and " + arrivals.length + " having the highest preference";
    //     alert("Please specify the preferences between the arrivals airports that you selected.\n" + string);
    //     for(let j = 0; j < arrivals.length; j++){
    //         pref = prompt("Enter the preference for " + arrivals[j]);
    //         arrivalsPreferences.push(pref);
    //     }
    // }
    // else if(arrivals.length == 1){
    //     pref = 1;
    //     arrivalsPreferences.push(pref);
    // }

    // if(dates.length > 1){
    //     let string = "You have selected the following dates: ";
    //     for(let i = 0; i < dates.length - 1; i++){
    //         string += dates[i] + ", ";
    //     }
    //     string += "and " + dates[departs.length - 1] + ". Please rank them from 1 to " + dates.length + " with 1 being the worst preference and " + dates.length + " having the highest preference";
    //     alert("Please specify the preferences between the dates that you selected.\n" + string);
    //     for(let j = 0; j < departs.length; j++){
    //         pref = prompt("Enter the preference for " + dates[j]);
    //         datePreferences.push(pref);
    //     }
    // }
    // else if(dates.length == 1){
    //     pref = 1;
    // //     datePreferences.push(pref);
    // // }

    // if(airlines.length > 1){
    //     let string = "You have selected the following airlines to travel by: ";
    //     for(let i = 0; i < airlines.length - 1; i++){
    //         string += airlines[i] + ", ";
    //     }
    //     string += "and " + airlines[airlines.length - 1] + ". Please rank them from 1 to " + airlines.length + " with 1 being the worst preference and " + airlines.length + " having the highest preference";
    //     alert("Please specify the preferences between the airlines that you selected.\n" + string);
    //     for(let j = 0; j < airlines.length; j++){
    //         pref = prompt("Enter the preference for " + airlines[j]);
    //         airlinePreferences.push(pref);
    //     }
    // }
    // else if(airlines.length == 1){
    //     pref = 1;
    //     airlinePreferences.push(pref);
    // }

    const scores = [];
    for(let i = 0; i < parsedArray.length; i++){
        let departure = parsedArray[i][4];
        let arrival = parsedArray[i][3];
        let date = parsedArray[i][0];
        let airline = parsedArray[i][2];
        let score = 0;
        for(let j = 0; j < departs.length; j++){
            if(departure === departs[j]){
                score += 5;
            }
        }
        for(let k = 0; k < arrivals.length; k++){
            if(arrival === arrivals[k]){
                score += 5;
            }
        }
        for(let l = 0; l < dates.length; l++){
            if(date === dates[l]){
                score += 1;
            }
        }
        for(let m = 0; m < airlines.length; m++){
            if(airline === airlines[m]){
                score += 1;
            }
        }
        scores.push(score);
        
        

    }

    let firstScore = 0;
    let secondScore = 0;
    let thirdScore = 0;
    let firstPos = -1;
    let secondPos = -1;
    let thirdPos = -1;
    for(let a = 0; a < scores.length; a++){
        if(scores[a] > firstScore){
            thirdScore = secondScore;
            thirdPos = secondPos;
            secondScore = firstScore;
            secondPos = firstPos;
            firstScore = scores[a];
            firstPos = a;
        }
        else if(scores[a] > secondScore){
            thirdScore = secondScore;
            thirdPos = secondPos;
            secondScore = scores[a];
            secondPos = a;
        }
        else if(scores[a] > thirdScore){
            thirdScore = scores[a];
            thirdPos = a;
        }
    }

    let flightDiv = document.querySelector("#flights");
    flightDiv.innerHTML += "Here are the flight(s) found which best meet your specifications: \n";
    if(firstScore > 7){
        flightDiv.innerHTML += "1. Flight number " + parsedArray[firstPos][1] + " leaves from " + parsedArray[firstPos][4] + " and arrives at " + parsedArray[firstPos][3] + " on " + parsedArray[firstPos][0] + " traveling by " + parsedArray[firstPos][2] + "\n";
    }
    if(secondScore > 7){
        flightDiv.innerHTML += "2. Flight number " + parsedArray[secondPos][1] + " leaves from " + parsedArray[secondPos][4] + " and arrives at " + parsedArray[secondPos][3] + " on " + parsedArray[secondPos][0] + " traveling by " + parsedArray[secondPos][2] + "\n";
    }
    if(thirdScore > 7){
        flightDiv.innerHTML += "3. Flight number " + parsedArray[thirdPos][1] + " leaves from " + parsedArray[thirdPos][4] + " and arrives at " + parsedArray[thirdPos][3] + " on " + parsedArray[thirdPos][0] + " traveling by " + parsedArray[thirdPos][2] + "\n";
    }
    if(firstScore <= 7 && secondScore <= 7 && thirdScore <= 7){
        flightDiv.innerHTML += "There are no flights which have that departure and arrival. Please try again with broader answers" + "\n";
    }
   
    
}