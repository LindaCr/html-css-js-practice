
class Animal{

    constructor(name, sound, numLegs){
        this.name=name;
        this.sound=sound;
        this.numLegs=numLegs;
    }
    
    
    }
    
    let animals=[
    
    ];
    
    const add=() => {
        let nameCtrl=document.getElementById("name");
        let soundCtrl=document.getElementById("sound");
        let numLegsCtrl=document.getElementById("numLegs")
        let animal= new Animal(nameCtrl.value, soundCtrl.value, numLegsCtrl.value);
        animals.push(animal);
        displayAnimals();
    };
    
    const remove= () => {
        //same as add, but one line to attribute name value
        let name=document.getElementById("name").value;
        let idx=-1;
        for(let i in animals) {
            if (name.toLowerCase()===animals[i].name.toLowerCase()) {
                idx=i;
                break;
            }
        }
        if (idx !=-1){
        animals.splice(idx, 1);
        }
        displayAnimals();
    };
    
    const displayAnimals=() =>{
        let tbody=document.getElementById("tbody");
        tbody.innerHTML="";
        for(let animal of animals){
            let tr= "<tr>";
            tr+=`<td>${animal.name}</td>`;
            tr+=`<td>${animal.sound}</td>`;
            tr+=`<td>${animal.numLegs}</td>`;
            tr+="</tr>";
            tbody.innerHTML +=tr;
        }
    };