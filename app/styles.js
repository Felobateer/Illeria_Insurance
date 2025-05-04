const styles = {
    navbar: {
      container: 'w-full flex justify-between items-center p-4 border-b border-gray-300',
      logo: 'text-gray-700 text-lg font-bold',
      navLinks: 'flex space-x-4',
      link: 'text-md font-normal text-gray-700 hover:text-gray-400 transition duration-300 ease-in-out',
      button: "bg-gray-800 text-gray-50 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out",
    },
    footer: {
        container: 'w-full bg-gray-800 p-4 border-t border-gray-300',
        content: 'flex justify-between items-center',
        text: 'text-gray-100 text-sm',
        socialIcons: 'flex flex-col space-x-4',
        icon: 'text-gray-100 hover:text-gray-400 transition duration-300 ease-in-out',
    },
    dropdown: {
        container: 'relative inline-block text-left',
        button: 'inline-flex justify-center w-full rounded-md border border-none px-1  bg-white text-md font-medium text-gray-700 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        menu: 'absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
        item: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
        itembtn: 'block w-full text-sm text-start text-gray-700 hover:bg-gray-100',
        arrow: 'ml-2',
    }
  }
  
  export default styles
  