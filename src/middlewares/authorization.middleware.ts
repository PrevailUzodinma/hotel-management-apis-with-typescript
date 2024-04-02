// Extending the Express Request interface to include a user property

declare global {
  namespace Express {
    interface Request {
      user?: { userId?: string; role?: string }; // Add the role property here
    }
  }
}

import { Request, Response, NextFunction } from "express";

export const authorizationMiddleware = (
  allowedRoles: string[]
) => (req: Request, res: Response, next: NextFunction) => {
  // Check if user is authenticated
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized: User not authenticated" });
  }

  // Check if user has required role
  const userRole = req.user.role;
  if (!allowedRoles.includes(userRole!)) {
    return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
  }

  // User is authorized, proceed to the next middleware
  next();
};

export default authorizationMiddleware;
