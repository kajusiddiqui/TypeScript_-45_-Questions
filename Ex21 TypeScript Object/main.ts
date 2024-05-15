//Write a program that creates Objects containing these items. 

//creating  the object constructor function
interface MobilePhone  {
    modelName: string ;
    make: string ;
    ManufactureDate : number;
}

    let MobilePhone = {
        modelName : "Honor 8C",
        Make : "Honor",
        ManufactureDate : 2018,
};
console.log(MobilePhone);

interface PersonalInfo {
    name : string;
    age : number;
    phoneNumber : string;
}
let PersonalInfo = {
    name : "Kazim Siddiqui" ,
    age : 39,
    phoneNumber : "+923028254410",
}

console.log(PersonalInfo);

