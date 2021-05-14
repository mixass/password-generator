var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var selectnumbers = false
var selectsymbols = false
function makestring(length) {
    var result = [];
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
}

function selectednumbers() {
    var selectnumber = document.getElementById("selectnumber").checked;
    if (selectnumber === true) {
        selectnumbers = true
    }
    if (selectnumber === false) {
        selectnumbers = false
    }
}

function selectedsymbols() {
    var selectsymbol = document.getElementById("selectsymbol").checked;
    if (selectsymbol === true) {
        selectsymbols = true
    }
    if (selectsymbol === false) {
        selectsymbols = false
    }
}


function mixas() {
    var number = document.getElementById("numbers").value;
    if (number === '' ) {
        $.iaoAlert({
            msg: 'You must write number!',
            autoHide: true,
            alertTime: "7000",
            type: "error",
        })
    } else if (number <= 0) {
        $.iaoAlert({
            msg: 'You must write bigger than 0!',
            autoHide: true,
            alertTime: "7000",
            type: "error",
        })
    } else if (number > 100) {
        $.iaoAlert({
            msg: 'You must write less than 100!',
            autoHide: true,
            alertTime: "7000",
            type: "error",
        })
    } 
    else {
        selectedtypes(number);
    }
}

function selectedtypes(number) {
    if (selectnumbers === true && selectsymbols === true) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890&/()=?_-*}][{$#£><^!';
        alert(makestring(number));
    } else if (selectsymbols === true) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&/()=?_-*}][{$#£><^!';
        alert(makestring(number));

    } else if (selectnumbers === true){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        alert(makestring(number));
    } else {
        characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        alert(makestring(number));
    }
}