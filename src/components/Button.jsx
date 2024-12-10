
export const Button=(
  {disabled,children,onClick})=>{
        return <span onClick={onClick} className={`rounded-2xl text-2xl px-12 py-4 cursor-pointer m-10 ${disabled? "bg-blue-600": "bg-blue-500" }`}>
         {children}
        </span>

}

