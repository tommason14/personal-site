---
layout: post
title: CSS styling
featured: true
categories: css
tags: [css]
date: 2018-03-04 22:02
---


### Tables

Good tip for styling tables in markdown:

Ordinarily:

```markdown

### Example table with no CSS styling

Here is some text.

Here is the table:

|   Col 1   | Col 2 | Col 3 | Col 4 |
|  :------: | :---: | :---: | :---: |
| Example 1 |  310  | 436   | -184  |
| Example 2 |  213  | 400   | -123  |
| Example 3 |  337  | 465   | -182  |
```

compiles to this:

<img src="{{site.url}}/images/css-no-style.png" width="400">

Nicely styled, but way over to the left.

Now, including this css...

```css
table {
  margin: auto;
  margin-bottom: 5px;
}

th {
text-align: center;
}

td {
  text-align: center;
}

```
...the result is this:

<img src="{{site.url}}/images/css-style.png" width="400">

The table is centered horizontally on the page... probably what you're looking for!
