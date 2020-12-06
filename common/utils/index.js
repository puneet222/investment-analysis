const roundOff = (number, decimals) => {
    return Number((Number(number).toFixed(decimals)));
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const SLEEP_TIME = 10;

const asyncForEach = async (array, callback) => {
    for(let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

module.exports = {
    roundOff,
    sleep,
    SLEEP_TIME,
    asyncForEach
}