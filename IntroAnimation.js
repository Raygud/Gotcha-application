let body = document.getElementById("BodyTrans")

let SplitT = document.getElementById("TopSplit")
let SplitB = document.getElementById("BottomSplit")
let IntroL = document.getElementById("IntroLine")
let H1 = document.getElementById("H1er")

let Dropper = document.getElementById("DropDown")
let Dropped = document.getElementById("DropDownDown")
let DropLineUp = document.getElementById("DropLineUp")
let DropLineDown = document.getElementById("DropLineDown")
let dropped = document.getElementById("DropDownDown")
let MenuDrop = document.getElementById("DropDownMenu")
let clicked = 1

let CaseLine = document.getElementById("CaseLine")
let BlackBox = document.getElementById("BlackBox")


function IntroAnimation(){

    setTimeout(function(){IntroL.classList.add("IntroLineAnimation")}, 400);
    setTimeout(function(){SplitT.classList.add("SplitAnimation")}, 3500);
    setTimeout(function(){SplitB.classList.add("SplitAnimation")}, 3500);
    setTimeout(function(){H1.classList.add("H1MoveAnimation")}, 3500);
    setTimeout(function(){IntroL.style.display = "none"}, 3500);
    setTimeout(function(){body.style.backgroundColor = "white"}, 3600);
    setTimeout(function(){document.getElementById("IntroContent").style.height = "10vw"}, 7000);
    setTimeout(function(){document.getElementById("BlackBox").style.width = "40vw"}, 5000);
    setTimeout(function(){document.getElementById("DropDown").style.display = "block"}, 5000);
    

}

function Dropdown(){


    switch(clicked) {
        case 1:
            clicked = 2
            MenuDrop.classList.remove("DropDownMenuUp")
            DropLineUp.classList.remove("DropLineFromXUp")
            DropLineDown.classList.remove("DropLineFromXDown")
            
            DropLineUp.classList.add("DropLineTooXUp")
            DropLineDown.classList.add("DropLineTooXDown")
            
            Dropper.style.boxShadow = "0vw 0vw 0vw rgba(255, 0, 0, 0)"

            MenuDrop.classList.add("DropDownMenuDown")

          break;
        case 2:
            clicked = 1
            MenuDrop.classList.remove("DropDownMenuDown")
            DropLineUp.classList.remove("DropLineTooXUp")
            DropLineDown.classList.remove("DropLineTooXDown")

            DropLineUp.classList.add("DropLineFromXUp")
            DropLineDown.classList.add("DropLineFromXDown")
            Dropper.style.boxShadow = "-0.3vw 0.1vw 0.5vw rgba(0, 0, 0, 0.103)"

            MenuDrop.classList.add("DropDownMenuUp")
          break;
      }

}



