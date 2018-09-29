## Concepts

The idea is that a class is a self-contained 'blueprint' for an object in the real world. Classes contain the data/characteristics/attributes of objects as variables, and the functionality, or the things it can do as methods.

**Syntax**

<pre><code class='python'>
class Earphone:
    def __init__(self, colour, brand, style, noise_cancel):
        self.colour = colour
        self.brand = brand
        self.style = style #in ear, headphone etc...
        self.noise_cancel = noise_cancel #boolean

    def play():
        print('Music is playing')
</code></pre>

There are four so-called pillars of object-oriented design:
  - Abstraction
  - Encapsulation
  - Inheritance
  - Polymorphism

**Abstraction** - everything needed for the instance of the object to act as required is contained in the class. Essentially we only include the things that are necessary for the thing we're trying to achive. So a human has many charactersitics, can talk, run, hold things, drive etc... but in a chess game, a human only has to move.

**Encapsulation** - Not a big deal in python, as variables cannot be declared public or private. Encapsulation means to hide certain functionality or attributes from the user. More correctly, it means to let the user only access certain features of the class. For example, in a class for marking scripts, you'd have to let the user modify attributes such as name and grade, but you wouldn't want them to change how the grading works, or the mark required for a certain grade.

**Inheritance** - Just like a child learns from its parents and inherits their attributes (maybe their hair colour, or accent, mannerisms), classes can do the same. Using the syntax:

<pre><code class='python'>
class Parent:
    def __init__(self, args):
        self.args = args
    ...

class Child(Parent):
    def __init__(self, args):
        self.args = args
        super().__init__(self)
</code></pre>

The call to the super class' \_\_init\_\_ means that the 'Child' class inherits all the properties and methods of the 'Parent' class.

**Polymorphism** - Here, both the parent and child classes can do the same thing, but respond differently. For example, both adults and children can dance, but they probably dance differently. This is represented in code by methods of the same name but wth different functionality.

<pre><code class='python'>
class Adult:
    def __init__(self, args):
        self.args = args

    def dance(self):
        print('Person bobs up and down, not much movement')

class Child(Adult):
    def __init__(self, args):
        self.args = args
        super().__init__(self)

    def dance(self):
        print('Child goes crazy, they have no inhibitions!')
</code></pre>

### Special methods

- Normally denoted with a double underscore, sometimes called 'dunder' methods.
- Common types in \_\_init\_\_.

Python has built in shorthand for some special methods.
<pre><code class='python'>
a = 3
b = 4

a + b # 7

a.__add__(b) # also works!
</code></pre>

**\_\_str\_\_ vs \_\_repr\_\_**

Very briefly, \_\_str\_\_ is used informally, to give an idea of the class, while \_\_repr\_\_ has to give the complete representation of an object. So the \_\_repr\_\_ method must allow for the object to reproduced in its entirety.

### Self?

What does the 'self' parameter mean? Well, when a class is created, it is a blueprint for any object. For example, a Person class could describe any number of people. The self parameter is a way of allowing the _instance_ of the class to inherit the attributes and functionality attached to the class- self refers to the instance of the object.

An example helps here:

<pre><code class='python'>
class Person:
    def __init__(self, gender): # The gender passed in to __init__ is in the global scope
        self.gender = gender # Now we are tying the gender passed in to the instance
</code></pre>

Self is a way to assign variables to each instance of the class, while creating a class suitable for many objects. A way of attaching data to each instance.

> Just think of self as each instance, and in your head, replace self with the instance

How to use 'self':

<pre><code class='python'>
tom = Person('male') # Now think of self as 'tom'
tom.gender # returns 'male'
</code></pre>
