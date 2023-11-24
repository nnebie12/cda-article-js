export const Date_now = {
    builder(){
        console.log("Hello c'est moi")
    },
    dates: new Date().getFullYear(),
    el: document.querySelector("time")
}

