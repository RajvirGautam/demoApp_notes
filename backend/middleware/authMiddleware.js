import admin from "../firebaseAdmin.js";
import { User } from "../db.js";

const verifyFirebaseToken = async (req, res, next) => {
  try {
    console.log("🔍 Auth middleware hit");
    
    const authHeader = req.headers.authorization;
    console.log("📝 Auth header:", authHeader ? "exists" : "missing");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("❌ No Bearer token");
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    console.log("🎫 Token extracted:", token ? "yes" : "no");

    console.log("🔐 Verifying token with Firebase...");
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log("✅ Token verified! UID:", decodedToken.uid);

    const firebaseUID = decodedToken.uid;

    let user = await User.findOne({ firebaseUID });
    console.log("👤 User found:", user ? "yes" : "creating new");

    if (!user) {
      user = await User.create({
        firebaseUID,
        email: decodedToken.email,
        name: decodedToken.name || "",
      });
      console.log("✅ New user created");
    }

    req.user = user;
    next();
    
  } catch (error) {
    console.error("❌ Auth error:", error.message);
    console.error("Full error:", error);
    return res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

export default verifyFirebaseToken;