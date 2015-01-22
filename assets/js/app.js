
  /**
  * Nicolas Zakas JavaScript for Web Developers
  * Chapters for the learn javascript
  * from www.javascriptissexy.com
  */

;(function () {

  'use strict';

  var output = document.getElementById('output');

  function compare(a, b) {
    var output = document.getElementById('output');

    if (a < b) {
      output.innerHTML = 'a is less than b';
    } else if (a > b) {
      output.innerHTML = 'a is greater than b';
    } else {
      output.innerHTML = 'when a is equal to b, it must mean love<br>';
    }
  }

  compare(1, 1);


}());

  var test = true;
  if (test)  console.log(test);// not preferred according to the community

  if (test) { // this is the preferred way
    test = 'passed';
//    console.log(test);
  }

  function t() {
    // funtion test () { var message = 'hello'; console.log(message); return message }
    // doesn't work in chrome at least. Not sure if it's a reserved word or what.
    // Any other name works except test and keywords and reserved words.
    var message = 'hello';
//    console.log(message);
    return message;
  }
  t();

  var msg = 'some string';
//  console.log(typeof msg);
//  console.log(typeof (msg));
//  console.log(typeof 97);
  var message;
//  console.log(typeof message);
//  console.log(typeof age);

  var car = null;
//  console.log('car is set to null but typeof car is '+ typeof car);
  if (car !== undefined) {
//    console.log('car is set to undefined but typeof car is still an: ' + typeof car);
  }
  /**
  * booleans
  * true and false
  */
  var message = 'Jesus is king';
  console.log('This is the message '+ message);
  var messageBoolean = Boolean(message);
  console.log(messageBoolean);

  if (message) {
    console.log('Value in message is true!');
  }

  /**
  * Number type
  * Octal numbers are not allowed in strict mode
  */

//  var intNum = 55;
//  console.log(typeof intNum);
//  var octalNum1 = 070;
//  var octalNum2 = 079;
//  var octalNum3 = 08;
//  console.log('this is octalNum1 070: '+ octalNum1);
//  console.log('this is octalNum2 079: '+ octalNum2 + ' "079" is not a valid octal number');
//  console.log('this is octalNum3 08: '+ octalNum3 + ' "08" is not a valid octal number');
//
//  var hexNum1 = 0xA;
//  console.log('hexidecimal number 0xA is '+ hexNum1);
//  var hexNum2 = 0x1f;
//  console.log('hexidecimal number 0x1f is ' + hexNum2);
//
//  console.log('isNaN(NaN) ' +isNaN(NaN));
//  console.log('isNaN(true) ' + isNaN(true));
//  console.log('isNaN(10) '+ isNaN(10));
//  console.log('isNaN("10")  '+isNaN("10"));
//  console.log('isNaN("blue") ' + isNaN("blue"));


  /**
  * Number conversions
  * There are three functions that convert numeric values
  * into numbers: the Number() casting function
  * the parseInt() function and the parseFloat() function
  */

  // Numbers() can be used on any data type; the other two functions
  // are specifically for converting strings to numbers
  // each reacts differently to the same input.

 /* var num1 = Number('hello world');//NaN
  var num2 = Number(''); //0
  var num3 = Number('00011'); //11
  var num4 = Number(true); //1

  console.log('Number("hello world") ' + num1); //NaN
  console.log('Number("") ' + num2); //0
  console.log('Number("00011") ' +num3); //11
  console.log('Number(true) ' +num4); //1
  */

//  var num1 = parseInt('1234blue');
//  var num2 = parseInt('');
//  var num3 = parseInt('0xa'); //hexadecimal
//  var num4 = parseInt('22.5');
//  var num5 = parseInt('70'); // decimal
//  var num6 = parseInt('0xf'); // hexadecimal

//  console.log('parseInt("1234blue") returns: '+ num1);
//  console.log('parseInt("") returns: '+ num2);
//  console.log('parseInt("0xa") returns: '+ num3);
//  console.log('parseInt("22.5") returns: '+ num4);
//  console.log('parseInt("70") returns: '+ num5);
//  console.log('parseInt("0xf") returns: '+ num6);

  // parseInt provides a second argument: the radix(number of digits) to use
  // if you know that the value you're parsing is in hexadecimal format
  // you pass the radix of 16 as a second argument
//  var hexNum = parseInt('0xAF', 16);
//  console.log('parseInt("0xAF") is a hexadecimal number ' + hexNum);
  // when providing the hexadecimal radix you can leave off the leading 0x
