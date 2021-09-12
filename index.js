let body = document.querySelector('#body')

let box = document.querySelector('#box')

console.log(box.style)

body.addEventListener('click', function(e) {
    let Xleft = (e.x.toString()-25)+"px";
    let Ytop = (e.y.toString()-25)+"px"
    
    box.addEventListener('click', function(e) {
        let Xleft = (e.x.toString()-25)+"px";
        let Ytop = (e.y.toString()-25)+"px"
        
        box.style.top = Ytop;
        box.style.left = Xleft;
        console.log()
    })

    box.style.top = Ytop;
    box.style.left = Xleft;
    console.log()
})