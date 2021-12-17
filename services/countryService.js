import axios from "axios";



export const getCountryData = async () => {
    try{
        // https://restcountries.com/v2/all?fields=name,capital,population,flag,alpha3Code
        const response = await axios.get("https://restcountries.com/v2/all?fields=name,capital,population,flags,alpha3Code,region,demonym,nativeName,callingCodes")
        // const response = await axios.get("https://restcountries.com/v2/all?fields=name,capital,population,flags,alpha3Code,region,demonym,timezones,nativeName,callingCodes")
        const data = response.data;
        // const formattedResponse = formattedCountryData(data);
        const formattedResponse = data;
        return formattedResponse;
    }
    catch(error)
    {
        console.log(error.message)
    }
}