//  var hexNum2 = parseInt('AF', 16);
//  console.log('parseInt("AF", 16) ' + hexNum2 );
//  var hexNum3 = parseInt('AF');
//  console.log('parseInt("AF") ' + hexNum3 );

  // Passing in the radix can greatly change the outcome of the conversion,
  // consider the following
//  var n1 = parseInt('10', 2); // parsed as binary
//  var n2 = parseInt('10', 8); // parsed as octal
//  var n3 = parseInt('10', 10); // parsed as decimal
//  var n4 = parseInt('10', 16); // parsed as hexadecimal
//
//  console.log("parseInt('10', 2)" + n1 + ' parsed as binary');
//  console.log("parseInt('10', 8)" + n2 + ' parsed as octal');
//  console.log("parseInt('10', 10)" + n3 + ' parsed as decimal');
//  console.log("parseInt('10', 16)" + n4 + ' parsed as hexadecimal');

  /**
  * The parseFloat() function
  * works in a similar way to parseInt()
  * looking at each character starting at position 0
  * It continues to parse the string until it reaches either the end
  * of the string or a character that is invalid in a floating point number
  * This means the decimal point is valid the first time it appears, the second
  * time a decimal is encountered it's ignored resulting in
  * "22.34.5" being converted to 22.34
  *
  */
//  var n1 = parseFloat('1234blue');
//  var n2 = parseFloat('0xa');
//  var n3 = parseFloat('22.5');
//  var n4 = parseFloat('22.34.5');
//  var n5 = parseFloat('0908.5');
//  var n6 = parseFloat('3.125e7');
//  console.log('parseFloat("1234blue") is '+ n1);
//  console.log('parseFloat("0xa") is ' + n2);
//  console.log('parseFloat("22.5") is ' + n3);
//  console.log('parseFloat("22.34.5") is ' + n4);
//  console.log('parseFloat("0908.5") is ' + n5);
//  console.log('parseFloat("3.125e7") is ' + n6);

    /**
    * Strings are immutable in JavaScript, meaning once they are created
    * their values cannot change. To change a string held by a variable
    * the original string must be destroyed
    * and the variable filled with another string containing a new value like this
    */
//  var lang = 'Java';
  //lang = lang + 'Script rocks';
//  lang += 'Script rocks'; // the above can be written like this as well, with the +=
//  console.log(lang + ' and you know it!');

  // Converting to a string
//  var age = 11;
//  var ageAsString = age.toString();
//  console.log('age.toString() is ' + ageAsString);
//  var found = true;
//  var foundAsString = found.toString();
//  console.log('found.toString() ' + foundAsString);

  /**
  * The toString() method is available on values that are Numbers
  * Booleans, Objects, and Strings (yes strings have a toString() method that returns a copy of itself)
  * if value is null or undefined, this method is unavailable.
  * by default toString() always returns a string that represents the number as a decimal
  * but passing in a radix, toString() can output the value in binary, octal, hexadecimal
  * or any other valid base.
  */
//  var num = 10;
//  console.log('var num = 10;');
//  console.log('num = 10 num.toString() is: ' +num.toString());
//  console.log('num.toString(2) is: '+ num.toString(2));
//  console.log('num.toString(8) is ' + num.toString(8));
//  console.log('num.toString(10) is ' + num.toString(10));
//  console.log('num.toString(16) is ' + num.toString(16));
//
//  var val1 = 10;
//  var val2 = true;
//  var val3 = null;
//  var val4;
//  console.log('val1 = 10 '+ val1);
//  console.log('val2 = true '+ val2);
//  console.log('val3 = null '+ val3);
//  console.log('val4; '+ val4);

  /**
  * The Object Type
  */
  //var o = new Object();
  // same as
  //var o = {};

  // using the prefix
  var age = 29;
  ++age;
  console.log('var age = 29; ++age = ' + age);
  console.log('++age is same as age = age + 1');

  var age = 29;
  --age;
  console.log('var age = 29; --age = ' + age);

  var agging = 32;
  console.log('var agging = '+ agging);
  var anotherAge = --agging + 2;
  console.log('var anotherAge = --agging + 2 = '+ anotherAge);

  var num1 = 2;
  var num2 = 20;
  var num3 = --num1 + num2;
  var num4 = num1 + num2;
  console.log('var num1 = ' + num1);
  console.log('var num2 = ' + num2);
  console.log('var num3 = --num1 + num2 ' + num3);
  console.log('var num4 = num1 + num2 '+ num4);

  // using the postfix
  var n1 = 2;
  var n2 = 20;
  var n3 = n1-- + n2;
  var n4 = n1 + n2;
  console.log('var n1 = ' + n1);
  console.log('var n2 = ' + n2);
  console.log('var n3 = n1-- + n2 ' + n3);
  console.log('var n4 = n1 + n2 '+ n4);

  var s1 = '2';
  var s2 = 'z';
  var b = false;
  var f = 1.1;
  var o = {
    valueOf: function () {
      return - 1;
    }
  };

