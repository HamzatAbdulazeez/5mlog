export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('lynchpin'));

    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        return {};
    }
}