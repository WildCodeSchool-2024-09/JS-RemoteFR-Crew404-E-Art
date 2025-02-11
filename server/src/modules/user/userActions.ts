import type { RequestHandler } from "express";

import userRepository from "./userRepository";
const sendRequest: RequestHandler = async (req, res, next) => {
  try {
    if (!req.user) {
      throw new Error("User not found");
    }
    const response = await userRepository.requestSend(req.user.id);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const browseRequest: RequestHandler = async (req, res, next) => {
  try {
    const response = await userRepository.requestBrowseAll();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const acceptRequest: RequestHandler = async (req, res, next) => {
  try {
    await userRepository.requestAccept(Number.parseInt(req.params.id, 10));
    // remove request from the list
    await userRepository.deleteRequest(req.params.id);
    res.json({ message: "Request accepted" });
  } catch (error) {
    next(error);
  }
};

export default { sendRequest, browseRequest, acceptRequest };
