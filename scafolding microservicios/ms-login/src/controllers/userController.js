export const createUser = async (req, res) => {
    console.log("llego aqui al createUser");
    res.status(200).json({a: 'createUser'});
    // try {
    //     const { name, description } = req.body;
    //     const pdv = await Pdv.create({ name, description });
    //     res.status(201).json(pdv);
    //   } catch (error) {
    //     res.status(500).json({ message: 'Error al crear el pdv', error });
    //   }
}

export const getAllUsers = async (req, res) => {
  console.log("llego aqui al getAllUsers");
  res.status(200).json({a: 'getAllUsers'});
}