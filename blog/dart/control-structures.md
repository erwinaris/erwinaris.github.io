+++
title = "Control Structures Chapter 1"
date = "2020-09-18"
aliases = ["about-us","about-hugo","contact"]
type = "dart"
[ author ]
  name = "erwin aris prayogo"
+++

**Control structure** are commands, statements, conditions, code blocks that are useful for controlling program flow.

In general, the control structure can be divided into 3:

1. selection structure **(condition)**.
    > option structure is a program block or command that functions to select predetermined conditions.

2. Loop structure **(looping)**.
    > loop structure means a program or command block that is executed for statements defined up to certain conditions.

3. receipt of exception **(exception)**.
    > The most popular exception structure is the most popular in wobble errors that occur at runtime (the program is running) or better known as _runtime errors_.

###### 1. For example the **selection structure** below, use _if_ and _else_.

{{< highlight dart "linenos=table,hl_lines=4 6,linenostart=1" >}}

void main(List<String> args) {
  dynamic name = 'Erwin';

  if (name == name){
    print(name);
  }else{
    print('no name');
  }
}

{{< / highlight >}}

**For More Information**:

1. _dynamic_ is a defined type and can be filled with anything (boolean, integer, double, or String).

2. _ if the condition is true it will be executed.

3. _else_ option if the condition is wrong.


###### 2. using _if - else if - else_

{{< highlight dart "linenos=table,hl_lines=8 10 12,linenostart=1" >}}

import 'dart:io';
import 'dart:core';

void main(List<String> args) {
  stdout.write('Input a number : ');
  var number = int.tryParse(stdin.readLineSync());

  if (number > 0) {
    print('$number is Positive');
  }else if (number < 0){
    print('$number is Negative');
  }else{
    print('$number is Null');
  }

}

{{< / highlight >}}

