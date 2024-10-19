 
    
  async function setUpArrays(){
    let url = "https://api.aviationstack.com/v1/flights?access_key=e4aef054101ea4a81119444431b60b03";
    console.log(URL);
    let response = await fetch(URL);
    let responseJson = await response.json();
    console.log(responseJson);
    var array;
    
    let length = responseJson[0].data.length;
    for(let i = 0; i < length; i++){
        for(let j = 0; 4; j++){
            if(j == 0){
                array[i][j] = responseJson[0].data[i].flight_date;
            }
            else if(j == 1){
                array[i][j] = responseJson[0].data[i].departure.airport;
            }
            else if(j == 2){
                array[i][j] = responseJson[0].data[i].arrival.airport;
            }
            else{
                array[i][j] = responseJson[0].data[i].airline.name;
            }
        }
    }

    let questionOneDiv = document.querySelector("#question1");
    questionOneDiv.innerHTML += "What airport(s) would you like to depart from?\n";
    let questionTwoDiv = document.querySelector("#question2");
    questionTwoDiv.innerHTML += "What airport(s) would you like to arrive in?\n";
    let questionThreeDiv = document.querySelector("#question3");
    questionThreeDiv.innerHTML += "What date(s) would you like to fly?\n";
    let questionFourDiv = document.querySelector("#question4");
    questionFourDiv.innerHTML += "What airline(s) would you like to fly with?";

    const departDiv = document.createElement("div");
    departDiv.classList.add("property");
    const arriveDiv = document.createElement("div");
    arriveDiv.classList.add("property");
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("property");
    const airlineDiv = document.createElement("div");
    airlineDiv.classList.add("property");

    for(let k = 0; k < length; k++){
        let place1 = responseJson[0].data[k].departure.airport;
        let place2 = responseJson[0].data[k].arrival.airport;
        let date = responseJson[0].data[k].flight_date;
        let airline = responseJson[0].data[k].airline.name;
        let display1 = "<button onClick = dispOne("+place1+")>" + place1 + "</button>";
        let display2 = "<button onClick = dispTwo("+place2+")>" + place2 + "</button>";
        let display3 = "<button onClick = dispThree("+date+")>" + date + "</button>";
        let display4 = "<button onClick = dispFour("+airline+")>" + airline + "</button>";
        departDiv.innerHTML += display1;
        arriveDiv.innerHTML += display2;
        dateDiv.innerHTML += display3;
        airlineDiv.innerHTMl += display4;
    }

    
    


}