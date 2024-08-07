let eklebuton=document.getElementById('ekle')
let  javakismi=document.getElementById('javakismi')
let inputt=document.getElementById('inputt')
let temizle=document.getElementById('temizle')

eklebuton.addEventListener('click',function(){
    let paragraf=document.createElement('p')
    paragraf.classList.add('paragraf-styling')
    javakismi.appendChild(paragraf)
    paragraf.innerHTML=inputt.value
    inputt.value=" "


   

    paragraf.addEventListener('click',function(){
        paragraf.style.textDecoration='line-through'
    })
    paragraf.addEventListener('dblclick',function(){
          javakismi.removeChild(paragraf)
    })
    temizle.addEventListener('click',function(){
        paragraf.style.display='none'
    })

})