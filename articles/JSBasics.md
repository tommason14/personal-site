JS has many similarites to python, in that it can be used as both a functional and object-oriented programming language. The main benefit is that JS comes pre-installed on all modern web browsers, allowing for simple links to javascript in html code, producing responsive web elements.

> Blockquote!!


## Looping

### When looping through an array:

Standard for loops:

```javascript
for(let i = 0; i < array.length; i++){
  doSomething();
}
```
<div class='tip tip-left'>
  <p>
    forEach is like a Python&nbspfor&nbsploop
  </p>
</div>

forEach loops:

<pre><code class="javascript>
array.forEach(function(item, index){
  doSomething();
});
</code></pre>

Note that a function is passed as an argument in the forEach loop anonymously: it is only used for looping through that particular array at that time. You can also define a function outside and pass it into the forEach loop, and continue to use it anywhere.

An important note is that .forEach calls the function implicitly over every item in the array - it is not called by the user. Also .forEach takes 3 arguments:
  1. item
  2. index
  3. array it is called upon (redundant really)
