export default function({text, color})
{
    return (
        <div className='px-2 font-thin text-sm leading-relaxed tracking-normal text-slate-200 border rounded-md hover:bg-slate-800 cursor-pointer'>
            {text}
        </div>
    )
}