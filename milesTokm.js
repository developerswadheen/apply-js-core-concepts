function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}

const roadLength = 12;
const roadLengthKm = milesToKilometer(roadLength);
console.log(roadLengthKm);