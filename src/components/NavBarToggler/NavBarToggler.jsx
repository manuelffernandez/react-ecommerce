import NavItem from '../NavItem/NavItem';
import { categories } from '../../utils/categories';

const NavBarToggler = () => {
  return (
    <>
      <button
        className='navbar-toggler order-3 col-2 border-0 shadow-none'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <i className='fa-solid fa-bars text-light'></i>
      </button>
      <div
        className='collapse navbar-collapse order-4 order-sm-2'
        id='navbarSupportedContent'>
        <ul className='navbar-nav w-100 justify-content-evenly'>
          {categories.map(cate => {
            return <NavItem categoryName={cate.category} key={cate.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBarToggler;