import { Drivers } from "../models/driver.model.js";
import { Buses } from "../models/bus.model.js";

export const getAllDrivers = async (req, res) => {
  try {
    const drivers = await Drivers.findAll({ include: Buses });
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: "Haydovchilarni olishda xatolik." });
  }
};

export const getDriverById = async (req, res) => {
  try {
    const driver = await Drivers.findByPk(req.params.id, {
      include: Buses,
    });
    if (!driver) {
      return res.status(404).json({ message: "Haydovchi topilmadi." });
    }
    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: "Haydovchini olishda xatolik." });
  }
};

export const createDriver = async (req, res) => {
  try {
    const driver = await Drivers.create(req.body);
    res.status(201).json(driver);
  } catch (error) {
    res.status(500).json({ message: "Haydovchi yaratishda xatolik." });
  }
};

export const updateDriver = async (req, res) => {
  try {
    const driver = await Drivers.findByPk(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: "Haydovchi topilmadi." });
    }
    await driver.update(req.body);
    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: "Haydovchini yangilashda xatolik." });
  }
};

export const deleteDriver = async (req, res) => {
  try {
    const driver = await Drivers.findByPk(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: "Haydovchi topilmadi." });
    }
    await driver.destroy();
    res.json({ message: "Haydovchi o‘chirildi." });
  } catch (error) {
    res.status(500).json({ message: "Haydovchini o‘chirishda xatolik." });
  }
};
