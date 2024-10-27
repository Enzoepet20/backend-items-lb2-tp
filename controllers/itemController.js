const Item = require('../models/item');

// Obtener todos los ítems
exports.getItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items' });
    }
};

// Crear nuevo ítem
exports.createItem = async (req, res) => {
    try {
        const { name, description, imageUrl } = req.body;
        const newItem = await Item.create({ name, description, imageUrl });
        res.json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Error creating item' });
    }
};

// Actualizar ítem existente
exports.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, imageUrl } = req.body;
        const item = await Item.findByPk(id);

        if (item) {
            await item.update({ name, description, imageUrl });
            res.json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating item' });
    }
};

// Eliminar ítem
exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByPk(id);

        if (item) {
            await item.destroy();
            res.json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item' });
    }
};
