import axios from "axios";
import {getData} from './Fetch'
export default class SearchTerm {
    constructor (query){
        this.query = query;
    }
    async fetchData (){
        try {
            const apikey = `10cb8379af992120842d026d1a9e5dfd`;
            const apiID = `6a22847e`;
            let response = await axios(
                `https://api.edamam.com/search?q=${this.query}&app_id=${apiID}&app_key=${apikey}`);
            const savedResponse = getData(response);
            return savedResponse;
            
        } catch (error) {
            console.log(error)
            throw error
            
        }
}
}

