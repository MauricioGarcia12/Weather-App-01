import React from 'react'
import PropTypes from 'prop-types'

const Clima = ({resultado}) => {
    //extraer los valores
    const {name,main}=resultado;
    if(!name) return null;

    //convertir 
    const kelvin =273.15;
    //bg
    let bg;

    if(main.temp-kelvin<25){
        bg='frio'
    }
    else if(main.temp-kelvin>25){
        bg='calor'
    }

    return ( 
        <div className= {bg +" col s12"}>
            
            <div className='black-text'>
                <h2>El clima de {name} es</h2>

                <p className='temperatura'>
                    {parseFloat(main.temp-kelvin,10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p className='white-text' >temperatura Maxima: {parseFloat( main.temp_max-kelvin,10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p className='white-text' >temperatura Minima: {parseFloat( main.temp_min-kelvin,10).toFixed(2)} <span> &#x2103;</span>
                </p>
            </div>
        </div>
     );
}
 
Clima.propTypes ={
    resultado:PropTypes.object.isRequired
}
export default Clima;