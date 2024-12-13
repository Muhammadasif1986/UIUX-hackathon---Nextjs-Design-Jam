import MenuNav from "../components/Menu/MenuNav";
import ShopPage from "../components/OurShop/ShopPage";

import Header from '../components/Header'

export default function Shop() {
  const pageName = "Shop"
  return (
    <div>
        <MenuNav />
      <Header 
      name={pageName}
      />
      <ShopPage />
      
    </div>
  )
}
