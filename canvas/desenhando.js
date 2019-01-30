const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
var peca = "M20 20 "
/* let p = new Path2D('M10 10 h 80 v 80 h -80 z '); */
// var p = new Path2D(peca)

// "v 100 h 50 v -100 h 50 v 20 v 60"
function canv(x,y) {
    peca = peca + " " + x + " " + y 
    return peca
}

canv('v 100', 'h 50')


console.log(peca)

var p = new Path2D(peca)

ctx.stroke(p)