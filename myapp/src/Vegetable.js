import React from 'react'

function Vegetables(props)    {//prop means property}
    // console.log(props.data)
    const Data=props.data.map((item)=>{
        return(
            <div key={item.name} className='card'>
                <div className='card_image'>
                    <img src={require(`./Images/${item.image}.jpg`)} alt=""/>
                </div>
                <p className='pro_name'>{item.name}</p>
                <p className='pro_price'>{item.price}</p>
                <button onClick={()=>{ClickHere(item.name)}} type="button">Order</button>
            </div>
        )
    })
    const ClickHere=(name)=>{
        // console.log('yes')
        // props.funcSend('yes from child')
        // props.funcSend(`Order booked ${name}`)
        props.funcSend(name)
    }
    return(
        <>
            {Data}{/*  data whichever between the curly braces will be treated as value */}
            {/* <button onClick={()=>{ClickHere()}}>Here</button> */}
        </>
    )
}

export default Vegetables