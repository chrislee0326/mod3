//alert("hellow world");

var resultbtn=document.getElementById("btn1");

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

function calculate1() {
  b=b*(ivs(a,m))
  a=1
  b=elimination(b,m)
}

resultbtn.addEventListener("click", function(){
    //var a = document.getElementById("anum");
    //a=this.innerText
    let a = document.getElementById("txt1").value
    let b = document.getElementById("txt2").value
    let m = document.getElementById("txt3").value
    a = Number(a)
    b = Number(b)
    m = Number(m)

    function calculate3(a,b,m){
      a = elimination (a,m)
      b = elimination (b,m)
      function calculate1() {
        b=b*(ivs(a,m))
        //a=1
        b=elimination(b,m)
      }

      if (b%gcd(a,m)!=0){
        alert("합동식의 해는 존재하지 않습니다.")
      }
      else if(a%m==0){
        if(b==0){
          alert("모든 정수x에 대하여 성립합니다.")
        }else {
          alert("합동식의 해는 존재하지 않습니다.")
        }
      }
      else if (b==0){
        alert("x는"+a+"와"+m+"의  최소 공배수를"+a+"로 나눈 수의 배수")
      }
      else if (gcd(a,b)==1){
        calculate1()
      }else {
        if (gcd(a,m)==1){
          var g = gcd(a,b)
          a=a/g
          b=b/g
          calculate1()
        }else {
          var g = gcd(gcd(a,b),m)
          a=a/g
          b=b/g
          m=m/g
          calculate1()
        }
      }
      let r = b
      let d = m
      return [r, d];
    }

    if (String(Number(a))=="NaN"||String(Number(b))=="NaN"||String(Number(m))=="NaN") {
      alert("모든 입력란에 숫자(정수)만 입력해 주세요")
    }else if (a==0||m==0) {
      alert("첫번째 칸과 마지막 칸에는 0아닌 정수를 입력해주세요.")
    }else {
      let mod
      mod = calculate3(a,b,m)
      b=mod[0]
      m=mod[1]
      let element=document.getElementById("content")
      element.innerText='x≡'+b+'(mod'+m+')'
    }
    
});
//arithmethic inverse
//https://madrabbit7.tistory.com/99

