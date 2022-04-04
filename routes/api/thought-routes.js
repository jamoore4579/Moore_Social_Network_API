const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

// api/thoughts
router.route('/').get(getAllThoughts);

// api/thoughts/userid
router.route('/:userId').post(addThought);

// api/thoughts/thoughtid
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

// api/thoughts/userid/thoughtid
router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

// api/thoughts/thoughtid/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// api/thoughtid/reactions/reactionid
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;