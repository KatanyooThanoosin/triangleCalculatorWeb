let result = document.getElementById('result')
let EnterButton = document.getElementById('Enter');
let error = document.getElementById('error')
let side1 = document.getElementById('side1')
let side2 = document.getElementById('side2')
let side3 = document.getElementById('side3')

EnterButton.addEventListener('click',()=>{
    if(side1.value==""){
        error.innerText = "Please enter side 1."
    }
    else if(side2.value==""){
        error.innerText = "Please enter side 2."
    }
    else if(side3.value==""){
        error.innerText = "Please enter side 3."
    }
    else if(isNaN(parseInt(side1.value))||isNaN(parseInt(side2.value))||isNaN(parseInt(side3.value))){
        error.innerText = "Please enter positive integer."
    }
    else{
        let s1 = parseInt(side1.value)
        let s2 = parseInt(side2.value)
        let s3 = parseInt(side3.value)
        if((s1<1 || s1>100)||(s2<1 || s2>100)||(s3<1 || s3>100)){
            error.innerText = "Please enter a number 1 - 100."
        }
        else{
            if(s1>s2){
                if(s1>s3){
                    let t = s1
                    s1 = s3
                    s3 = t
                }
            }
            else if(s2>s3){
                let t = s2
                s2 = s3
                s3 = t
            }
            if(s1>s2){
                let t = s1
                s1 = s2
                s2 = t
            }

            console.log(s1,s2,s3)

            if(s1===s2 && s2===s3 && s1===s3){
                result.innerText = "Equilateral triangle"
                error.innerText = ""
            }
            else if(s1===s2 || s2===s3 || s1===s3){
                result.innerText = "Isosceles triangle"
                error.innerText = ""
            }
            else if(s1**2+s2**2===s3**2){
                result.innerText = "Right triangle"
                error.innerText = ""
            }
            else{
                result.innerText = "Scalene triangle"
                error.innerText = ""
            }
        }
    }
})