//array of friends
let friends = ["John","Sally","Disko","Crispy","Jim"]
var count = 99;



    for (let i = 0; i < friends.length; i++){
        for (let code = 99; code > 0; code--){
            if(code > 2){ 
                console.log(code + " lines of code in the file" + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (code - 1) + " lines of code in the file");

            }else if (code === 2) {
                console.log(code + " lines of code in the file" + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (code - 1) + " lines of code in the file");
            }else {
                console.log(code + " line of code in the file" + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
            }
        }
        
    }

