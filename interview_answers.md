# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    - Context API solves the problem of sharing state through component tree that could get complicated when it's big.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - Actions - are JS objects that have a type field. Describes a smallest amount of information of an event.
    - Reducers - Takes a state an an action and returns a new state. Reducing two things to one.
    - Store - Holds the application state inside it. Brings together state, actions and reducers together that makes the whole app.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    - A middleware that let's our actions dispatch actions of their own like making API calls.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

    - IDK. I like how Redux is a lot more structured and easy to troubleshoot or expect the results of your code, but it's too tedious and annoying to deal with every bits and pieces connecting things. Context API is great with small scale projects but it's just too unreliable in terms of trusting your own data. I will have to go with Redux.