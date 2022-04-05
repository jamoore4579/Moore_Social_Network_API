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

// api/thoughts
router
    .route('/')
    .get(getAllThoughts);

// api/thoughts/userid
router
    .route('/:userId')
    .post(addThought);

// api/thoughts/thoughtid
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

// api/thoughtid/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// api/thoughtid/reactions/reactionid
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;