s1++; // 3
s2++; // NaN
b++; // numeric 1
f--; // 0.10000000000000009 (due to floating point inaccuracies)
o--; // numeric -2

output.innerHTML += '<h2>Unary Operators</h2>';
output.innerHTML += '<p> Increment/Decrement using ++ and --';

output.innerHTML += '<li>var s1 = "2" value becomes ' + s1++ + '</li>';
output.innerHTML += '<li>var s2 = "z" value becomes ' + s2++ + '</li>';
output.innerHTML += '<li>var b = false value becomes ' + b++ + '</li>';
output.innerHTML += '<li>var f = "1.1" value becomes ' + f-- + '</li>';
output.innerHTML += '<li>var o = { valueOf: function() { return - 1 } } value becomes '+ o-- + '</li>';

output.innerHTML += '<h2>Unary Plus and Minus</h2>';
var S1 = "01";
var S2 = "1.1";
var S3 = "z";
var B = false;
var F = 1.1;
var O = {
  valueOf: function () {
    return -1;
  }
};

S1 = +S1; // numeric 1
S2 = +S2; // 1.1
S3 = +S3; // NaN
B = +B; // numeric 0
F = +F; // still 1,1
O = +O; // numeric -1

output.innerHTML += '<li>var S1 = "01" S1 = +S1: value becomes ' +S1 + '</li>';
output.innerHTML += '<li>var S2 = "1.1" S2 = +S2: value becomes ' +S2 + '</li>';
output.innerHTML += '<li>var S3 = "z" S3 = +S3: value becomes ' +S3 + '</li>';
output.innerHTML += '<li>var B = false B = +B: value becomes ' +B + '</li>';
output.innerHTML += '<li>var F = "1.1" F= +F: value becomes ' +F + '</li>';
output.innerHTML += '<li>var O = {valueOf: function() { return -1; }}; O = +O: value becomes ' +O + '</li>';
output.innerHTML += '<p>The unary minus operator\'s primary use is to negate a numeric value, such as converting 1 into - 1.</p>';
output.innerHTML += '<p>The simle case is illustrated here:</p>';
output.innerHTML += '<code>var num = 25;</code>';
output.innerHTML += '<code>num = -num; // becomes -25</code>';

output.innerHTML += '<p>When used on a numeric value, the unary minus simple negates the value\
                   (as in this example).</p>';
output.innerHTML += '<p>When used on nonnumeric values, unary minus applies all of the same rules as\
                    unary plus and then negates teh result, as shown here:</p>';
var s1 = '01'
  , s2 = '1.1'
  , s3 = 'z'
  , b = false
  , o = {
      valueOf: function () {
        return -1;
      }
    };

  s1 = -s1;
  s2 = -s2;
  s3 = -s3;
  b  = -b;
  f  = -f;
  o  = -o;

output.innerHTML += '<code>var s1 = "01";<br>var s2 = "1.1";<br>var s3 = "z";<br>var b = -b<br>var f = 1.1;<br>var o = {<br>&nbsp; valueOf: function () {<br>&nbsp;&nbsp; return -1;<br>&nbsp;&nbsp;&nbsp}<br>};</code><br>';
//output.innerHTML += '<code>s1 = -s1;<br>s2 = -s2;<br>s3 = -s3;<br>b = -b;<br>f = -f<br>o = -o</code>';
output.innerHTML += '<li>s1 = -s1 value becomes numeric: ' + -s1 + '</li>';
output.innerHTML += '<li>s2 = -s2 value becomes numeric: ' + -s2 + '</li>';
output.innerHTML += '<li>s3 = -s1 value becomes: ' + -s3 + '</li>';
output.innerHTML += '<li>b = false value becomes: ' + -b + '</li>';
output.innerHTML += '<li>f = 1.1 value changes: ' + -f + '</li>';
output.innerHTML += '<li>b = value becomes numeric: ' + -o + '</li>';

