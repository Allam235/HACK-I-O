 
    
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


}