

const ConditionalRender = ({condition}) => {
  return (
    <div>
      {condition ? (
        <p>Condición verdadera</p> 
        ) : (
          <p>Condición falsa</p>
        )
        
      }
    </div>
  )
}

export default ConditionalRender;
