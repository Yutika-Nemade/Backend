require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const jsonData = {
    "login": "Yutika-Nemade",
    "id": 109644250,
    "node_id": "U_kgDOBokJ2g",
    "avatar_url": "https://avatars.githubusercontent.com/u/109644250?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Yutika-Nemade",
    "html_url": "https://github.com/Yutika-Nemade",
    "followers_url": "https://api.github.com/users/Yutika-Nemade/followers",
    "following_url": "https://api.github.com/users/Yutika-Nemade/following{/other_user}",
    "gists_url": "https://api.github.com/users/Yutika-Nemade/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Yutika-Nemade/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Yutika-Nemade/subscriptions",
    "organizations_url": "https://api.github.com/users/Yutika-Nemade/orgs",
    "repos_url": "https://api.github.com/users/Yutika-Nemade/repos",
    "events_url": "https://api.github.com/users/Yutika-Nemade/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Yutika-Nemade/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Yutika Nemade",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2022-07-20T04:18:05Z",
    "updated_at": "2025-02-05T07:14:19Z"
  }
  
app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.get('/signup', (req, res) => {
    res.send('<h1>Please register yourself</h1>')
})

app.get('/josn', (req,res) => {
    res.json(jsonData)
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`)
})