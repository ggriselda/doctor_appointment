import express from 'express';
import { getAllReviews, createReview } from '../Controllers/reviewController.js';
import { authenticate, restrict } from '../auth/verifiedToken.js';

const router = express.Router({mergeParams: true})

router
    .route('/')
    .get(getAllReviews)
    .post(authenticate, restrict(['patient']), createReview);

export default router;