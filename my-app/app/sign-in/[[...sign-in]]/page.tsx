import { SignIn } from '@clerk/nextjs';
import MenuNav from '../../../app/components/Menu/MenuNav'
import Header from '../../../app/components/Header'
export default function SignInPage() {

      const Name = "Sign In"
  return(
    <div>
      <MenuNav />
      <Header 
      name={Name}
      />
      <div className='flex justify-center items-center py-20'>
      <SignIn  />
  </div>
    </div>
  )
}