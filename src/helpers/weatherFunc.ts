export const getTimeFromOffset: (timezone_offset: number) => string = (timezone_offset) => {
    const currentTime = (new Date).getTime() + timezone_offset;
    return new Date(currentTime).toLocaleString('en-US', { weekday: 'long', hour: 'numeric', hour12: true });
}

const listOfDay = ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun']
export const getNextFromOffset: (timezone_offset: number) => string[] = (timezone_offset) => {
    const currentTime = (new Date).getTime() + timezone_offset;
    const listOfNextDay: string[] = [];
    for (let i = 0; i < 8; i++) {
        let index = (new Date(currentTime).getDay() + i) % 7;
        listOfNextDay.push(listOfDay[index]);
    }
    return listOfNextDay

}

const compassSector: string[] = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];

export const windDegConvert: (wind_deg: number) => string = (wind_deg) => {
    let Index: number = wind_deg % 360;
    Index = Math.round(Index / 22.5);
    return compassSector[Index]
}

const airQualityList: string[] = ["Good", "Fair", "Moderate", "Poor", "Very Poor"]

export const convertAirQuality: (aqi: number) => string = (aqi) => {
    return airQualityList[aqi];
}

export const getImageLink: (ico: string, typeIco?: string) => string = (ico, typeIco) => {
    return `http://openweathermap.org/img/wn/${ico}${typeIco ? typeIco : ''}.png`
    // @2x
}