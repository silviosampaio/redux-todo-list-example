import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.json([
      {
        id: 2956,
        title: 'Minha primeira atividade',
        completed: true,
      },
      {
        id: 2957,
        title: 'Segunda Atividade',
        completed: false,
      },
      {
        id: 2958,
        title: 'Atividade 3',
        completed: false,
      },
      {
        id: 2959,
        title: 'Outra Atividade',
        completed: true,
      },
      {
        id: 2960,
        title: 'Mais uma atividade',
        completed: false,
      },
    ]);
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

export default router;
