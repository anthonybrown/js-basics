;(function ($, window, document, undefined) {

  'use strict';
  // using jQuery to manipulate the DOM
  // just refreshing my memory, I've been using pojo
  // so jQuery is a distant memory now.
  $(function () {
    var h1 = $('h1');
    var h2 = document.createElement('h2');
    h2.innerHTML = 'for web developers';
    var str = document.createElement('p');
    var output = $('#output');
    h1.append('Professional JavaScript');
    $('#output').prepend(h2);
    $('#output').append('<h3>Nicolas Zakas.</h3>');
  });

})(jQuery, window, document);

;(function ($, window, document, undefined) {

'use strict';

$(function () {
    output.innerHTML += '<h3>I love the ternary operorator</h3>';
    output.innerHTML += '<p>Some people might say it\'s too hard to understand but I disagree. </p>';
    output.innerHTML += '<p>I find it quit elegent and easy to understand.</p>';
    // ternary operator, I love this one
    output.innerHTML += '<p><code>var num1 = "10";</code><br><code>var num2 = "7";</code></p>';
    output.innerHTML += '<p>Now if your numbers are strings you\'d get an unexpected result. 7 > 10 so we do this: </p>';

    var num1 = +'10' // if you left this as
      , num2 = +'7'; // a string 7 would be the result.
                    //Adding the + operator in front of the string
                    //short circuits the variable and changes it to a number.
    var max = (+num1 > +num2) ? num1 : num2;
    output.innerHTML +='<p><code>var max = (+num1 > +num2) ? num1 : num2;</code> var max = ' + max +'; </p>';
    var min = (+num1 < +num2) ? num1 : num2;
    num1 = '10';
    num2 = '7';
    output.innerHTML += '<p><code>var min = (+num1 < +num2) ? num1: num2;</code> var min = '+ min + '; </p>';
    output.innerHTML += '<p>The + operator short circuts the variable and turns the string into a number.\
    <br> Or you can use the Number() casting function to convert the string into a number.</p>';
    output.innerHTML += '<p><code>var max = (Number(num1) > Number(num2) ? num1 : num2;)</code>\
                        <br>I prefer the short circut method with the + operator.</p>';
    output.innerHTML += '<h3>The if statement</h3>';
    output.innerHTML += '<p>One of the most freqeuently used statements in most programming \
                        languages is the <code>if</code> statement.</p>';

    var i = 0;
    if (i > 25) {
      console.log("i is greater than 25");
    } else if (i < 0) {
      console.log("i is less than 0");
    } else {
      console.log('i is between 0 and 25,  inclusive');
    }

    output.innerHTML += '<p><code>var i = 0;</code><br><code>if (i > 25) {</code><br>\
      &nbsp;<code> console.log("i is greater than 25");</code><br>&nbsp;<code>} else if (i < 0) {</code><br>\
       &nbsp;<code> console.log("i is less than 25");</code> <br><code>} else {</code><br>&nbsp;<code> \
         console.log("i is between 0 and 25, inclusive.);</code><br><code>} </code></p>';
    output.innerHTML += 'i is between 0 and 25, inclusive.';

    output.innerHTML += '<h3>The do-while statement</h3>';
    output.innerHTML += '<p>You will probably never use this, at least I\'ve never encountered a situation where it was called for.';
    output.innerHTML += '<p><code>var i = 0;</code><br>\
                        <code> do {</code><br>&nbsp; <code>console.log(i += 2);</code><br>\
                          <code>} while (i < 10);</code></p';
    var j = 0;
    do {
      //console.log(j += 2);
      output.innerHTML += '<li>' + (j += 2) + '</li>';
    } while (j <= 10);

    output.innerHTML += '<p>The do-while loop will always run at least once.</p>';
    output.innerHTML += '<h3>The While Statement</h3>';

    output.innerHTML += '<p>The <code>while</code> statement is a pretest loop.\
                        This means the escape condition is evaluated before the code\
    <br>inside the loop has been executed. Because of this, it\'s possible that the body\
    of the loop is never executed. <br> Here\'s the syntax: </p>';
    output.innerHTML += "<p><code>while (expression) statement</code></p>";
    output.innerHTML += '<p>And here\'s an example of it\'s usage: </p>';
    output.innerHTML += '<p><code>var i = 0;</code><br><code>while (i < 10) {</code><br>\
    &nbsp; <code> i += 2;</code><br><code>}</code></p>';
    var k = 0;
    while (k < 10) {
      console.log(k += 2);
    }
    output.innerHTML += '<p>For the sake of brevity, I\'m not going to print out the execution.</p>';
    output.innerHTML += '<h3>The for Statement</h3>';
    output.innerHTML += '<p>The <code>for</code> statement is also a pretest loop with the added\
        capabilities of variable initialization before entering the loop and defining postloop code\
        to be executed. Here\'s the syntax</p>';
    output.innerHTML += '<p><code>for (initialization; expression: post-loop-express) statement</code></p>';
    output.innerHTML += '<p>And here\'s an example of it\'s usage:</p>';
    output.innerHTML += '<p><code>var count = 10;</code><br>\
                        <code> for (var i=0; i < count; i++) {</code><br>\
                          &nbsp;&nbsp; <code>console.log(i);</code><br><code>}</code></p>';
    var count = 10;
    for (var i = 0; i < count; i ++) {
      console.log('number: ' + i);
    }

    output.innerHTML += "<p>It's important to note that there's no need to use the var keyword\
                         inside the <code>for</code> loop initialization.</p><p>It can be \
                         done outside the initialization as well, such as the following:</p>";
    output.innerHTML += "<p><code>var count = 10;</code><br>\
                         <code>var i;</code><br>\
      <code>for (i=0; i < count; i++) {</code><br>\
        &nbsp;&nbsp;<code>console.log(console.log(i));</code><br>\
          <code>}</code></p>";
    output.innerHTML += '<p>There is also different ways to write a for loop so it resembles a while loop but for brevities sake, I\'m not going to show that, if you want it just write a while loop.</p>';
    output.innerHTML += "<p>This versitality makes the <code>for</code> \
                         statement on of the most used in the language.</p>";
    output.innerHTML += '<h3>The for-in Statement.</h3>';
    output.innerHTML += '<p>The <code>for-in</code> statement is a strict iterative statement.\
                        It is used to enumerate the properties of an object. Here\'s the syntax</p>';
    output.innerHTML += "<p><code>for (property in expression) statement</code></p>";
    output.innerHTML += "<p>And here's an example of it's usage: </p>";
    output.innerHTML += '<p><code>for (propName in window) { </code><br>\
      &nbsp;&nbsp;<code> console.log(propName);</code><br><code>}</code></p>';
    output.innerHTML += "<p>Here the <code>for-in</code> statement is used to display all the\
        properties of the BOM <code>window</code> object. Each time through the loop, the \
        <code>propName</code> variable is filled with the name of a property that exists\
        on the <code>window</code> object. This continues until all of the available properties\
        have been enumerated over. As with the <code>for</code> statement, the <code>var</code> \
         operator in the control statement is not necessary but is recommended for ensuring the use\
         of a local variable.</p>";
    output.innerHTML += '<p>Object properties in ECMAScript are unordered, so the order in which\
                        property names are returned in a <code>for-in</code> statement cannot\
                        necessarily be predicted. All enumerable properties will be returned once,\
                        but the order may differ across browsers.</p>';
    output.innerHTML += '<p>Note that the for-in statement will throw an error if the variable representing\
                        the object to iterate over is <code>null</code> or <code>undefined</code>.\
                        ECMAScript5 updates this behavior to not throw and error and simply doesn\'t\
                        execute the body of the loop. For best cross browser compatiablity, it\'s\
                        recommended to check that the object isn\'t <code>null</code> or <code>undefined\
                        </code> before attempting to use a <code>for-in</code> loop.</p>';
    output.innerHTML += '<h3>Labeled Statements</h3>';
    output.innerHTML += '<p>It\'s possible to lable statements for later use with the following syntax: </p>';
    output.innerHTML += '<p><code>label: statement</code></p>';
    output.innerHTML += '<p>Here\'s an example:</p>';
    output.innerHTML += '<p><code>start: for (var i=0; i < count; i++) {</code><br>&nbsp;&nbsp;<code>\
      console.log(i);</code><br><code>}</code></p>';
    output.innerHTML += '<p>In this example, the label <code>start</code> can be referenced later\
                        by using <code>break</code> or <code>continue</code> statement.</p>';
    output.innerHTML += '<p>Labled statements are typically used in nested loops.</p>';
    output.innerHTML += '<h3>The break and continue Statements</h3>';
    output.innerHTML += '<p>The <code>break</code> and <code>continue</code> statements\
                        provides stricter execution of code in a loop\
                        The <code>break</code> statement exits the loop immediately, forcing execution\
                        to continue with the next statement after the loop. The <code>continue</code>\
                        statement on the over hand exits the loop immediatly, but\
                        execution continues from the top of the loop. Here\'s and example:</p>';
    output.innerHTML += '<p><code>var num = 0;</code><br><br><code>for( var i=1; i < 10; 1++; ) {\
      </code><br>&nbsp;<code>if (i % 5 === 0) {</code><br>&nbsp;&nbsp;<code>break;</code><br>\
        <code>}</code><br><code>num++;</code><br><code>console.log(num);</code></p>';
    var numb = 0;

    for (var l = 1; l < 10; l++) {
      if (l % 5 === 0) {
        break;
      }
      numb++;
    }
    output.innerHTML += "numb => " + numb;
    output.innerHTML += '<p>In this code, the <code>for</code> loop increments\
                        the <code>i</code> from 1 to 10. In the body of the loop, an\
                        <code>if</code> statement checks to see if the value of\
                        <code>i</code> is evenly divisable by 5 (using the modolus operator)\
                        .If so, the <code>break</code> statement is executed and the loop\
                        is exited. The <code>num</code> variable starts out at 0 and indicicates\
                        the number of times the loop has been executed. After the <code>break\
                        </code> statement has been hit, the next line of code to be executed\
                        is four because when <code>i</code> equals 5, the <code>break</code>\
                        statement causes the loop to be exited before <code>num</code>\
                        can be incremented. A different effect can be seen if the <code>break</code>\
                        statement causes the loop to be exited before <code>num</code>\
                        can be incremented.A different effect can be seen if <code>break</code>\
                        is replaced with <code>continue</code> like this:</p>';
    var numc = 0;
    for(var m = 1; m < 10; m++ ) {
      if ( m % 5 === 0 ) {
        continue;
      }
      numc++;
    }

    output.innerHTML += "<li>"+ numc++ + "</li>";
    output.innerHTML += "<p>Here the output displays 8, the number of times the loop has been\
      executed.When <code>i</code> reaches a value of 5, the loop is exited before <code>num</code>\
      is incremented, but execution continues with the next iteration, when the value\
      is 6. The loop then continues until it's natural completion, when <code>i</code>\
      is 10.The final value of <code>num</code> is 8 instead of 9 because\
      one increment didn't occur because the <code>continue</code> statement.</p>";
    output.innerHTML += "<p>Both <code>break</code> and <code>continue</code>\
      statements can be used in conjunction with labeled statements to return\
      to a particular location in the code. This is typically used when there are\
      loops inside of loops, as in the following example:</p>";
    output.innerHTML += "<p><code>var num = 0;</code></p>";
    output.innerHTML += "<p><code>outermost:</code><br>\
                         <code>for (var i = 0; i < 10; i++) {</code><br>\
                           &nbsp;<code>for (var j = 0; j < 10; j++) {</code><br>\
                            &nbsp;<code> if (i === 5 && j === 5) {</code><br>\
                              &nbsp;&nbsp;&nbsp;<code>break outermost;</code><br>\
                            &nbsp;&nbsp;&nbsp;<code>}</code><br>\
                            &nbsp;&nbsp;&nbsp;<code>num++;</code><br>\
                          &nbsp;&nbsp;<code>}</code><br>\
                        <code>}</code><br>\
                        <code>console.log(num);</code></p>";
    var numcb = 0;
    outermost:
      for (var n = 0; n < 10; n++) {
        for (var o = 0; o < 10; o++) {
          if (n === 5 && o === 5) {
            break outermost;
          }
          numcb++;
        }
      }
    output.innerHTML += '<p> num is equal to: '+ numcb +'</p>';
    output.innerHTML += '<p>In this example, the <code>outermost</code> label\
      indicates the first <code>for</code> statement. Each loop normallly\
      executes 10 times, meaning that the <code>num++</code> statement is normally\
      executed 100 times and, consequentlly, <code>num</code> should be equal to 100\
      when the execution is complete. The <code>break</code> statement here is given\
      one argument: the label to break to. Adding the label allows the <code>break</code>\
      statement to break not just out of the inner <code>for</code> statement (using the\
      variable j) but also out of the outer <code>for</code> statement (using the variable i).\
      Because of this, <code>num</code> ends up with a value of 55, because execution is halted\
      when both <code>i</code> and <code>j</code> are equal to 5.The <code>continue</code>\
      statement can be used in the same way, as shown in the follow example:</p>';
    output.innerHTML += "<p><code>var num = 0;</code></p>";
    output.innerHTML += "<p><code>outermost: </code><br>\
      <code>for (var i = 0; i < 10; i ++) {</code><br>&nbsp;<code> for (var j=0; j < 10; j++) {</code>\
        <br> &nbsp; &nbsp;<code>if (i === 5 && j === 5) {</code><br>\
          &nbsp;&nbsp;&nbsp;<code>  continue outermost;</code><br><code>&nbsp;&nbsp;}</code><br>\
          &nbsp;&nbsp;&nbsp;&nbsp;<code>num++;</code><br>&nbsp;&nbsp; <code> }</code><br> \
          <code> }</code><br><code>console.log(num); \/\/95</code></p>";
    output.innerHTML += "<p>In this case, the <code>continue</code> statement forces execution\
                         to continue -- not in the inner loop but in the outer loop.\
                         when <code>j</code> is equal to 5, <code>continue</code>\
                         is executed, which means that the inner loop misses 5 iterations\
                         , leaving <code>num</code> equal to 95.</p>"
    output.innerHTML += "<p>Using labeled statements in conjunction with <code>break</code>\
    and <code>continue</code> can be very powerful but can cause debugging problems if\
    overused. Always use descriptive labels and try not to nest more than a few loops.</p>";

    output.innerHTML += "<h3>The with Statement</h3>";
    output.innerHTML += "<p>The <code>with</code> statement set the scope of the code\
                         within a particular object. The syntax is as follows: </p>";
    output.innerHTML += "<code>with (expression) statement;</code>";
    output.innerHTML += "<p>The <code>with</code> statement was created as a convienience\
      for times when a single object was being coded to over and over againm such as this\
        example: </p>";
    output.innerHTML += "<code>var gs = location.search.substring(1);</code><br>";
    output.innerHTML += "<code>var hostname = location.hostname;</code><br>";
    output.innerHTML += "<code>var url = location.href;</code>";

    output.innerHTML += "<p>Here, the <code>location</code> object is used\
      on every line. This code can be rewritten using the <code>with</code>\
      statement as follow: <br></p>";
    output.innerHTML += "<code>with (location) {</code><br>&nbsp;&nbsp;\
                         <code>var gs = search.substring(1);</code><br>&nbsp;&nbsp;\
                         <code>var hostname = hostname;</code><br>&nbsp;&nbsp;\
                         <code>var url = href;</code><br>\
                        <code>}</code>";
    output.innerHTML += "<p>In this rewritten version of the code, the <code>with</code>\
      statement is used in conjunction with the <code>location</code> object.\
      this means that each variable inside the statement is first considered\
      to be a local variable. If it's not found to be a local variable,\
      the <code>location</code> object is searched to see if it has a property\
      of the same name. If so, then the variable is evaluated as a property\
      of <code>location</code>.</p>";

    output.innerHTML += "<blockquote>It is widely considered a poor practice to use\
      the <code>with</code> statement in production code because of it's negative\
      performance impact and the difficulty in debugging code in the <code>with</code>\
      statement.</blockquote>";

      /**
      * Switch Statement
      */
    output.innerHTML += '<h3>The switch Statement</h3>';
    output.innerHTML += '<p>Closely related to the <code>if</code> statement,\
      another flow-control statement adopted from other languages.<br>\
      The syntax for the <code>switch</code> statement in ECMAScript closely\
      resembles the syntax in other C-based languages, as you can see here:</p>';
    output.innerHTML += '<p><code>switch (expression) {</code><br>\
      &nbsp; <code>case value: statement </code><br>\
      &nbsp;&nbsp; <code>break;</code><br>&nbsp;&nbsp;<code>case value: statement</code> <br>\
      &nbsp;&nbsp; <code>break;</code><br>\
      &nbsp;<code>default: statement</code><br><code>}</code></p>';
    output.innerHTML += '<p>Each case in a <code>switch</code> statement says, \
      "If the expression is equal to the value, execute the statement".\
      The <code>break</code> keyword causes code execution to jump out of the <code>switch</code>\
       statement. Without <code>break</code> keyword, code execution falls through the original\
       <code>case</code> into the fallowing one. The <code>default</code> keyword\
        indicates what is to be done if the expression does not evaluate to one of the cases.\
        (In effect, it\'s an <code>else</code> statement)</p>';
    output.innerHTML += "<p>Essentially, the switch statement prevents a developer from having\
                         to write something like this:</p>";

    output.innerHTML += '<p><code>if (i == 25) {</code><br>\
      &nbsp; &nbsp;<code>alert("25");</code><br>\
      <code>} else if (i == 35) {</code><br>\
      &nbsp;&nbsp;<code>alert("35");</code><br>\
      <code>} else if (i == 45) {</code><br>&nbsp;&nbsp;<code>alert("45");</code><br>\
      <code>} else {</code><br>&nbsp;&nbsp; <code>alert("Other");</code><br><code>}</code></p>';
    output.innerHTML += "<p>The equivalent <code>switch</code> statement is as follows:</p>";
    output.innerHTML += "<p><code>switch (i) {</code><br>\
      &nbsp; &nbsp; <code>case 25:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code>alert('25');</code>\
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <code>break;</code>\
      <br>&nbsp; &nbsp; <code>case 35:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code>alert('35');\
      </code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <code>break;</code>\
       <br>&nbsp; &nbsp; <code>case 45:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code>alert('45');\
       </code><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <code>break;</code><br>\
       &nbsp;&nbsp;<code>default:;</code><br>&nbsp;&nbsp;&nbsp;&nbsp; <code>alert('Other');</code>\
       <br><code>}</code></p>";

    output.innerHTML += "<p>It's best to always put a <code>break</code> statement after\
        each <code>case</code> to avoid having cases fall through into the next one\
        If you need a case statement to fall through, include a comment indicating that the\
        omission of the <code>break</code> statement is intentional, such as this:</p>";
    output.innerHTML += "<p><code>switch (i) {</code><br>\
      &nbsp;&nbsp; <code>case 25:</code><br>    /* falls though */<br>\
      &nbsp;&nbsp;  <code> case 35: </code><br> &nbsp; &nbsp;  <code>alert('25 or 35');</code>\
      <br>&nbsp; &nbsp;  <code>break;</code><br><code>case 45:</code><br>\
      &nbsp; &nbsp;  <code>case 45:</code><br>&nbsp;&nbsp;  <code>alert('45');</code><br>\
      &nbsp;&nbsp;  <code>break;</code><br><code>default:</code><br>\
      &nbsp;&nbsp;  <code>alert('Other');</code><br><code>}</code></p>";

    output.innerHTML += "<p>Although the switch statement was borrowed from other \
      languages, it has some unique characteristics in ECMAScript. First,the <code>switch</code>\
      statement works with all data types (in many languages it works only with numbers)\
      , so it can be used with strings and even objects. Second, the case values need\
      not be constants; they can be variables and even expressions. Condsider the following example:\
      </p>";

    output.innerHTML += "<p><code>switch ('hello world') {</code><br>\
      &nbsp; &nbsp;  <code>case 'hello' + ' world':</code><br>\
      &nbsp; &nbsp; &nbsp;  <code>alert('Greeting was found');</code><br>\
      &nbsp; &nbsp; &nbsp;  <code>break;</code><br>\
      &nbsp; &nbsp;  <code>case 'goodbye':</code><br>\
      &nbsp; &nbsp; &nbsp;  <code>alert('Closing was found');</code><br>\
      &nbsp; &nbsp; &nbsp;  <code>break;</code><br>\
      &nbsp; &nbsp;  <code>default:</code><br>\
      &nbsp; &nbsp; &nbsp;  <code>alert('Unexpected message was found');</code><br>\
      <code>}</code></p>";

    output.innerHTML += "<p>In this example, a string value is used in a <code>switch</code>\
       statement. The first case is actually an expression that evaluates a string\
       concatenation. Because the result of this concatenation is equal to the <code>switch</code>\
       argument, the alert displays <code>'Greeting was found.'</code> The ability to have\
       case expressions also allows you to do things like this: </p>";

    output.innerHTML += "<p><code>var num = 25;</code><br>\
      <code>switch (true) {</code><br>\
      &nbsp;&nbsp;  <code>case num < 0:</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp;  <code>alert('Less than 0');</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp;  <code>break;</code><br>\
      &nbsp;&nbsp; <code>case num >= 0 && num <= 10:</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp;  <code>alert('Between 0 and 10');</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp;  <code>break;</code><br>\
      &nbsp;&nbsp; <code>case num > 10 && num <= 20:</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp;  <code>alert('Between 10 and 20.');</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp;  <code>break;</code><br>\
      &nbsp;&nbsp; <code>default:</code><br>\
        &nbsp;&nbsp;&nbsp;&nbsp;  <code>alert('More than 20');</code><br>\
      <code>}</code></p>";

    output.innerHTML += "<p>Here a variable <code>num</code> is defined outside\
        the <code>switch</code> statement. The expression passed into the <code>switch</code>\
        statement is <code>true</code>, because each case is a conditional that will return\
        a Boolean value. Each case is evaluated, in order, until a match is found or until\
        the <code>default</code> statement is encountered (which is the case here).</p>";

    var num = 25;
    switch (true) {
      case num < 0:
        console.log('Less than 0');
        output.innerHTML += '<p>Less than 0</p>';
        break;
      case num >= 0 && num <= 10:
        console.log('Between 10 and 20');
        output.innerHTML += '<p>Between 10 and 20</p>';
        break;
      default:
        console.log('More than 20');
        output.innerHTML += '<p>More than 20</p>';
    }

    output.innerHTML += "<blockquote>The switch statement compares values\
      using the identically equal operator, so no type coercion occurs (for example\
      , the string '10' is not equal to the number 10).</blockquote>";
    output.innerHTML += "That's pretty cool isn't it?";

  });

})(jQuery, window, document);

