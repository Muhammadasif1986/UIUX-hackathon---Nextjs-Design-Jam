
import MenuNav from "../components/Menu/MenuNav";
import ShopPage from "../components/OurShop/ShopPage";
import { useRouter } from "next/router"
import Header from '../components/Header'

export default function Shop() {
  
  const pageName = "Shop"
  const route ="/app/shop/shopDetails"
  return (
    <div>
        <MenuNav />
      <Header 
      name={pageName}
      route={route}
      />
      <ShopPage />
      
    </div>
  )
}
