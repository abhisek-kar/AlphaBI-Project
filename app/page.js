"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "@/components/Loader";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    setLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        // storing token in local storage

        const token = user.accessToken;
        localStorage.removeItem("user-token");
        localStorage.setItem("user-token", token);
        alert("successfully logged in");
        router.push("/content");
      }
      setLoading(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      const errorCode = error.code.split("auth/")[1];
      alert(errorCode);
      setLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 pt-24 bg-[#E8EBEF]">
      <form
        onSubmit={handleSubmit}
        className=" bg-white w-[60%] p-4 rounded-xl flex flex-col items-center justify-center gap-5"
      >
        <h1 className="text-2xl font-semibold font-mono">Please Login</h1>
        {/* input for mail */}
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Enter Your Email"
          className="border-2 border-black rounded-md p-2 w-3/4 font-mono  font-semibold tracking-wide text-lg"
        />
        {/* input for password */}
        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          type="password"
          placeholder="Enter Password"
          className="border-2 border-black rounded-md p-2 w-3/4 font-mono  font-semibold tracking-wide text-lg"
        />
        {/* submit button */}
        <button
          type="submit"
          className="bg-black text-white hover:opacity-80 py-2 w-3/4 text-lg tracking-wide rounded-full font-mono mt-5 mb-2 "
        >
          Login
        </button>
        {/* if not registered */}
        <div>
          Not Registered Yet,
          <Link href={"/register"} className="text-blue-600 ">
            {" "}
            Please Register
          </Link>
        </div>
      </form>
      {loading ? (
        <div className="fixed right-0 left-0 top-0 bottom-0    bg-opacity-20">
          <Loader />
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}
