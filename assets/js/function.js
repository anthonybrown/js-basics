;(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    output.innerHTML += '<h1>Functions</h1>';
    output.innerHTML += "<p>Functions are the core of any language, because they allow the\
    encapsulation of statements that can be run anywhere and at any time.\
    Functins in ECMAScript are declared using the <code>function</code> keyword,\
    followed by a set of arguments and then the body of the function. The basic\
    syntax is as follows:</p>";
    output.innerHTML += "<p><code>function functionName (arg0, arg1, ..., argN) {</code><br>\
      &nbsp;&nbsp; <code>statements</code> <br><code>}</code></p>";
    output.innerHTML += "<p>Here's an example:</p>";
    output.innerHTML += "<p><code>function sayHi (name, message) {</code><br>\
    &nbsp;&nbsp;<code>alert('Hello ' + name + ', ' + message);</code><br>\
    <code>}</code></p>";

    output.innerHTML += "<p>This function can then be called by using the function name\
    , followed by the function arguments enclosed in parentheses (and seperarted by commas\
      if there are multiple arguments). The code to call the <code>sayHi(); </code> function\
    looks like this:</p>";
    output.innerHTML += "<p><code>sayHi('Tony', 'how are you today?');</code></p>";

    function sayHi(name, message) {
      output.innerHTML += "<h2>"+'Hello ' + name + ', ' + message + "</h2>";
    }
    sayHi('Tony', 'how are you today?');

    output.innerHTML += 'The output of this function is <code>"Hello Tony, how are you today?"\
      </code> The named arguments <code>name</code> and <code>message</code> are used\
      as part of a string concatenation that is displayed in the DOM with <code>innerHTML</code>';
    output.innerHTML += '<p>Functions in ECMAScript need not specify whether they return\
      a value. Any function can return a value at any time by using the <code>return</code>\
      statement followed by the value to return. Consider this example: </p>';
    output.innerHTML += "<p><code>function sum (num1, num2)  {</code><br>\
      &nbsp;&nbsp; <code>return num1 + num2;</code><br><code>}</code></p>";

    output.innerHTML += "<p>The <code>sum()</code> function adds two values together\
      and returns the result. Note that aside from the <code>return</code> statement\
      , there is no special declaration indicating that the function returns a value.\
      This function can be called using the following: </p>";
    output.innerHTML += "<p><code>var result = sum(5, 7);</code></p>";
    output.innerHTML += "<p>Keep in mind that that a function stops executing\
      and exits immediately when it encounters the <code>return</code> statement.\
      Thereofore, any code that comes after a <code>return</code> statement will\
      never be executed. For example: </p>";
    output.innerHTML += "<p><code>function sum(n1 + n2) {</code><br>\
      &nbsp;&nbsp; <code>return n1 + n2;</code><br>\
      &nbsp;&nbsp; <code><strong>alert('Hello World!');</strong></code>\/\/&nbsp; never executed <br>\
      <code>}</code></p>";
    output.innerHTML += "<p>In this example, the alert will never be displayed because it appears\
      after the <code>return</code> statement. It's also possible to have more than one <code>return\
       statement in a function, like this: </code></p>";
    output.innerHTML += "<p><code>function diff (n1, n2) {</code><br>\
      &nbsp;&nbsp; <code>if ( n1 < n2 ) {</code><br>\
        &nbsp;&nbsp;&nbsp; <code> return n2 - n1;</code><br><code>} else {</code><br> \
          &nbsp;&nbsp; <code> return n1 - n2;</code><br>&nbsp;&nbsp;<code>}</code><br>\
          <code>}</code></p>";
    output.innerHTML += "<p>Here, the <code>diff()</code> function determines the difference\
      between two numbers. If the first number is less than the second, it subtracts the\
      first from the second; otherwise it subtracts the second from the first.\
      Each branch of the code has it's own <code>return</code> statement that does\
      the correct caculation.</p>";
    output.innerHTML += "<p>The return statement can also be used without specifying\
      a return value. When used in this way, the function stops executing immediately and\
      returns <code>undefined</code> as it's value. This is typically used in functions\
      that don't return a value to stop function execution early, as in the following\
      example, where the alert won't be displayed:</p>";
    output.innerHTML += "<p><code>function sayHi ( name, message ) {</code><br>\
      &nbsp;&nbsp; <code><strong>return;</strong></code><br>\
      &nbsp;&nbsp;  <code>alert('Hello ' + name + ', ' + message ); \/\/ never called</code><br>\
      <code>}</code></p>";
    output.innerHTML += "<blockquote>It's recommended that a function either always\
      return a value of never return a value. Writing a function that sometimes returns\
      a value causes confusion, especially during debugging.</blockquote>";
    output.innerHTML += "<p>Strict mode places several restrictions on functions:</p>";
    output.innerHTML += "<li>No function can be named eval or arguments</li>";
    output.innerHTML += "<li>No named parameter can be named eval or arguments</li>";
    output.innerHTML += "<li>No two named parameters can have the same name.</li>";
    output.innerHTML += "<p>If these occur, it's considered a syntax error and the code\
                         will not execute.</p>";
    output.innerHTML += "<h2>Understanding Arguments</h2>";
    output.innerHTML += "<p>Function arguments in ECMAScript don't behave the same way\
      as function arguments in most other languages. An ECMAScript function doesn't care\
      how many arguments are passed in, nor does it care about the data types of those\
      arguments. Just because you define a function to accept two arguments doesen't mean\
      you can pass in only two arguments. You could pass in one, three or none\
      , and the interperter won't complain. This happens because arguments in ECMAScript\
      are represented as an array internally. The array is always passed to the function\
      , but the function doesn't care what (if anything) is in the array. If the array\
      arrives with zero items, that's fine; if it arrives with more, that's ok too.\
      In fact, there actually is an <code>arguments</code> object that can be accessed\
      while inside a function to retrive the values of each argument that was passed in.</p>";
    output.innerHTML += "<p>The <code>arguments</code> object acts like an array\
      (though it isn't an instance of <code>Array</code>) in that you access each\
      argument using bracket notation (the first argument is <code>arguments[0]</code>,\
      the second is <code>arguments[1]</code>, and so on) and to determine how many arguments\
      were passed in by using the <code>length</code> property. In the previous example,\
      the <code>sayHi()</code> function's first argument is named <code>name</code>.\
      The same value can be accessed by referencing the <code>arguments[0].</code>\
      Therefore, the function can be rewritten without naming the arguments explicitly\
      like this: </p>";
    output.innerHTML += "<p><code>function sayHi () {</code><br>\
                         &nbsp;&nbsp; <code>alert('Hello ' + arguments[0] + \
                         ', ' + arguments[1]);</code><br>\
                         <code>}</code></p>";
    output.innerHTML += "<p>In this rewritten version of the function, there is no named\
      arguments. The <code>name</code> and <code>message</code> arguments have been removed,\
      yet the function will behave appropriately. This illustrates an important point about\
      functions in ECMAScript: named arguments are a convenience, not a neccity. Unlike\
      in other languages, naming your arguments in ECMAScript does not creat a function \
      signature that must be matched later on; there is no validation against passed into\
      the function each time it is called:</p>";
    output.innerHTML += "<p><code>funcion howManyArgs () {</code><br>\
                         &nbsp;&nbsp; <code>alert(arguments.length);</code><br>\
                         <code>}</code><br>\
                         howManyArgs('string', 47);<br>\
                         howManyArgs();<br>\
                         howManyArgs(12)</p>";
    function howManyArgs () {
      console.log(arguments.length);
      output.innerHTML += '<li>' + arguments.length + '</li>';
    }

    howManyArgs('string', 48);
    howManyArgs();
    howManyArgs(12);

    output.innerHTML += "<p>This example shows the output of 2, 0 and 1 (in that order)\
      . In this way, developers have had the freedom to let the functions accept any\
      number of arguments and bahave appropriately. Consider the following:</p>";
    output.innerHTML += "<p><code>function doAdd () {</code><br>\
      &nbsp;&nbsp; <code>if ( arguments.length === 1 ) {</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp; <code>console.log(arguments[0] + 10);</code><br>\
      <code>} else if (arguments.length == 2) {</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp; <code>console.log(arguments[0] + arguments[1]);</code><br>\
          &nbsp;&nbsp; <code>}</code><br>\
      <code>}</code></p>";
    output.innerHTML += "<p><code>doAdd(10);        &nbsp;&nbsp;&nbsp;&nbsp;//20</code><br>\
            <code>doAdd(20, 30);                    //50</code></p>";
    output.innerHTML += "<p>The function <code>doAdd()</code> adds 10 to a number if\
      there is one argument: if there are two arguments, they are simply added together\
      and returned. So <code>doAdd(10)</code> returns 20, whereas <code>doAdd(20, 30)</code>\
      return 50. It's not quite a good as overloading, but it is a suffcient workaround for\
      this ECMAScript limitation.</p>";
    output.innerHTML += "<p>Another important thing to understand about arguments is that \
      the <code>arguments</code> object can be used in conjunction with named arguments,\
      such as the following: </p>";
    output.innerHTML += "<p><code>function doAdd(n1, n2) {</code><br>\
        &nbsp;&nbsp; <code>if (arguments.length === 1) {</code><br>\
          &nbsp;&nbsp;&nbsp; <code>alert(n1 + 10);</code><br>\
        <code>} else if (arguments.length === 2) {</code><br>\
          &nbsp;&nbsp;&nbsp; <code> alert(arguments[0] + n2);</code><br>\
            &nbsp;&nbsp; <code>}</code><br>\
            <code>}</code></p>";
    output.innerHTML += "<p><code>doAdd(7);</code><br>\
      <code>doAdd(33, 7);</code></p>";

      function doAdd(n1, n2) {
        if (arguments.length == 1) {
          console.log(n1 + 10);
        } else if ( arguments.length == 2 ) {
          console.log(arguments[0] + n2);
        }
      }
      doAdd(7);
      doAdd(33, 7);

      output.innerHTML += "<p>In this rewrite of the <code>doAdd()</code> function, two-named\
          arguments are used in conjuction with the <code>arguments</code> object.\
          The named argument <code>n1</code> is that its values always stay in sync\
          with the values of the corresponding named parameters. For Example</p>";
      output.innerHTML += "<p><code>function doAdd(n1, n2) {</code><br>\
            &nbsp;&nbsp; <code>arguments[1] = 10;</code><br>\
            &nbsp;&nbsp; <code>alert(arguments[0] + n2);</code><br>\
            <code>}</code></p>";

  });

})(jQuery, window, document);
