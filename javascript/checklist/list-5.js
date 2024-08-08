/*
    아직도 콜백함수가 무엇인지 모른다면 콜백함수 이해에 어떠한 것이 어려운 점이 있는지 확인해보세요.
    아래의 함수 중 콜백함수를 사용한 것과 콜백함수가 아닌 것을 구분해보세요.

        1-1)
                function f1(){
                }

                function 실행문(){
                f1()
                }
            실행문()
    ---
        1-2)
                function f1(e){
                    console.log(e.currentTarget)
                }

                $dom.addEventListner(f1)
    ---
        1-3)
                array.map((el,index) => el+1)
    ---
    1-4)
            function f1(number){
                }

                function 실행문(func){
                    let a = 5;
                    func(a)
                }
                실행문(f1)
*/

/*
    콜백함수를 사용한 것 :

    콜백함수가 아닌 것 :
*/