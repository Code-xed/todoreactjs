import './Header/Rhead.css';

function SideBar({ham, setHam}) {
  return (
    <div className={`h-100 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row flex-flow-reverse ${ham ? "ham-open" : "ham-close"}`}>
      <div className="b">
      <ul className="ml-4 mt-4 text-4xl text-bold text-white" style={{'listStyle': 'none'}}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Github</li>
      </ul>
      </div>
      <div className="mx-2">
      <button className="bg-red-700 text-stone-200 rounded-lg shadow-md shadow-stone-400 p-2 w-30">Contact Me</button>
      </div>
    </div>
    );
}

export default SideBar;