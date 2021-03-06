const servicePosts = require('../services/servicePosts');

module.exports = function (app) {
    app.route('/api/newpost')
        .post(createNewPost);
    app.route('/api/getposts')
        .post(getListOfPosts);
    app.route('/api/deletepost')
        .post(deletePost);
    app.route('/api/editpost')
        .post(editPost);
};

function createNewPost(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    servicePosts.addNewPost(req)
        .then(() => res.status(200).json())
        .catch(e => res.status(500).json())

}

function getListOfPosts(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    let data = {};
    data.photos = [];
    servicePosts.getPosts(req)
        .then(posts => {
            data.posts = posts.reverse();
            Promise.all(posts.map(item => {
                return servicePosts.getPhotos(item.noteId)
                    .then(photos => {
                        data.photos = data.photos.concat(photos);
                    })
            }))
                .then(() => res.status(200).json(data))
        })
        .catch(() => res.status(500).json());
}

function deletePost(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    servicePosts.deletePost(req)
        .then(() => res.status(200).json())
        .catch(() => res.status(500).json())
}

function editPost(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }

    servicePosts.editPost(req)
        .then(() => res.status(200).json())
        .catch(() => res.status(500).json())
}