type SearchProps = {
   onClick: React.MouseEventHandler<HTMLButtonElement>,
   onChange: React.ChangeEventHandler<HTMLInputElement> 
}

export default function SearchBar({onClick, onChange}: SearchProps) {


    return(
        <div className="search-bar">
           <input className="search-input" type="text" placeholder="Keyword Search" onChange={onChange}></input>
          <button className="search-button" onClick={onClick}>
            <span>Go</span>
          </button>
        </div>
    )
}