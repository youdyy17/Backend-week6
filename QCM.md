// Exercise1 
Q2
-- get all articales
select * from articles;
-- Get articles written by the journalist ‘RONAN”
select * from articles a
where a.journalist = 'RONAN';
-- Add an article
INSERT INTO articles (title, content, journalist, category)
VALUES (
    'Your Article Title Here',
    'The full content of your article goes here. This can be a very long string of text.',
    'RONAN', -- Or the name of the journalist
    'News'   -- Or the category of the article, e.g., 'Sports', 'Technology', 'Opinion'
);
-- Delete all articles whose title starts with “R”
delete FROM articles
WHERE title LIKE 'R%';

// Exercise2
Q2
1. How does the component know whether to create a new article or update an existing one?
-> In the articles coponents know to create or update an existing base on the prop 'isEdit' that set default to false if you click on the button it will turn state to true, so the condition know what to deal.

2. Why is the useParams hook used in this component What value does it provide when isEdit is true? 
-> userParams hook is use to hook the specific  information from a dynamic route. It will display the specific information from an article by id.

3. Explain what happens inside the useEffect hook. When does it run, and what is its purpose?
-> useEffect hook use to give state of isEdit, if the parameter is valid and useEffect look for isEdit condition before doing operation like fetch data or update data to database.

Q3
1. How are the three promise states (loading, success, and error) handled in the fetchArticles function?
-> -setLoading this state show it is true in function fetchArticles and while it is running it show loading message "Loading...".
-> -success  This is managed inside the try block. The await keyword pauses the function until the getArticles() promise resolves. Upon successful resolution, the returned data is used to update the articles state.
-> -Error in the try catch it's looking the condition from success state, if the data can be fetch and nothing happend It must not display error message.

Q5 -  Implement the database connection




