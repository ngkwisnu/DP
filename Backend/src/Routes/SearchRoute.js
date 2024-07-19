import express from 'express';

import {
    getAllSearchController,
    searchAllKategoriController,
    searchByRatingController
} from '../Controller/SearchController.js';

const router = express.Router();
router.get('/search', getAllSearchController);
router.get('/search/kategori/:kategori_id', searchAllKategoriController);
router.get('/search/rating/:rating', searchByRatingController);

export default router;