const authors = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    dob: "1990-01-01",
  },
];

const comments = [
  {
    title: "Great article!",
    content: "I really enjoyed reading this.",
    articleId: "1",
  },
];

const articles = [
  {
    id: "1",
    title: "First Article",
    content: "This is the content of the first article.",
    authorId: "1",
  },
  {
    id: "2",
    title: "Second Article",
    content: "This is the content of the second article.",
    authorId: "1",
  }
];

module.exports = {
  authors,
  comments,
  articles,
};