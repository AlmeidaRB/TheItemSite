var blogPage = {

  init: function () {
    blogPage.initStyling();
    blogPage.initEvents();

  },
  initStyling: function () {
    console.log("called init styling");
    blogPage.addAllPosts(posts);
  },
  initEvents: function () {

    $("body").on("click", function () {
      alert("my event is bound.");
    })
    console.log("called init events");
  },

  addPost: function (post, index, array) {
    $("section").append(
      "<article>" +
      "<h2>" + post.Product + "</h2>"
      + "<p>" + post.Description + "</p>"
      + "<blockquote>" + post.Price + "</blockquote>"
      + "</article>"
    );
  },



  addAllPosts: function (postsData) {
    postsData.forEach(blogPage.addPost);
},

};

$(document).ready(function() {
  // code goes here for page.
  blogPage.init();
  // init();
});
