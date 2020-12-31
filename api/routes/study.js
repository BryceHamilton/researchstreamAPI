const router = require('express').Router();
const {
  create_study_post,
  get_study_list,
  get_study_by_id,
  update_study_put,
  update_study_patch,
  delete_study,
} = require('../controllers/study-controller');

router.post('/:id', create_study_post);
router.get('/study_list', get_study_list);
router.get('/:id', get_study_by_id);
router.put('/:id', update_study_put);
router.patch('/:id', update_study_patch);
router.delete('/:id', delete_study);

module.exports = router;
