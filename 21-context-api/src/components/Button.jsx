import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        setTheme('dark')
    }
  return (
    <div className='m-12'>
        <button onClick={changeTheme}
        className='bg-red-600'
        >Change Theme
        {theme}
        </button>
    </div>
  )
}

export default Button