import { Buses } from "../models/bus.model.js";
import { Drivers } from "../models/driver.model.js";

export const getAllBuses = async (req, res) => {
  try {
    const buses = await Buses.findAll({ include: Drivers });
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: "Avtobuslarni olishda xatolik." });
  }
};

export const getBusById = async (req, res) => {
  try {
    const bus = await Buses.findByPk(req.params.id, { include: Drivers });
    if (!bus) {
      return res.status(404).json({ message: "Avtobus topilmadi." });
    }
    res.json(bus);
  } catch (error) {
    res.status(500).json({ message: "Avtobusni olishda xatolik." });
  }
};

export const createBus = async (req, res) => {
  try {
    const bus = await Buses.create(req.body);
    res.status(201).json(bus);
  } catch (error) {
    res.status(500).json({ message: "Avtobus yaratishda xatolik." });
  }
};

export const updateBus = async (req, res) => {
  try {
    const bus = await Buses.findByPk(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: "Avtobus topilmadi." });
    }
    await bus.update(req.body);
    res.json(bus);
  } catch (error) {
    res.status(500).json({ message: "Avtobusni yangilashda xatolik." });
  }
};

export const deleteBus = async (req, res) => {
  try {
    const bus = await Buses.findByPk(req.params.id);
    if (!bus) {
      return res.status(404).json({ message: "Avtobus topilmadi." });
    }
    await bus.destroy();
    res.json({ message: "Avtobus o‘chirildi." });
  } catch (error) {
    res.status(500).json({ message: "Avtobusni o‘chirishda xatolik." });
  }
};
