# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   We do not need to use props and props drilling to manage state and pass state. We can use context API to create the provider to give the state to child components.
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are to use the axios and dispatch for the reducers
reducers are to keep and manipulate the state by the actions.  
store is state that can be access and update anywhere.

We can connect all component to store's state and to be easy to control and debug.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

redux-thunk allow us to use function and middleware. middleware can interupt an actions and do something to the action(i.g: API)

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I like context API because it was simple and easy to understand. if I work on a big system, propably I will use redux but in a small personal project I think contect API is enough.
