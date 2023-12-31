const express = require("express");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const memberController = require("../..//controllers/memberController");

const router = express.Router();
// const authenticate = require("../../middlewares/authenticate");
// const authorize = require("../../middlewares/authorize");

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

router.get("/", workoutController.getAllWorkouts);
router.get("/records", recordController.getAllRecords);
router.get("/:workoutId", workoutController.getOneWorkout);
router.get("/:workoutId/records", recordController.getRecordForWorkout);
router.get("/members/:memberId", memberController.getOneMember);
router.post("/", workoutController.createNewWorkout);
//router.post("/", authenticate, authorize, workoutController.createNewWorkout);
router.patch("/:workoutId", workoutController.updateOneWorkout);
router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;