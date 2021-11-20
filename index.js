function gamefunc(){
    var obstaculo = document.querySelector('.teste')
    var obstaculo1 = document.querySelector('.teste1')
    var obstaculo2 = document.querySelector('.teste2')
    var obstaculo3 = document.querySelector('.teste3')
    var obstaculo4 = document.querySelector('.teste4')
    var naruto = document.getElementById('ps1')
    var ps2 = document.querySelector('#ps2')
    var jump = document.querySelector('#jump')
    if (obstaculo.style.left === naruto.style.left && obstaculo.style.top == naruto.style.top ){
        gamerover()
    }else if (obstaculo1.style.left === naruto.style.left && obstaculo1.style.top == naruto.style.top ){
        gamerover()
    }else if (obstaculo2.style.left === naruto.style.left && obstaculo2.style.top == naruto.style.top ){
        gamerover()
    }else if (obstaculo3.style.left === naruto.style.left && obstaculo3.style.top == naruto.style.top ){
        gamerover()
    }else if (obstaculo4.style.left === naruto.style.left && obstaculo4.style.top == naruto.style.top ){
        gamerover()
    }
}

function press(){
    jump()
}

function limpar(){
    clear()
}

function clear(){
    var ps1 = document.querySelector('#ps1')
    var ps2 = document.querySelector('#ps2')
    var jump = document.querySelector('#jump')
    var left = '40%'
    var top = '62%'
    ps1.style.top = top
    ps1.style.left = left
    ps1.style.display = ''

    ps2.style.top = top
    ps2.style.left = left
    ps2.style.display = ''

    jump.style.top = top
    jump.style.left = left
    jump.style.animation = ''
}

function creatObstac(){
    let container = document.querySelector('#container')
    let obst = document.createElement('div')
    let obst1 = document.createElement('div')
    let obst2 = document.createElement('div')
    let obst3 = document.createElement('div')
    let obst4 = document.createElement('div')
    obst.className = 'teste'
    obst1.className = 'teste1'
    obst2.className = 'teste2'
    obst3.className = 'teste3'
    obst4.className = 'teste4'

    container.appendChild(obst)
    container.appendChild(obst1)
    container.appendChild(obst2)
    container.appendChild(obst3)
    container.appendChild(obst4)
    PositioObstac()
    obsMoove()
    setInterval(gamefunc,20)
}
function jump(){
    var ps1 = document.querySelector('#ps1')
    var ps2 = document.querySelector('#ps2')
    var ps3 = document.querySelector('#jump')
    var jumper = '40%'
    ps1.style.top = jumper
    ps1.style.left = '40%'
    ps1.style.display = 'none'

    ps2.style.top = jumper
    ps2.style.left = '40%'
    ps2.style.display = 'none'
    

    ps3.style.top = jumper
    ps3.style.left = '40%'
    ps3.style.animation = 'none'
    
}

function PositioObstac(){
    var obstaculo = document.querySelector('.teste')
    var obstaculo1 = document.querySelector('.teste1')
    var obstaculo2 = document.querySelector('.teste2')
    var obstaculo3 = document.querySelector('.teste3')
    var obstaculo4 = document.querySelector('.teste4')
    obstaculo.style.top = '62%'
    obstaculo.style.left = '150%'

    obstaculo1.style.top = '62%'
    obstaculo1.style.left = '150%'

    obstaculo2.style.top = '62%'
    obstaculo2.style.left = '150%'

    obstaculo3.style.top = '62%'
    obstaculo3.style.left = '150%'

    obstaculo4.style.top = '62%'
    obstaculo4.style.left = '150%'
} 
function positioNaruto(){
    var naruto = document.getElementById('ps1')
    var ps2 = document.querySelector('#ps2')
    var jump = document.querySelector('#jump')
    var left = '40%'
    var top = '62%'
    ps1.style.top = top
    ps1.style.left = left

    ps2.style.top = top
    ps2.style.left = left

    jump.style.top = top
    jump.style.left = left

}

function obsMoove(){
    var cont = document.querySelector('#container')
    var obstaculo = document.querySelector('.teste')
    var obstaculo1 = document.querySelector('.teste1')
    var obstaculo2 = document.querySelector('.teste2')
    var obstaculo3 = document.querySelector('.teste3')
    var obstaculo4 = document.querySelector('.teste4')
    var left = 150
    var left1 = 150
    var left2 = 150
    var left3 = 150
    var left4 = 150

    setInterval(() => {
        if (left > 0 ){
            left --
            var move = String(left + '%')
            obstaculo.style.left = move
        }
        else{
            left = RestLeft(randomNum(120,170))
        }
    },20)

    setInterval(() =>{
        if(left1 > 0 ){
            left1 --
            var move1 = String(left1 + '%')
            obstaculo1.style.left = move1
        }
        else{
            left1 = RestLeft(randomNum(210,260))
        }
    },20)
    setInterval(()=>{
        if(left2 > 0 ){
            left2 --
            var move2 = String(left2 + '%')
            obstaculo2.style.left = move2
        }
        else{
            left2 = RestLeft(randomNum(310,360))
        }
    },20)
    setInterval(()=>{
        if(left3 > 0 ){
            left3 --
            var move3 = String(left3 + '%')
            obstaculo3.style.left = move3
        }
        else{
            left3 = RestLeft(randomNum(410,460))
        }
    },20)
    setInterval(()=>{
        if(left4 > 0 ){
            left4 --
            var move4 = String(left4 + '%')
            obstaculo4.style.left = move4
        }
        else{
            left4 = RestLeft(randomNum(510,240))
        }
    },20)
}

function gamerover(){
    let title = document.querySelector('#title')
    title.innerHTML = '<h1>Game Over </h1>'
    title.style.opacity = '1'
}

// funções externas 
function RestLeft(left){
    
    return left
}

function randomNum(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}

function log(log){
    console.log(log)
}


positioNaruto()
setTimeout(creatObstac,1000)


