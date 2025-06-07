import { Province } from "../models/province.model.js";
import { City } from "../models/city.model.js";

export const getAllProvinces = async (req, res) => {
  try {
    const provinces = await Province.findAll({ include: City });
    res.json(provinces);
  } catch (error) {
    res.status(500).json({ message: "Viloyatlarni olishda xatolik." });
  }
};

export const getProvinceById = async (req, res) => {
  try {
    const province = await Province.findByPk(req.params.id, { include: City });
    if (!province) {
      return res.status(404).json({ message: "Viloyat topilmadi." });
    }
    res.json(province);
  } catch (error) {
    res.status(500).json({ message: "Viloyatni olishda xatolik." });
  }
};

export const createProvince = async (req, res) => {
  try {
    const province = await Province.create(req.body);
    res.status(201).json(province);
  } catch (error) {
    res.status(500).json({ message: "Viloyat yaratishda xatolik." });
  }
};

export const updateProvince = async (req, res) => {
  try {
    const province = await Province.findByPk(req.params.id);
    if (!province) {
      return res.status(404).json({ message: "Viloyat topilmadi." });
    }
    await province.update(req.body);
    res.json(province);
  } catch (error) {
    res.status(500).json({ message: "Viloyatni yangilashda xatolik." });
  }
};

export const deleteProvince = async (req, res) => {
  try {
    const province = await Province.findByPk(req.params.id);
    if (!province) {
      return res.status(404).json({ message: "Viloyat topilmadi." });
    }
    await province.destroy();
    res.json({ message: "Viloyat o‘chirildi." });
  } catch (error) {
    res.status(500).json({ message: "Viloyatni o‘chirishda xatolik." });
  }
};
