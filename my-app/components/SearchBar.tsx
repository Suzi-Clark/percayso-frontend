type SearchProps = {
   onClick: React.MouseEventHandler<HTMLButtonElement>,
   onChange: React.ChangeEventHandler<HTMLInputElement> 
}

export default function SearchBar({onClick, onChange}: SearchProps) {


    return(
        <div>
           <input type="text" placeholder="Search" onChange={onChange}></input>
          <button onClick={onClick}>
            <span>Search</span>
          </button>
        </div>
    )
}