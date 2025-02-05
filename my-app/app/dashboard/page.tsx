import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MenuNav from '../components/Menu/MenuNav'
import Header from '../components/Header'

export default function DashboardPage() {
  const { userId } = auth(); // Server-side authentication
const Name = "Dashboard"
  if (!userId) {
    redirect("/sign-in"); // Redirect if user is not logged in
  }

  return( 
  <div>
  <MenuNav />
       <Header
       name={Name}
       />
  <div>Welcome to the Dashboard!</div>;
  </div>
  )
}
