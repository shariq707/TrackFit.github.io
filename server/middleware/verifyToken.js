// import admin from "../config/firebase-config.js";

// const verifyToken = async (req, res, next) => {
//   const authHeader = req.headers["authorization"];

//   if (!authHeader) {
//     return res.status(403).json({ error: "No token provided" });
//   }

//   const token = authHeader.split(" ")[1]; // Extract the token from the "Bearer" string
//   try {
//     const decodedToken = await admin.auth().verifyIdToken(token);

//     if (decodedToken) {
//       req.user = decodedToken;
//       return next();
//     }
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     return res.status(403).json({ error: "Invalid token" });
//   }
// };

// export default verifyToken;










import admin from "../config/firebase-config.js"; // Firebase config file

const verifyToken = async (req, res, next) => {
  // Extract token from the "Authorization" header
  const authHeader = req.headers["authorization"];
  
  // Check if authorization header is provided
  if (!authHeader) {
    return res.status(403).json({ error: "No token provided" });
  }

  // Split the token from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);

    // If the token is valid, add the decoded user to the request object
    if (decodedToken) {
      req.user = decodedToken; // Add the decoded token data to the req object
      return next(); // Proceed to the next middleware or route handler
    }
  } catch (error) {
    // Handle errors (like invalid token, expired token, etc.)
    console.error("Error verifying token:", error);
    return res.status(403).json({ error: "Invalid token" });
  }
};

export default verifyToken;
