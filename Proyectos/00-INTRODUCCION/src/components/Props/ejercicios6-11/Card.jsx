

const Card = ({title,body,footer}) => {
  return (
    <div className='bg-gray-200 p-4 m-4 rounded shadow-md w-[50%] text-center mx-auto'>
      {title && <h1 className='text-xl font-bold mb-2'>{title}</h1>}
      {body && <p className='mb-4'>{body}</p>}
      {footer && <p className='text-sm text-gray-500'>{footer}</p>}
    </div>
  )
}

export default Card;
