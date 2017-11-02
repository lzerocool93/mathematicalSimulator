window.onload = function(){
    var btn = document.querySelector('.btn'),
        block = document.querySelector('.main'),
        a = document.querySelector('.a'),
        b = document.querySelector('.b'),
        op = document.querySelector('.op'),
        res = document.querySelector('.res'),
        seeResult = document.querySelector('.result'),
        checkBtn = document.querySelector('.check'),
        value = 0,
        numOp = 0,
        mark  = 0,
        count =0;
       
        function task(){
            a.innerHTML  = randomInt(2,11);
            b.innerHTML = randomInt(2,11);
            numOp = randomInt(1,5);
            if(numOp == 1){
                op.innerHTML = '+';
                value = +a.innerHTML  +  +b.innerHTML;
            }else if(numOp == 2){
                op.innerHTML = '-';
                value = +a.innerHTML  -  +b.innerHTML;
            }else if(numOp == 3){
                op.innerHTML = '*';
                value = +a.innerHTML  *  +b.innerHTML;
            }else{
                op.innerHTML = '/';
                value = (+a.innerHTML  /  +b.innerHTML);  
            } 
        };
        
        function randomInt(min , max){
            return Math.floor(Math.random() * (max - min)) + min;
        }
        
        function check(){
                if(value != res.value){
                    alert('Error.Correct answer ' + value);
                    count++;
                }else{
                    alert('Ok');
                    mark++;
                    count++;
                }
                task();
                res.value = '';
            }
               
        task();
        checkBtn.onclick = check;
        seeResult.onclick = function(){
            alert('Your correct answer is - ' + mark +  ' from ' +count+ ' tasks');
        }
}