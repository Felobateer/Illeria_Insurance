const styles = {
    navbar: {
      container: 'w-full flex justify-between items-center leading-normal py-4 px-12 border-b border-gray-300',
      logo: 'text-gray-700 text-xl font-bold',
      navLinks: 'flex space-x-4',
      link: 'text-md mt-2 px-1 font-normal text-gray-700 hover:text-gray-400 transition duration-300 ease-in-out',
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
        button: 'inline-flex justify-center mt-2 w-full rounded-md border border-none px-1  bg-white text-md font-medium text-gray-700 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        menu: 'absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
        item: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
        itembtn: 'block w-full text-sm text-start text-gray-700 hover:bg-gray-100',
        arrow: 'ml-2',
    },
    hero: {
        container: 'relative flex flex-col items-center justify-center h-fit bg-gray-100',
        shade: 'w-full h-full absolute inset-0 bg-black opacity-20',
        subcontainer: 'absolute z-10 w-fit flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center px-8 rounded-lg shadow-lg',
        subshade: 'w-full h-full absolute inset-0 bg-black opacity-50 z-1 rounded-lg',
        content: 'relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center p-8 rounded-lg shadow-lg',
        title: 'text-4xl font-bold text-gray-100',
        img: 'w-full h-[540px] object-center object-cover z--1',
        description: 'mt-4 text-lg text-gray-200',
        text: 'text-center text-gray-700',
        subtext: 'text-center text-gray-600',
        subtitle: 'mt-2 text-lg text-gray-600',
        button: 'mt-4 bg-blue-800 w-[260px] text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out',
    }
  }
  
  export default styles
  