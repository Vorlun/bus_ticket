import { City } from "../models/city.model.js";
import { Province } from "../models/province.model.js";

export const getAllCities = async (req, res) => {
  try {
    const cities = await City.findAll({ include: Province });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: "Shaharlarni olishda xatolik." });
  }
};

export const getCityById = async (req, res) => {
  try {
    const city = await City.findByPk(req.params.id, { include: Province });
    if (!city) {
      return res.status(404).json({ message: "Shahar topilmadi." });
    }
    res.json(city);
  } catch (error) {
    res.status(500).json({ message: "Shaharni olishda xatolik." });
  }
};

export const createCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ message: "Shahar yaratishda xatolik." });
  }
};

export const updateCity = async (req, res) => {
  try {
    const city = await City.findByPk(req.params.id);
    if (!city) {
      return res.status(404).json({ message: "Shahar topilmadi." });
    }
    await city.update(req.body);
    res.json(city);
  } catch (error) {
    res.status(500).json({ message: "Shaharni yangilashda xatolik." });
  }
};

export const deleteCity = async (req, res) => {
  try {
    const city = await City.findByPk(req.params.id);
    if (!city) {
      return res.status(404).json({ message: "Shahar topilmadi." });
    }
    await city.destroy();
    res.json({ message: "Shahar o‘chirildi." });
  } catch (error) {
    res.status(500).json({ message: "Shaharni o‘chirishda xatolik." });
  }
};
