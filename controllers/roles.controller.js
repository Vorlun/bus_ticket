import { Roles } from "../models/roles.model.js";
import { Users } from "../models/users.model.js";

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: "Rollarni olishda xatolik." });
  }
};

export const createRole = async (req, res) => {
  try {
    const { name } = req.body;

    const existing = await Roles.findOne({ where: { name } });
    if (existing) {
      return res.status(400).json({ message: "Bu rol allaqachon mavjud." });
    }

    const role = await Roles.create({ name });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ message: "Rol yaratishda xatolik." });
  }
};

export const assignRolesToUser = async (req, res) => {
  try {
    const { user_id, role_ids } = req.body; // role_ids - array [1, 2, 3]

    const user = await Users.findByPk(user_id);
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi." });

    await user.setRoles(role_ids); // old roles ni tozalab yangi role larni qo'shadi
    const roles = await user.getRoles();

    res.json({
      message: "Rollar muvaffaqiyatli biriktirildi.",
      roles,
    });
  } catch (error) {
    res.status(500).json({ message: "Rol biriktirishda xatolik." });
  }
};

export const getUserRoles = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id);

    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi." });

    const roles = await user.getRoles();
    res.json(roles);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Foydalanuvchi rollarini olishda xatolik." });
  }
};
