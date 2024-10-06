export default function SubmitBtn ({ onClick, text }) {
    return(
        <button
            type="submit"
            onClick={onClick}
            className="bg-customBlue hover:bg-blueHover px-4 py-2 rounded border-none"
        >
         {text || 'Submit'}
        </button>
    )
}

