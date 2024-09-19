import { Router } from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = Router();

// Route for the homepage
router.get('/', AppController.getHomepage);

// Route to get all students
router.get('/students', StudentsController.getAllStudents);

// Route to get students by major (CS or SWE)
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
