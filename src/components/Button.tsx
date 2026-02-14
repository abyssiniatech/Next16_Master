'use client';
interface btnprops {
    children: string;
}
export default function Button({ children }: btnprops) {
     
    return (
        <div>
            <button
                className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
                onClick={() => console.log('click me')}>
                {children}
            </button>
        </div>
    );
}
