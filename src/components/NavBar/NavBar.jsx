import { Link } from 'react-router-dom';
import { TfiPencilAlt } from 'react-icons/tfi';

const NavBar = () => {
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Create Post',
      path: '/create-post',
      icon: <TfiPencilAlt className='mr-2' size={20} />,
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ];

  //TfiPencilAlt

  return (
    <div className='flex w-full justify-between md:px-10 md:py-5'>
      <h1>navbar</h1>

      <nav>
        <ul className='flex'>
          {links.map((link, i) => (
            <li className='pl-10 hover:text-red-700' key={i}>
              <Link className='flex items-center ' to={link.path}>
                {link?.icon && link?.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
