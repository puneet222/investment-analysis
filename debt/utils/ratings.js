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
    } else if(rating.toLowerCase().includes("aa-")) {
        derivedRating = "AA-";
    } else if(rating.toLowerCase().includes("aa+")) {
        derivedRating = "AA+";
    } else if(rating.toLowerCase().includes("aa")) {
        derivedRating = "AA";
    } else if(rating.toLowerCase().includes("a+")) {
        derivedRating = "A+";
    } else if(rating.toLowerCase().includes("a-")) {
        derivedRating = "A-";
    } else if(rating.toLowerCase().includes("bbb+")) {
        derivedRating = "BBB+";
    } else if(rating.toLowerCase().includes("bbb")) {
        derivedRating = "BBB";
    } else if(rating.toLowerCase().includes("bb")) {
        derivedRating = "BB";
    } else if(rating.toLowerCase().includes("bwr a") || 
            rating.toLowerCase().includes("fitch a") || 
            rating.toLowerCase().includes("icra a") ||
            rating.toLowerCase().includes("crisil - a") ||
            rating.toLowerCase().includes("crisil-a") ||
            rating.toLowerCase().includes("care a")) {
        derivedRating = "A";
    } else if(rating.toLowerCase().includes("crisil c")) {
        derivedRating = "C";
    } else if(rating.toLowerCase().includes("d")) {
        derivedRating = "D";
    }
    return derivedRating;
}