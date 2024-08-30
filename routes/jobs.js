const express = require("express");
const router = express.Router();

const jobsController = require("../controllers/jobs");
const { getAllJobs, getJob, createJob, updateJob, deleteJob } = jobsController;

router.route("/").get(getAllJobs);
router.route("/:id").get(getJob);
router.route("/").post(createJob);
router.route("/:id").patch(updateJob);
router.route("/:id").delete(deleteJob);

module.exports = router;
