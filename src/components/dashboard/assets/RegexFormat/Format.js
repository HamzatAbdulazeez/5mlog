export const formatPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const lastTwo = (string) => {
    let n = string.split(" ");
    return n[n.length -2] + " " + n[n.length - 1];
}