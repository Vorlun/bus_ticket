import { Users } from "../models/users.model.js";
import bcrypt from "bcryptjs";


export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: { exclude: ["password_hash", "refresh_token"] },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi." });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id, {
      attributes: { exclude: ["password_hash", "refresh_token"] },
    });

    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi." });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi." });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone,
      email,
      passport_number,
      password,
      role,
    } = req.body;

    const existingUser = await Users.findOne({ where: { phone } });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "Bu telefon raqam allaqachon ro'yxatdan o'tgan." });

    let password_hash = null;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password_hash = await bcrypt.hash(password, salt);
    }

    const newUser = await Users.create({
      first_name,
      last_name,
      phone,
      email,
      passport_number,
      password_hash,
      role,
    });

    const { password_hash: _, refresh_token, ...userData } = newUser.toJSON();

    res.status(201).json(userData);
  } catch (error) {
    res.status(500).json({ message: "Foydalanuvchi yaratishda xatolik." });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      phone,
      email,
      passport_number,
      password,
      role,
      is_active,
    } = req.body;

    const user = await Users.findByPk(id);
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi." });

    if (phone && phone !== user.phone) {
      const exist = await Users.findOne({ where: { phone } });
      if (exist)
        return res
          .status(400)
          .json({
            message:
              "Bu telefon raqam boshqa foydalanuvchi tomonidan ishlatilmoqda.",
          });
    }

    let password_hash = user.password_hash;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      password_hash = await bcrypt.hash(password, salt);
    }

    await user.update({
      first_name,
      last_name,
      phone,
      email,
      passport_number,
      password_hash,
      role,
      is_active,
    });

    const { password_hash: _, refresh_token, ...userData } = user.toJSON();

    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Foydalanuvchini yangilashda xatolik." });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findByPk(id);
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi." });

    await user.destroy();

    res.json({ message: "Foydalanuvchi muvaffaqiyatli o'chirildi." });
  } catch (error) {
    res.status(500).json({ message: "Foydalanuvchini o'chirishda xatolik." });
  }
};
