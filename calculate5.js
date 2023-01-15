function elimination(x, y){
  if (x>=0){
      x=x%y
  }else{
      x=x%y+y
  }
  return(x)
}
function gcd(a,b){
  var r
  var g
  while(true){
    r=a%b
    if(r==0){
      return(b)
      break;
    } 
    a=b
    b=r
  }
}
function lcd(a,b) {
return(a*b/(gcd(a,b)))
}
function ivs(a,b){
  var x
  for (var i = 1; i < b; i++) {
    if ((a*i)%b==1){
      x=i
      break;
    }
  }
  return(x)
}
function calculate1(a,b,m) {
b=b*(ivs(a,m))
a=1
b=elimination(b,m)
return[b,m]
}
function calculate3(a,b,m){
a = elimination (a,m)
b = elimination (b,m)

if (b%gcd(a,m)!=0){
  return["해가 없다",""]
}
else if(a%m==0){
  if(b==0){
    return["모든 정수x에 대하여 성립합니다.",""]
  }else {
    return["해가 없다",""]
  }
}
else if (b==0){
  b=0; m=lcd(a,m)/a
}
else if (gcd(a,b)==1){
  b=calculate1(a,b,m)[0]
  m=calculate1(a,b,m)[1]
}else {
  if (gcd(a,m)==1){
    var g = gcd(a,b)
    a=a/g
    b=b/g
    b=calculate1(a,b,m)[0]
    m=calculate1(a,b,m)[1]
  }else {
    var g = gcd(gcd(a,b),m)
    a=a/g
    b=b/g
    m=m/g
    b=calculate1(a,b,m)[0]
    m=calculate1(a,b,m)[1]
  }
}
let r = b
let d = m
return [r, d];
}
function crt1 (a,m,b,n){
  let p
  p = m*(ivs(m,n))*b+n*(ivs(n,m))*a
  return(p) 
}
function crt (a,m,b,n){
  if (gcd(m,n)!=1) {
    let g = gcd(m,n)
    if (a%g==b%g) {
      for (var i = 1; i < lcd(m,n); i++) {
        if (i%m==a && i%n==b){
          return(elimination(i,lcd(m,n)))
          break;
        }
      }
      return("해가 없다")
    }
    else {
      return ("해가 없다")
    }
  }
  else if (n%m==0) {
    if (elimination(b,m)==a) {
      return (a)
    }
    else {
      return ("해가 없다")
    }
  }
  return(elimination(crt1(a,m,b,n),lcd(m,n)))
}
function result (a,b,m) {
  a = Number(a)
  b = Number(b)
  m = Number(m)

  if (String(Number(a))=="NaN"||String(Number(b))=="NaN"||String(Number(m))=="NaN") {
    alert("모든 입력란에 숫자(정수)만 입력해 주세요")
  }else if (a==0||m==0) {
    alert("첫번째 칸과 마지막 칸에는 0아닌 정수를 입력해주세요.")
  }else {
    let mod
    mod = calculate3(a,b,m)
    b=mod[0]
    m=mod[1]
    return['x≡'+b+'(mod'+m+')', b, m]

  }
}
var resultbtn=document.getElementById("btn1");
resultbtn.addEventListener("click", function(){
    //var a = document.getElementById("anum");
    //a=this.innerText
    let a = document.getElementById("txt1").value
    let b = document.getElementById("txt2").value
    let m = document.getElementById("txt3").value
    let c = document.getElementById("txt4").value
    let d = document.getElementById("txt5").value
    let n = document.getElementById("txt6").value
    let element=document.getElementById("content")
    element.innerText= result(a,b,m)[0]
    let element2=document.getElementById("content2")
    element2.innerText= result(c,d,n)[0]
    let element3=document.getElementById("content3")
    let x = crt(result(a,b,m)[1],result(a,b,m)[2],result(c,d,n)[1],result(c,d,n)[2])
    let y = lcd(result(a,b,m)[2],result(c,d,n)[2])

    element3.innerText= 'x≡'+x+'(mod'+y+')'
});