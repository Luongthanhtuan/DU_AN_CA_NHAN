//VARIBALE
/**
 * var
 * console
 *  VD :
    var fullName = 'Luong Thanh Tuan';
    var weight = 50;
    var joke = 'HAHAHAHAHHAHAHAHAHAHAHAH BẠN ĐÃ BỊ LỪA :)))';
    alert('Đây là thông tin về người dùng có tên');
    alert(fullName);
    alert('Cân nặng : ');
    alert(weight);
 */

// Built-in
/**
 * alert : Declare outside the windows  /dɪˈkleə(r)/ 
 * console : Declare ínide the windows  /dɪˈkleə(r)/ 
    + console.log : use to debug
    + console.warn : warns users that
    + console.error : user error
 *letTimeout : After that time the code will run only 1 time and have function
 *letIterval : After that time the code will run continuous /kənˈtɪnjuəs/
 */

 // OPERATOR /ˈɒpəreɪtə(r)/
 /**
  * Toan Tu So Hoc : + - * /
  * Toan Tu Gan : 
    +) ++
    vd : var c=5;
            console.log(c++); => c = 5 do c++ thi se in ra truoc khi cong
            console.log(c); => c = 6 do c da duoc cong o line 32 before
         var d=1;
            console.log(++c); => c = 6 do c++ thi cong truoc va in ra 
            console.log(c); => c = 6 do c da duoc cong before
    +) -- same ++
  */
    
// String Operator ( Toán Tử Nối Chuỗi)
/**
 * Để nối được chuỗi thì 2 vế phải khác nhau : số # chữ v.v...
   +) VD : 
      var firstName = 'Thanh';
      var lastName = 'Tuan';
      console.log(firstName + LastName); = > ThanhTuan
         OR
      var name = 'Thanh';
        name+=' Tuan';
        console.log(name); => Thanh Tuan 
 */

// Comparison Operator ( Toán Tử So Sánh )
/**
 * VD :
 * var a = 0 ;
var b = 0 ;
var c = a == b;
if(c == true){
   console.log('yes');
}
else{
   console.log('no');
}
 */

//Logical Operator
/**
 * || => Chi can 1 trong 2 True => True
 * && => chi can 1 thang False => False
 * ! => Phu Dinh ( True = False or Nguoc Lai )

- || :
   +) Khi convert vs IF will run left->right and pick the first # Falsy
   vd : var test = "a" || "b" || "c",
         console.log(test) ==> a
   vd : var test = "a" || "b" || "c",
         if(test) {
            console.log("Truthy");
         } else {
            console.log("Falsy");
         }
            ========> Truythy because a # six Falsy
   vd : var test = "a" || underfined || "c", ===> a
         if(test) {
            console.log("Truthy");
         } else {
            console.log("Falsy");
         }
            ========> Truthy because a # six Falsy

- && :
   +) Khi convert vs IF will run left->right and IF(run->six Falsy =>Return) ELSE(run->last)
   vd : var test = "a" && "b" && "c",
         console.log(test) ==> c
   vd : var test = "a" && "b" && "c",
         if(test) {
            console.log("Truthy");
         } else {
            console.log("Falsy");
         }
            ========> Truythy because C # six Falsy
    vd : var test = 'a' && underfined && "c", ===> underfined
         if(test) {
            console.log("Truthy");
         } else {
            console.log("Falsy");
         }
            ========> Falsy because underfined == six Falsy 
   VD : 
   //  var test = 0 || 'b' || 'c';
   //  console.log(test);
   // //  if(test) {
   // //    console.log('ok');
   // //  } else {
   // //    console.log('no');
   // //  }    
 */

//Data Type ( Kieu Du Lieu )
/**
      1. Primitive Data ( Khong the fixed cac o nho )

      - Number (So)
      vd : var i = 1;

      -String (Chuoi)
      vd : var Poem = 'Anh Yeu Em Rat Nhieu';

      -Bollean (True/False)
      vd : line (59)

      -Underfine (Khong Co Gtri)
      vd : var name;

      -Null (Rong)
      vd : var age = null;

      -Symbol
      vd : const sym1 = Symbol('fool');
      vd : const sym2 = Symbol('fool');
      vd : const sym3 = Symbol('fool');
         console.log(sym1) =>Symbol(fool)
         console.log(sym1 === sym2) => flase

      2.Complex Data ( Du lieu phuc tap)
      
      - function
      vd : var myFunction = function(){
         console.log('I love You');
      }
         myFunction(); => I love You

      -Object and Array
      vd : var myObject = {
         key : value;
         ............
      }
         console.('myObject' , myObject); => Key : value

      vd : var myArray = [
         'Javascript',
         'PHP',
         'Ruby',
      ];
         console.log(myArray);

      -typeof ( Check Data Type ) => Is the String
      vd : var a = 53;
            console.log(typeof a) =>number
*/

// Comparison Operator Level 2
/**
 * === => Giong nhau tuyet doi
   vd : var a = 1 ;
        var b = 1 ;
        console.log(a==b); => true
        IF
        var a = '1';
        var b = 1;
        console.log(a==b); => true because '==' quan tam den value thoi => 1==1\
        ELSE
        var a = '1';
        var b = 1;
        console.log(a===b) = >flase because '===' quan tam Data Type and value => string # number
   
   * !== => Khac nhau tuyet doi
       var a = 1 ;
        var b = 1 ;
        console.log(a!=b); => false
        IF
        var a = '1';
        var b = 1;
        console.log(a!=b); => flase because '!=' quan tam den value thoi => 1==1
        ELSE
        var a = '1';
        var b = 1;
        console.log(a!==b) => true because '!==' quan tam Data Type and value => string #== number
 */

// Truthy and Falsy
/**
* Moi value khi convert boolen , IF True => Truthy anf False => Falsy
   +) ! => Phu Dinh
   +) !! => Phu Dinh cua Phu Dinh => Khang Dinh
   TRUTHY
   VD : console.log(Boolen(['tuan'])); => Truthy
        console.log(Boolen(1)); => Truthy
        console.log(Boolen({name : 'Tuan'})); => Truthy
        console.log(Boolen(!!'Hello')); => Truthy 

   FALSY
   - Have Six FALSY :
   +) Nan
   +) null
   +) underfine
   +) '' or ""
   +) 0
   +) false
   => Outside six FALSY thi con lai la TRUTHY ke ca Data Type (NULL)
   VD : console.log('0')
        var myArray = []; => TRUTHY
        if(!myArray) { => FLASY => If dont to run

        }

        
 */
   