output.innerHTML += '<h2>Logical<strong> NOT</strong></h2>';
output.innerHTML += '<p>The logical NOT operator is represented by an exclamation point and may be applied to any\
                    value in ECMAscript. This operator always returns a Boolean value, regardless of the data\
                    type it\'s used on. The logical NOT behaves in the following ways:</p>';
output.innerHTML += '<li class="arrow">&#8658; if the operand is an object, <code>false</code> is returned.</li>';
output.innerHTML += '<li class="arrow">&#8658; if the operand is an empty string, <code>true</code> is returned.</li>';
output.innerHTML += '<li class="arrow">&#8658; if the operand is the number 0, <code>true</code> is returned.</li>';
output.innerHTML += '<li class="arrow">&#8658; if the operand is any number other then 0 (including infinity), <code>false</code> is returned.</li>';
output.innerHTML += '<li class="arrow">&#8658; if the operand is null, <code>true</code> is returned.</li>';
output.innerHTML += '<li class="arrow">&#8658; if the operand is NaN, <code>true</code> is returned.</li>';
output.innerHTML += '<li class="arrow">&#8658; if the operand is the number 0, <code>true</code> is returned.</li>';

output.innerHTML += '<ol>alert(!false); is equal to '+ !false +'</ol>';
output.innerHTML += '<ol>alert(!"blue"); is equal to '+ !"blue" +'</ol>';
output.innerHTML += '<ol>alert(!0); is equal to '+ !0 +'</ol>';
output.innerHTML += '<ol>alert(!NaN); is equal to '+ !NaN +'</ol>';
output.innerHTML += '<ol>alert(!" "); is equal to '+ !" " +'</ol>';
output.innerHTML += '<ol>alert(!12345); is equal to '+ !12345 +'</ol>';

  /**
  * Elquent JavaScript
  * Examples
  */
output.innerHTML += '<code>var theNum = Number(prompt("pick a number", ""));</code><br>';
//var theNum = Number(prompt('Pick a number', ''));
//if (!isNaN(theNum)) {
//  output.innerHTML += 'Your number is the squar root of ' +  theNum * theNum + '<br>';
//}else {
//  output.innerHTML += 'This ' + theNum + ' is not a number, please enter a number<br>';
//}

//var num = Number(prompt('pick a number', '0'));
//
//if (num < 10) {
//  output.innerHTML += '<code>your number is small</code> '+ num +'<br>';
//} else if (num < 100) {
//  output.innerHTML += '<code>your number is medium</code> '+ num + '<br>';
//} else {
//  output.innerHTML += '<code>your number is large</code> ' + num + '<br>';
//}
//
//console.log('Your number is the square root of ' + theNum * theNum );
//output.innerHTML += 'Your number is the square root of ' + theNum * theNum;

output.innerHTML += '<br><code>var num = 0;<br>while (num <= 12) {<br>num = num + 2;<br>}</code>';

var num = 0;
while (num <= 12) {
  output.innerHTML += '<li>'+ num +'</li>';
  // add 2 to num for even numbers
  num = num + 2;
  // add 1 like num = num + 1 or like num++
  //num++;
}

//output.innerHTML += '<code>var result = 1;<br>var counter = 0;<br>while ( counter < 10 ) {<br>\
//  &nbsp; result = result * 2;<br>&nbsp; counter++;<br>}</code><br>';
//var result = 1;
//var counter = 0;
//while (counter < 10) {
//  result = result * 2;
//  counter++;
//}
//output.innerHTML += '<li>'+ result + '<li><br>';

//output.innerHTML += '<br><code>do {<br>&nbsp;var name = prompt("who are you?");<br>}\
//                    while (!name);<br>console.log(name);</code><br>';

//do {
//  var name = prompt('who are you?');
//} while (!name);
//output.innerHTML += '<h3> Hello there, '+ name + ' nice to meet you.</h3>';

output.innerHTML += '<p>This program will force you to enter a name. It will ask again and again.</p>';

output.innerHTML += '<h2>For Loops</h2>';
output.innerHTML += '<p>Many loops follow the pattern seen in the previous <code>while</code> examples.\
First a "counter" variable is created to track the progress of the loop. Then comes a <code>while</code>\
      loop, whose test expression usually checks whether the counter has reached some boundry yet\
      . At the end of the loop body, the counter is updated to track progress</p>';
