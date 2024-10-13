
flashscreen
setTimeout(function () {
    let flashscreen = document.getElementById('flashscreen');
    let mainbody = document.getElementById('mainbody');

    flashscreen.style.display = "none";
    mainbody.style.display = "block";

}, 3000);

let more = document.getElementById('start');
let num = 0;
function press() {

    let btn = document.getElementById('btn');
    let text = document.getElementById('ag');
    btn.value = "OK";
    btn.setAttribute("style", "color:white");
    text.setAttribute("style", "color:white");
    num = 1;
}
more.addEventListener('click', () => {
    if (num == 1) {
        let mainbody = document.getElementById('mainbody').style.display = "none";
        let page3 = document.getElementById('page3').style.display = "block";
    }
    else
        alert('Please accept the terms and conditions');

});
function fullimg() {
    let w1div = document.getElementById('w1div').style.display = "none";
    let fullimg = document.getElementById('fullimg').style.display = "block";

}

function backtopage3() {
    let w1div = document.getElementById('w1div').style.display = "block";
    let fullimg = document.getElementById('fullimg').style.display = "none";

}
function btn_buynow() {
    let space_for_buy = document.getElementById('info1').style.display = "none";
    let for_buy_details = document.getElementById('for_buy_details').style.display = "block";
    let paythrough = document.getElementById('paythrough').style.display = "block";
    let succesfully_purchased = document.getElementById('succesfully_purchased').style.display = "none";
    let btn = document.getElementById('btnio').style.display = "block";

}
function completed() {
    let paythrough = document.getElementById('paythrough').style.display = "none";
    let succesfully_purchased = document.getElementById('succesfully_purchased').style.display = "block";
}
function backto_info1() {
    let space_for_buy = document.getElementById('info1').style.display = "block";
    let for_buy_details = document.getElementById('for_buy_details').style.display = "none";
    let btn = document.getElementById('btnio').style.display = "none";

}
function add_to_cart(){
     let add_to_cart =document.getElementById('add_to_cart');
     add_to_cart.value="ADDED TO CART"
     add_to_cart.setAttribute("style"," background:orange;");
}