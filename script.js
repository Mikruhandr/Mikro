//изучаю циклы
var str = '#';
while(str.length<8){
console.log(str);
str = str + '#';
}
// 2
for(var str = 5; str>=0; str--)
console.log(str);
// FuzzBuzz - не работает
var num = 1;
for(num < 50; num++){if(num % 3 == 0){num = 'Fizz'}
else if(num % 5 == 0){num = 'Buzz'}
else(num !=='Fizz'){}};
console.log(num); 
// рабочая функция из книги
var landscape = function() {
    var result = "";
    var flat = function(size) {
    for (var count = 0; count < size; count++)
    result += "_";
    };
    var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
    result += "'";
    result += "\\";
    };
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
    };
    console.log(landscape());
    //тоже работает - !!! для понимания замыкания(closure) и вызова функции
    function multiplier(factor) {
        return function(number) {
        return number * factor;
        };
        }
        var twice = multiplier(2);
        console.log(twice(5));
    //

