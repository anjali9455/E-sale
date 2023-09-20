export const getUsers =  (req, res) => {
    UserModel.find({})
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error fetching users' });
      });
  }