/*  Note : Falsy Values
          1 -> false
          2 -> 0
          3 -> -ve values
          4 -> BigInt 0n
          5 -> "" (Empty String)
          6 -> null
          7 -> undefined
          8 -> Nan

          Truthy Values
          1 -> "0"
          2 -> "false"
          3 -> " "
          4 -> []
          5 -> {} (Empty Object)
          6 -> null
          7 -> function () {}
        
          To check array is empty we'll always use if statement
          ---> if (nameOfArray === 0){
                  console.log ("Array is empty")
                }

          To check Object is empty we use :
          const emptyObj = {}
          ---> if (Object.keys(emptyObj).length === 0){
                  console.log("Obj is empty")
                }

    ---> Nullish Coalescing Operator (??) :   null undefined
         let val1;
         val1 = null ?? 10
         o/p -- 10;
*/
