const Comment = require('../../models/Comment');
const Reply = require('../../models/Reply');
const Post = require('../../models/Post');
const { internalServerError } = require('../../utils/errorResponses');

const controller = {};

controller.postLikeUnlike = async (req, res) => {
  try {
    const { postSlug } = req.params;
    const userId = req.user._id;

    let liked = null;

    const post = await Post.findOne({ slug: postSlug });
    if (post.likes.includes(userId)) {
      await Post.findByIdAndUpdate(post._id, {
        $pull: { likes: userId },
      });
      liked = false;
    } else {
      await Post.findByIdAndUpdate(post._id, {
        $push: { likes: userId },
      });
      liked = true;
    }

    res.status(200).json({ liked, userId });
  } catch (error) {
    internalServerError(res, error);
  }
};

controller.commentLikeUnlike = async (req, res) => {
  try {
    const { commentId } = req.params;
    const userId = req.user._id;

    let liked = null;

    const comment = await Comment.findById(commentId);
    if (comment.likes.includes(userId)) {
      await Comment.findByIdAndUpdate(commentId, {
        $pull: { likes: userId },
      });
      liked = false;
    } else {
      await Comment.findByIdAndUpdate(commentId, {
        $push: { likes: userId },
      });
      liked = true;
    }

    res.status(200).json({ liked });
  } catch (error) {
    internalServerError(res, error);
  }
};
controller.replyLikeUnlike = async (req, res) => {
  try {
    const { replyId } = req.params;
    const userId = req.user._id;

    let liked = null;

    const reply = await Reply.findById(replyId);
    if (reply.likes.includes(userId)) {
      await Reply.findByIdAndUpdate(replyId, {
        $pull: { likes: userId },
      });
      liked = false;
    } else {
      await Reply.findByIdAndUpdate(replyId, {
        $push: { likes: userId },
      });
      liked = true;
    }

    res.status(200).json({ liked });
  } catch (error) {
    internalServerError(res, error);
  }
};

module.exports = controller;
