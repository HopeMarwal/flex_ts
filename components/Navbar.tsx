//Navlinks
import { NavLinks } from '@/constants/intex'
//Next
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders'


const Navbar = () => {
  const session = {}

  return (
    <nav className='flexBetween navbar'>
      <div className=' flex flex-1 flex-start gap-10'>
        {/* Home link logo */}
        <Link href='/'>
          <Image
              src='/logo.svg'
              width={115}
              height={43}
              alt='flexibble logo'
          />
        </Link>

        <ul className='xl:flex hidden text-small gap-7'>
          { NavLinks.map((link) => (
            <Link key={link.key} href={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
          {session ? (
            <>
              UserPhoto
              <Link href='/create-project'>Shore work</Link>
            </>
          ) : (
            <AuthProviders />
          )
            
          }
      </div>
    </nav>
  )
}

export default Navbar