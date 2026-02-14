import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      
      localStorage.setItem("token", token);
      navigate("/notes");
      
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      
      <div className="bg-secondary-background border-2 border-border shadow-shadow rounded-base p-12 w-full max-w-md text-center space-y-8 transition-all duration-300">

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-main">Lead Notes</span> App
          </h1>
          <p className="text-sm opacity-70">
            Organize your thoughts beautifully ✨
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-base text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 rounded-full bg-main text-main-foreground 
          shadow-shadow transition-all duration-200
          hover:translate-x-[3px] hover:translate-y-[3px]
          hover:shadow-none
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
        >
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>

      </div>
    </div>
  );
}