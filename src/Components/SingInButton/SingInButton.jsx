import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SingInButton(){
  const {data:session} = useSession()
 
    return session ? (
        <button className="nav-btn" onClick={()=>signOut()}>
        <FaGithub color="#04d361"/>
        Jonathan Lux
        <FiX className="closeIcon" color="#04d361"/>

      </button>
    )
    : (
        <button className="nav-btn"  onClick={()=>signIn("github")}>
        <FaGithub color="#eba417"/>
        Sing in with GitHub
      </button>
    )
}

