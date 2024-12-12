import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import _ from 'lodash';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = []; 

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/posts', (req, res) => {
    res.render("post", { 
        posts: posts,
        lodash: _
    });
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.post('/', (req, res) => {
    let postData = {
        content: req.body.postBody,
        title: req.body.moodName,
        emoji: req.body.iconName
    }

    posts.push(postData);
    res.redirect('/');
});

// app.get('/posts/:topic', (req, res) => {
//     posts.forEach((post) => { 
//         if (_.kebabCase(post.title) == _.kebabCase(req.params.topic)) {
//             res.render("post", { 
//                 postTitle: post.title,
//                 postBody: post.content
//             });
//         } 
//     });
// });

app.listen(3000, () => {
  console.log(`Server up and running at http://localhost:3000`);
});
