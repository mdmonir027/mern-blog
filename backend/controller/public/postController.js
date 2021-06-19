const { internalServerError } = require('../../utils/errorResponses');
const Post = require('../../models/Post');

const controller = {};

controller.getAllPosts = async (req, res) => {
  try {
    const recent = req.query.recent ? true : false;

    if (recent) {
      const posts = await Post.find().limit(10);
      return res.status(200).json(posts);
    }

    const currentPage = parseInt(req.query.page) || 1;
    const itemPerPage = parseInt(req.query.item) || 10;
    const posts = await Post.find()
      .populate({
        path: 'user',
        select: 'username profilePic',
      })
      .populate({
        path: 'category',
        select: 'name slug',
      })
      .skip(itemPerPage * currentPage - itemPerPage)
      .limit(itemPerPage);

    const totalPost = await Post.countDocuments();
    const totalPage = Math.floor(totalPost / itemPerPage);

    return res.status(200).json({
      data: posts,
      currentPage,
      itemPerPage,
      totalPage,
      totalPost,
    });
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.getSinglePost = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await Post.findOne({ slug })
      .populate({
        path: 'user',
        select: 'username profilePic',
      })
      .populate({
        path: 'category',
        select: 'name slug',
      })
      .populate({
        path: 'likes',
        select: 'username',
      });

    return res.status(200).json(post);
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;
