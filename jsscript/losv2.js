var players =["MARIUSZ.N",
              "MAREK.M",
              "SŁAWEK.M",
              "STASIU.M",
              "ARTUR.M",
              "MAREK.O",
              "ADAM.C",
              "RYSIU.N",
              "JUREK.Ł",
              "ZBYSZEK.A",
              "HUBERT.K",
              "KRZYSZTOF.W",
              "JACEK.D",
              "RYSIU.CH",
              "HUBERT.Z",
              "GENIU.Z",
              "KUBA.C",
              "ROBERT.G",
              "KAROL",
              "ANDRZEJ.Z"
            ];
            var a = ["Mango","Orange","Banana","Apple","Grapes","Berry","Peach"]
            var res = a.sort(function() {
              return 0.5 - Math.random();
            });
            console.log(res.slice(a,7))



players.sort();
var a = 0;
for (var i = 0; i < players.length; i++) {
     checkBoxDisplay.innerHTML+='<input id="ch'+a+'" type="checkbox" class="checks1" name="playername" value="'+players[i]+'">'+'<label for="ch'+a+'">'+players[i]+'</label>'+"<br>";
     a++;
}


var firstplayerpick = [];
var secplayerpick = [];
//var checks1 = document.getElementsByClassName('checks1');
//var checks2 = document.getElementsByClassName('checks2');

function getCheckedValues(){
    var checkboxes = document.getElementsByName("playername");
    for(var i = 0; i < checkboxes.length; i++)
    {
        if(checkboxes[i].checked)
            firstplayerpick.push(checkboxes[i].value)

    }


}

button1.onclick = function(){
  console.log(firstplayerpick);

  getCheckedValues();
  if(firstplayerpick.length==0){
    alert("Wybierz zawodników");
  }else{

    const valuesToRemove = firstplayerpick;
    const filteredItems = players.filter(item => !valuesToRemove.includes(item));

    console.log(filteredItems);

    checkBoxDisplay.style.display="none";
    button1.style.display="none";
    button2.style.display="block";
    result1.style.display="block";

    for (var i = 0; i < filteredItems.length; i++) {
        result1.innerHTML+='<input id="ch'+a+'" type="checkbox" class="checks2" name="playername2" value="'+filteredItems[i]+'">'+'<label for="ch'+a+'">'+filteredItems[i]+'</label>'+"<br>";
        a++;
    }
  }
}

function getCheckedValues2(){
    var checkboxes = document.getElementsByName("playername2");
    for(var i = 0; i < checkboxes.length; i++)
    {
        if(checkboxes[i].checked)
            secplayerpick.push(checkboxes[i].value)
    }


}

button2.onclick = function(){
  getCheckedValues2();
  if(secplayerpick.length<firstplayerpick.length){
    alert("Wybrano za mało zawodników");
  }else{
    /*
    var firstrandom = firstplayerpick.sort(function() {
      return 0.5 - Math.random();
    });
    var draw1 = firstrandom.slice(firstplayerpick,firstplayerpick.length);

    var secondrandom = secplayerpick.sort(function() {
      return 0.5 - Math.random();
    });
    console.log(secondrandom);
    //var draw2 = secondrandom.slice(secplayerpick,secplayerpick.length);

    console.log(draw1);
    console.log(draw2);
    //button2.style.display="none";
    cntvis.style.display="none";

    reloadbutton.style.display="block";


    var table = document.getElementById("myTable");

  //function tableDisplay(){

  for (var i = 0; i < draw2.length; i++) {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = draw1[i];
    cell2.innerHTML = draw2[i];

  }*/


//}
cntvis.style.display="none";
function* shuffle(array1) {
    var i = array1.length;
    while (i--) {
        yield array1.splice(Math.floor(Math.random() * (i+1)), 1)[0];
    }
}
var random1 = shuffle(firstplayerpick);
var random2 = shuffle(secplayerpick);
var table = document.getElementById("myTable");
var sum = firstplayerpick.length+secplayerpick.length;

for (var i = 0; i < sum/2; i++) {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  if(firstplayerpick.length==0){
    cell1.innerHTML = random2.next().value;
    cell2.innerHTML = random2.next().value;
  }else{

    cell1.innerHTML = random1.next().value;
    cell2.innerHTML = random2.next().value;
  }

}








  }
}
