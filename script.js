const path = document.getElementById('character');
const abundance = ["Huohuo", "Luocha", "Natasha", "Bailu", "Lynx"];
const abundance2 = ["Lingsha", "Gallagher"];
const destruction = ["Xiyue", "Arlan", "Blade", "Clara", "Hook", "Dan Heng IL", "Jing Liu", "Physical MC"]
const destruction2 = ["Misha","Firefly","Yunli"];
const erudition = ["Herta", "Himeko", "Jing Yuan", "Serval", "Qingque", "Argenti"];
const erudition2 = ["Jade", "Rappa", "The Herta"];
const harmony = ["Asta", "Tingyun", "Bronya", "Hanya", "Ruan Mei", "Yukong"];
const harmony2 =["Sparkle", "Robin","Imaginary MC", "Sunday"];
const hunt = ["Dr. Ratio", "Seele", "Dan Heng", "Sushang", "Topaz", "Topaz and Numby", "Yanqing"]
const hunt2 = ["Boothill", "Moze", "Feixiao", "Imaginary March 7th"];
const nihility = ["Luka", "Kafka", "Sampo", "Pela", "Silver Wolf", "Welt", "Guinaifen"];
const nihility2 = ["Acheron","Black Swan", "Fugue","Jiaoqiu"];
const preservation = ["Gepard", "March 7th", "Fire MC", "Fu Xuan"];
const preservation2 = ["Aventurine"];
const remembrance = ["Ice MC", "Aglaea"]
const personalNeedP = document.getElementById('needed-mats-p');              
const trailblaze_hand = document.getElementById('current-trailblaze-p');
const button = document.getElementById("button");
const message = document.getElementById("message");
let pathMat = "";
let totalNeedP = 0;
let totalNeedB = 0;
let totalNeedG = 0;
let iterations = 0;
let randomGr= 0;
let randomBl = 0;
let randomPu = 0;
let hsrRun = function(event){
    event.preventDefault();
    if(abundance.includes(path.value)){
        pathMat = "Flowers of Eternity";
    }
    if(destruction.includes(path.value)){
        pathMat = "Worldbreaker Blade";
    }
    if(erudition.includes(path.value)){
        pathMat = "Key of Wisdom";
    }
    if(hunt.includes(path.value)){
        pathMat = "Arrow of the Starchaser";
    }
    if(harmony.includes(path.value)){
        pathMat = "Stellaris Symphony";
    }
    if(nihility.includes(path.value)){
        pathMat = "Obsidian of Obsession";
    }
    if(preservation.includes(path.value)){
        pathMat = "Safeguard of Amber";
    }
    if(nihility2.includes(path.value)){
        pathMat = "Heaven Incinerator"
    }
    if(harmony2.includes(path.value)){
        pathMat = "Heavenly Melody"
    }
    if(destruction2.includes(path.value)){
        pathMat = "Moon Madness Fang"
    }
    if(hunt2.includes(path.value)){
        pathMat = "Countertemporal Shot"
    }
    if(abundance2.includes(path.value)){
        pathMat = "Scalding Soup"
    }
    if(erudition2.includes(path.value)){
        pathMat = "Exquisite Colored Draft"
    }
    if(preservation2.includes(path.value)){
        pathMat = "Divine Amber"
    }
    if(remembrance.includes(path.value)){
        pathMat = "Flower of Ālaya"
    }
    hsrCalc();
}
let messageSet = function(iterations){   
    message.textContent = "This would take approximately: " + iterations + " runs to earn " + personalNeedP.value + " of " + pathMat + " for " + path.value + ".";
}
let hsrCalc = function(){  
    let totalNeedP = 0;
    let iterations = 0;
    let randomGr= 0;
    let randomBl = 0;
    let randomPu = 0; 
    while (totalNeedP <= personalNeedP.value){
        randomGr += (Math.floor(Math.random() * 3) + 6);
        randomBl += (Math.floor(Math.random() * 3) + 6);
        randomPu += (Math.floor(Math.random() * 3));
        console.log(randomGr, randomBl, randomPu)
        if (randomGr % 3 == 0){
            randomBl += randomGr / 3;
            randomGr = 0;
            if (randomBl % 3 ==0){
                randomPu += randomBl / 3;
                randomBl = 0;
            }
        }       
        totalNeedP += randomPu;
        iterations += 1;
    }
    messageSet(iterations);
    let trailblaze_use = iterations * 60
    trailblaze_use -= trailblaze_hand.value
    if (trailblaze_use > 0){
        message.textContent += " This would take approximately: " + trailblaze_use + " more Trailblaze power to accomplish.";
        trailblaze_use *= 6
        if (trailblaze_use >= 60){
            let trailblaze_remainder = trailblaze_use % 60
            trailblaze_use -= trailblaze_remainder
            trailblaze_use /= 60
            if (trailblaze_remainder == 0){
                message.textContent += " It will take: " + trailblaze_use + " hours to accrue the amount of trailblaze necessary to run this many Calyx's.";
            }else{
                message.textContent +=  " It will take: " + trailblaze_use + " hours and " + trailblaze_remainder + " minutes to accrue the amount of trailblaze necessary to run this many Calyx's.";
            } 
        }      
    }else{
        message.textContent += "You have enough Trailblaze power to conduct that amount of runs!";
    }
}
button.addEventListener('click', hsrRun);