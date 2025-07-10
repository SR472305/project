import { Chance } from "chance"





const chance = new Chance();


export const FakeUserData = ()=>{
    let user = {
        name : chance.name(),
        email : chance.email(),
        city : chance.city(),
    }

    return user;
}