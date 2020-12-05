module.exports = (rating) => {
    let derivedRating = rating;
    if(rating === null) {
        derivedRating = 'unrated';
    } else if(rating.toLowerCase().includes("sov")) {
        derivedRating = 'SOV';
    } else if(rating.toLowerCase().includes("a1+")) {
        derivedRating = "A1+";
    } else if(rating.toLowerCase().includes("aaa")) {
        derivedRating = "AAA";
    }
    return derivedRating;
}