import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  // set token using local storage
  // const authHeader = req.headers.authorization;

  // if (!authHeader || !authHeader.startsWith("Bearer")) {
  //   throw new UnAuthenticatedError("Authentication Invalid");
  // }
  // const token = authHeader.split(" ")[1];

  //set token with cookie
  const token = req.cookies.token;
  if (!token) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
  } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid");
  }
  next();
};

export default auth;
