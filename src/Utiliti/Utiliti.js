function setToDb(time) {
    localStorage.setItem('time', time)
}
function getFromDb() {
    return localStorage.getItem('time',)
}
export { setToDb, getFromDb }   