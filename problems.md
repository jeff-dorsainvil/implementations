## Test Task TradeLink

Tasks can be performed in JavaScript (in the Node.js environment) or Python
The use of Typescript is encouraged, the project itself with solutions should be installed using the usual `npm install` or `yarn` or `pip install`,
in README.md indicate the versions of node, npm, python and startup instructions.
Writing tests is encouraged.

You need to complete all tasks. When solving each problem, it is necessary to bring
the maximum possible, asymptotically optimal solution in terms of memory and time.
Problems in Section `B` focus more on code design and implementation.

In all cases involving I/O, stdin/stdout is assumed.
When solving problems, you cannot use additional libraries,
only by means of the language and the standard library.
You can use any library for tests.

### A1. Brackets

The input is a string consisting of various characters within ASCII,
The symbols `()[]{}` are considered parentheses.
A string is a valid expression if all parentheses in it are correctly closed,
that is, each closing parenthesis closes the last open parenthesis exclusively of its type,
otherwise it is incorrect; opening parentheses `(, [, {` correspond to closing `), ], }`.
For example, the expression `(123[abc]45)` is correct, but the expression `([abc)]` is not.
Output `Correct` if the line is a correct expression and `Incorrect`, if it is not.


#### Example
Input
```
([abc])
```
Output
```
Correct
```

### A2. (Non) Fibonacci

Fibonacci numbers (https://en.wikipedia.org/wiki/Fibonacci_sequence) form
non-decreasing sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, ...

We will call non-Fibonacci numbers the sequence of numbers
which are not included in the Fibonacci number sequence:

4, 6, 7, 9, 10, 11, 12, 14, ...

The solution must contain an **infinite generator** of a sequence of non-Fibonacci numbers.
To be able to check with tests, it is necessary to output a limited number N of the first numbers of the sequence.
The number N is supplied to the input, indicating the number of numbers that need to be output,
each on a separate line.
N may be large enough that the formula for calculating the Nth Fibonacci number may not be applicable or effective.


#### Example
Input
```
5
```
Output
```
4
6
7
9
10
```

### B1. LRU

A cache with the Least Recently Used policy is used to discard items from memory that
which, according to logical time, have been used quite a long time ago,
Let's call it a recency counter.
Requesting a certain key (as well as adding a new one) resets the age counter 
of this key to zero and increases the age counter by 1 all existing keys in the cache 
except the requested one. Those keys whose recency counter is greater than max_size (set by a parameter) –
are thrown out of the cache.

Implement a class for the LRU cache, the class:
- must be able to accept maximum cache size parameter during initialization
- must provide a proxying method, which takes as input a key, a function and its arguments.
If the value for the key is in the cache, then the method does not call the function, but returns the value from the cache,
if such a key is not in the cache, then the function with the passed arguments is executed,
its result is written to the cache and returned.

When solving this problem, you cannot use ready-made data structures, that the language provides, except for trivial ones.
In other words, it is prohibited here to use the standard library, that is, any require/import other than your own code.
Additionally for Nodejs: you cannot use the insertion property of the key order in Map (And in Object it is not guaranteed by the specification)
Additionally for Python3.7+: you cannot use the same dictionary property.

### B2. Counter

The request counter is used to determine RPS (Requests Per Second), for example.
In general, I would like to calculate something else quantitative for a given period of time,
for example, the weight of requests per minute that arrive at the API, 
if the requests are of varying complexity. It is important to note 
that the required period of time is constantly shifting, 
and simply counting requests for some previous fixed period is not suitable.
Here it is necessary to implement a generalized class initialized by the time interval parameter,
for which the calculation is carried out, which has a hit method that takes as an argument the value
by which the counter is incremented, and the count method, which returns the current counter value.
There can be a lot of requests, so here you need to choose the optimal one
the relationship between accuracy and resources that such a structure will consume,
let's say if the counter counts per minute (60 seconds),
an error/lag of around 3 seconds is acceptable (that is, 1/20 of the interval).

### C. Divide and rule

The number `N` is supplied as input, then `N` words consisting of Latin characters are supplied.
These words form the vocabulary of a language known to us.
Next, the number `K` is supplied as input, then `K` strings consisting of Latin characters are supplied.
You need to check whether a string is a concatenation of exactly two known words.
The output for each line returns the number of all possible concatenations,
and then the division options themselves in any order, separated by a space, with a colon placed at the point of division.

Here we assume that `K` is large enough to require the algorithm to run as fast as possible,
at the possible cost of additional memory. `S` and the strings themselves in the problem could represent the dictionary of some real popular language.

Additionally, for your solution to the problem, evaluate the complexity in terms of big O, 
where `S` denotes the average length of the query string, and `L` denotes the average length of the dictionary string. 
For example, O(N^2 * L^2 * KS).

#### Example
Input
```
5
abcd
cdef
ab
ef
ffff
2
abcdef
ffff
```
Output
```
2 abcd:ef ab:cdef
0
```
