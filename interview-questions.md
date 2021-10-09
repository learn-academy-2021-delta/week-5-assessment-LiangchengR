# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Are (most) Ruby methods accessors or mutators?

  Your answer: Most Ruby methods are accessors. To turn them into mutators, we can use the ! operator. Another option would be to declare a variable and assign it to the variable.method.  

  Researched answer: As mentioned above, most Ruby methods are accessors and can be made permanent with the ! operator. The methods with ! are specifically called bang methods. If the bang method is executed and did not mutate the object, it will return nil. I was also reading that using bang methods aren't ideal because they're considered destructive. 
  
  Question for Austin: Does (most Ruby methods being accessors) have anything to do with the nature of Ruby and instance variables? I.e. naturally if you pass an argument(i.e. maybe the variable we want to use a method on?) into a class, it is considered local scope and we don't really affect the argument passed in. 



2. What is a block in Ruby?

  Your answer: A block in ruby is an anonymous set of statements denoted by a do and an end. It can be subsituted with curly braces where the first { represents do and the closing } represents end. I believe its actual execution and the way it is handled depends on the preceding keyword.

  Researched answer: A block is another word for a chunk of code. They are anonymous, they accept arguments, and they have an implicit return. They can be passed into methods and their arguments are defined by pipes | arg1, arg 2 |. An important note is when passing a block to a method, you need the yield keyword to invoke the block. (It seems like) The yield would be placed in the code where we would want to invoke the block. You can also pass arguments to the block within the method by passing them through yield.



3. What is a gem?

  Your answer: A gem is a piece of code that was packed up and made available for others to use. Thus being open source and allowing collaboration. Specifically, it relates to Ruby.

  Researched answer: As mentioned above, a gem is a library or packaged up piece of Ruby code that is easily shared with others. They include code, documentation and something called a gem spec which contains info about the gem files, test info, platform, version number, and more. They can help save time by using code created by others to solve similar problems. A couple gems are Sinatra (web app library), Rack(modular interface betweem web servers and web app), and even Rails (server side web app framework).



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is kind of like an excel sheet where there are links or relationships between data columns. While there may be many kinds of databases, I imagine they still would have some sort of underlying concept relating to relational databases otherwise how would we be able to reference unique data and decipher it from something else (the idea of unique id/primary keys)? 

  Researched answer: There are many databases...(this is an awful rabbit hole). I also realized the way I was defining 'relational' (a connection or having some link) in the sense of databases is wrong. Here's what I've found:

  1) A relational database refers to one where the information is stored in tables that consist of rows and columns. All the data has a link with every other piece of data.The most common language for dealing with this data is SQL. This is the most common database examples include Oracle, PostgreSQL, nad MySQL. They are strict with their schema so the data is predictable and can fit in a template, it fits into ACID or Atomicity, Consistency, Isolation, and Durability and since it is so well structured, it reduces appearance of errors.

  2) Non-relational databases: They don't really have a strict structure. They have a collections and don't have to follow specific patterns. Types include:
    2a) Key-Value Stores: Stores simple data in key-value pairs
    2b) Wide Column Stores: Or referred to as multidimensional key-value storing and supports petabytes (TIL = 1,000 TBs) of data. 
    2c) Document Stores: Uses a JSON-like document model. Keyword, 'document'-ish model that represents key-value and wide-column stores. (i.e. MongoDB)   

  + a whole lot more but I covered some of the basics.

  Side Note for Austin: ...there's a database called Cockroach Labs that I just found haha. 
  "Scale Fast. Survive Anything. Thrive Everywhere" 
  Product: "CockroachCloud" 
  https://www.cockroachlabs.com/ 

5. What are primary keys? Why are they important?

  Your answer: Primary keys are kind of like unique ids for pieces of data and allows the computer to know what we're specifically referencing.

  Researched answer: As noted above, primary keys are unique IDs and it is important for the computer so it knows what piece of data is is suppose to be looking at. They cannot contain Null values and each table can only have one primary key.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer. It is a naming convention used in routing or a pattern when structuring routes between the server and the client. It's goal is to help map HTTP methods and CRUD actions teogether.

2. JSON: or JavaScript Object Notation is a file format that uses user friendly and readable text formats to store and transfer data in object key-value pairs.

3. ERB: Is an object. It stands for Embedded Ruby also known as Templated Ruby. It is a file structure that allows us to embed Ruby code in HTML. To use erb in Rails, we need a .erb extension.

4. Params: Also known as query strings or URL parameters. Allows us to pass a value into a controller. It allows us to query a database or make our change our page. Allows us to pass through the route rather than directly into the URL.

5. API: refers to Application Programming Interface. It is a specific set of functions and procedures that allows applications to send information between each other. We can use APIs to interact with specific software without looking at the internal workings.
