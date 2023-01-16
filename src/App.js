import { BsArrowLeftShort,BsFillPersonLinesFill,BsSearch,BsFillBarChartFill,BsChevronDown,BsJournalText,BsArrowBarUp,BsCardChecklist,BsColumnsGap,BsPerson,BsLock,BsGear,BsGrid } from "react-icons/bs";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import {useState} from "react";


function App() {

  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen]  = useState(true)
  const Menus = [

    {title:"Dashboard" ,icon:<BsGrid/> },
    {title:"Posts", icon: <BsJournalText/> },
    {title:"Media", icon:<BsArrowBarUp/> },

    {
      title:"Projects", icon: <BsCardChecklist/>,
      submenu:true,
      submenuItems:[
      {title:"Submenu 1"},
      {title:"Submenu 2"},
      {title:"Submenu 3"},
      ], 
    },

    {title:"Analytics" , icon:<BsColumnsGap/>,spacing:true},
    {title:"Updates"},
    {title:"Profile", icon:<BsPerson/>, },
    {title:"Setting",icon:<BsGear/>},
    {title:"Logout",icon:<BsLock/>},
  ];



  return (
    <div className="flex">
    {/* left sidebar */}
      <div className= {`bg-dark-purple h-screen p-5 pt-8 text-white relative ${open ? "w-72" : "w-20"} duration-300 `}>
      <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
      <div className="inline-flex">
        <BsFillPersonLinesFill className="text-4xl rounded block float-left"/>
        <h1 className= {`text-white origin-left font-medium px-2 text-2xl duretion-300 ${!open && "scale-0" }`} >Profile</h1>
      </div>
          <div className={`flex items-center rounded-md bg-slate-300 mt-6 py-2 px-4 ${!open ? "px-2.5" : "px-4"}`}>
            <BsSearch className= {`text-black text-lg block cursor-pointer float-left ${open && "mr-2"}`}/>
            <input type={"search"} placeholder="Serach " 
            className= {`px-2 text-base bg-transparent w-full text-black focus:outline-none ${!open && "hidden"}`}  />
          </div>

          <ul className="pt-2">
            {Menus.map((menu,index) => (
              <>
              <li key={index}
              className={`text-white text-sm flex gap-x-4 items-center p-2 hover:bg-slate-400 mt-2 rounded cursor-pointer ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className="text-2xl block float-left">

                { menu.icon ? menu.icon :  <BsFillBarChartFill/>}
                </span>
                 <span className={`text-base font-medium flex-1 duration-300 ${!open && "hidden"}`}>{menu.title}</span>
                 {menu.submenu && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={()=> setSubmenuOpen(!submenuOpen) }/>
                 )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li key={index}
                    className={`text-white text-sm flex gap-x-4 items-center p-2 hover:bg-purple-500 mt-2 rounded cursor-pointer`}
                    > 
                    {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
            
            ))}
          </ul>
      </div>
      {/* left sidebar ends */}

      {/* page section */}
      <div className="p-7">
      <h1 className="text-2xl font-semibold">Dashboard</h1></div>
    </div>
  );
}

export default App;