output.innerHTML += '<p>Because this pattern is so common, JavaScript and similar languages\
                    provide a slightly shorter and comprehensive form, the <code>for</code> loop.</p>';
output.innerHTML += '<code> for (var number = 0; number <= 12; number+= 2);';

for (var number = 0; number <= 12; number++) {
  output.innerHTML += '<li>' + number + '</li>';
}




  /**
  * http://bahmutov.calepin.co/oo-vs-fp-console-log-example.html
  * Object Orientated vs Functional Programing in JavaScript
  * Just some basic examples
  */

    /**
    * Prototypical inheritance
    * JavaScript
    */

//  var config = {
//    writable: true,
//    enumerable: true,
//    configurable: true
//  };
//
//  var defineProperty = function (obj, name, value) {
//    config.value = value;
//    Object.defineProperty(obj, name, config);
//  };
//
//  var man = Object.create(null);
//  defineProperty(man, 'sex', 'male');
//  var tony = Object.create(man);
//  defineProperty(tony, 'firstName', 'Tony');
//  defineProperty(tony, 'lastName', 'Brown');
//
//  alert(tony.sex);
//  alert(tony.firstName);
//  alert(tony.lastName);
//  console.log(Object.getPrototypeOf(tony));

//var display = document.getElementById('output');
//
//var str1 = 'Let\'s say that we want to add logging to the <code>add function</code> to help with debugging in case there is an unexpected result. We can add a <code>console.log</code> statement to the function itself: ';
//
//function add(a, b) {
//  return a + b;
//}
//
//display.innerHTML += 'the add function: '+'<code>function add (a, b) { return a + b; } add(2, 3)//=> ' + add(2, 3) + '<br>';
//
//
//
//function addV(a, b) {
//  console.log('a', a, 'b', b);
//  return a + b;
//}
//console.log(addV(2,3));
//
//display.innerHTML += str1 + '<br>'+ '<code>function addV(a, b) { console.log("a", a, "b", b); return a + b; } console.log(addV(2, 3)); </code>'+ ' would give us: ' + addV(2, 3) + '<br>';


//var calc = (function initCalc () {
//  function add(a, b) { return a + b; }
//  function sub(a, b) { return a - b; }
//  return {
//    add: add,
//    sub: sub
//  };
//}());
//
//
//var calc = (function initCalc () {
//  function add(a,b) { return a + b; }
//  return {
//    add: add,
//    sub: function (a, b) {
//      return this.add(a, -b);
//    }
//  };
//}());
//var sub = calc.sub.bind(calc);
//
//var process = {
//  nextTick: function () { return process; }
//};
//
//process.nextTick(calc.sub, 2, 3);
//
//console.log(process.nextTick(calc.sub, 2, 3));
//console.log(calc.add(3, 4));
//console.log(calc.sub(3, 4));
//
//var calc = (function initCalc () {
//  function add (a, b) { return a + b; }
//  return {
//    add: add,
  // use function add instead of method this.add
//    sub: function (a, b) {
//      return add(a - b);
//    }
//  };

//}());

//display.innerHTML += 'This is the calculation of the calc function add method: 2 + 3 = ' + calc.add(2, 3) + '<br>';
//display.innerHTML += 'This is the sub function: 3 - 2 = '+ calc.sub(3, 2) + '<br>';



/*@cc_on @*/
/*@if (@_jscript_version >= 4)
    alert("JavaScript version 4 or better");
    @else @*/
    //alert("Conditional compilation not supported by this scripting engine.");
/*@end @*/

//var date = new Date(Date.UTC(2013, 1, 1, 14, 0, 0));
//var options = {
//    weekday: "long", year: "numeric", month: "short",
//    day: "numeric", hour: "2-digit", minute: "2-digit"
//};

//display.innerHTML += (date.toLocaleDateString("en-US"));
//display.innerHTML += (date.toLocaleTimeString("en-us", options));
//display.innerHTML += (date.toLocaleDateString("ja-JP"));
//display.innerHTML += (date.toLocaleTimeString("ja-JP", options));

//var dateString = "Today's date is: ";
//
//var newDate = new Date();

// Get the month, day, and year.
//dateString += (newDate.getMonth() + 1) + "/";
//dateString += newDate.getDate() + "/";
//dateString += newDate.getFullYear();
//
//display.innerHTML += dateString;
